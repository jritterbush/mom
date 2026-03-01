import {
	S3Client,
	ListObjectsV2Command,
	GetObjectCommand,
} from '@aws-sdk/client-s3';
import sharp from 'sharp';
import fs from 'fs';

const s3 = new S3Client({ region: 'us-east-2' });
const BUCKET = 'mom-memorial-site';
const LOCAL_PATH = './src/data/photos.json';

async function generatePhotoData() {
	// 1. Load existing data if it exists
	let localData = [];
	if (fs.existsSync(LOCAL_PATH)) {
		localData = JSON.parse(fs.readFileSync(LOCAL_PATH, 'utf-8'));
	}

	// 2. Get current state of S3 bucket
	const command = new ListObjectsV2Command({
		Bucket: BUCKET,
		Prefix: 'thumbs/',
	});
	const { Contents } = await s3.send(command);

	// 3. Determine if we actually need to do work
	const needsUpdate = Contents.filter((obj) => obj.Key.endsWith('.jpg')) // only check actual images
		.some((obj) => {
			const filename = obj.Key.split('/').pop();
			const localMatch = localData.find((ld) => ld.filename === filename);
			return (
				!localMatch ||
				localMatch.lastModified !== obj.LastModified.toISOString()
			);
		});

	if (!needsUpdate) {
		console.log('Everything is up to date. Skipping sync.');
		return;
	}

	const photoManifest = [];

	for (const object of Contents) {
		if (!object.Key.endsWith('.jpg')) continue;

		const filename = object.Key.split('/').pop();

		// Get the image buffer to extract metadata
		const getObj = new GetObjectCommand({ Bucket: BUCKET, Key: object.Key });
		const response = await s3.send(getObj);
		const buffer = Buffer.from(await response.Body.transformToByteArray());

		// .rotate() reads the EXIF 'Orientation' tag and
		// applies the transformation before metadata is read.
		const image = sharp(buffer).rotate();
		const metadata = await image.metadata();

		photoManifest.push({
			filename,
			width: metadata.width,
			height: metadata.height,
			aspectRatio: metadata.width / metadata.height,
			lastModified: object.LastModified.toISOString(),
		});
	}

	fs.writeFileSync(LOCAL_PATH, JSON.stringify(photoManifest, null, 2));
	console.log('Photo manifest generated!');
}

generatePhotoData();
