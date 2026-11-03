# Austin Widmer

Personal portfolio for aerospace engineering research, professional experience, and weightlifting coaching. Built with Astro and Tailwind CSS.

## Local Development

```sh
npm ci
npm run dev
```

The development server is available at `http://localhost:4321`.

## Content

- `src/content/publications/` contains research papers and download metadata.
- `src/content/projects/` contains selected projects.
- `src/content/blog/` is reserved for future posts; no placeholder posts are published.
- `src/pages/` contains the home, About, experience, publications, and projects pages.

Global identity, canonical URL, social links, and navigation are configured in `src/config/site.ts`. Content schemas are in `src/content.config.ts`.

## Checks

```sh
npm run check
npm run lint:check
npm test -- --run
npm run build
```

The site is being prepared for GitHub Pages at [austinwidmer.github.io](https://austinwidmer.github.io). The Astro application will be deployed from the repository named `austinwidmer.github.io` so it uses the root user-site URL.
