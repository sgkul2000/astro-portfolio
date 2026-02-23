# Personal Portfolio

This repository contains a single-page portfolio built with [Astro](https://astro.build) and Tailwind CSS. It uses minimalist, high-contrast styling and SEO optimizations to maximize reach.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view locally.

## Deployment (GitHub Pages)

A GitHub Actions workflow has been added (`.github/workflows/deploy.yml`) which automatically builds the site and publishes the `dist` directory to the `gh-pages` branch whenever `main` is pushed.

1. Push your code to the `main` branch.
2. Go to **Settings > Pages** in your GitHub repository.
3. Under "Build and deployment", ensure "GitHub Actions" is selected.
4. The site will be available at `https://<your-username>.github.io/<repo>` (or your custom domain if you configure one).
5. To use a custom domain like `shreeshkulkarni.dev`, add a `CNAME` file to the `public` folder or uncomment the `cname` option in the workflow and set the domain in the Pages settings.

The `homepage` field in `package.json` is set to `https://shreeshkulkarni.dev` for reference.

## SEO Features

- Canonical tags, Open Graph, Twitter cards
- Structured data (`Person` & `WebSite` JSON-LD)
- Static `sitemap.xml` and `robots.txt`

## Notes

*Update your Twitter handle and any other personal URLs in `src/layouts/Layout.astro` as needed.*
