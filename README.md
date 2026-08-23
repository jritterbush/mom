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

## Deploy

The site is hosted in Cloudflare Workers and Pages. It is deployed by opening a PR against the main branch, then on successful merge a deploy to production will happen.
