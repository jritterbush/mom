export const site = {
	title: 'Deb Ritterbush Memorial',
	url: 'https://johnritterbush.com/',
	author: 'John Ritterbush',
	tagline: 'Web Developer and UI/UX Consultant',
	description:
		'Remembering Debra Lea Ritterbush (1953-2022): wife, aunt, mother, grandma, and friend.',
	image:
		'https://johnritterbush.com/images/projects--johnritterbush-responsive.jpg',
	socials: {
		twitter: {
			handle: '@johnritterbush',
		},
		bluesky: {
			handle: '@john.ritterbu.sh',
		},
	},
	donateLinks: [
		{
			href: 'https://classy.org/campaign/research-fund-jonah-ritterbush/c130938',
			text: 'The Jonah Ritterbush Family Fund',
		},
		{
			href: 'https://alz.org',
			text: 'The Alzheimer’s Association',
		},
	],
} as const;

export type Site = typeof site;
