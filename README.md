# Deb Ritterbush Memorial Site

## Images - NEEDS REVIEW

The images are currently all loaded in an AWS S3 bucket. The `src/data/photos.json`
file is generated via the `npm run sync` but it is intensive so only run as needed.

You will need to set up the `.env` file with the credentials to work.

## Tech

Built using [Astro](https://astro.build/)

Run the development server:

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see the result.

## Deploy - IN PROGRESS

I'm migrating this site to Cloudflare via Github. First I need to get Astro building though so Cloudflare can discover it.
