# Patrick Sullivan's Portfolio

## Roadmap

1. Setup scaffold site with automatic deployment
2. Scaffold routes/pages
3. Fill pages with basic content and create page structures
4. Hook-up pages to a dynamic data source (Headless CMS API)
   a. Perhaps leverage static JSON files via https://nextjs.org/docs/api-routes/introduction
5. Create basic style guide and associated theme
6. Create and style components as needed, start building w/in style-guide
7. Build out pages with those components, further styling as needed

### Any Phase

- Add analytics

## "CMS"

Leverage Google Sheets since it's easy, free, and serves my needs

1. Update [Google Sheet](https://docs.google.com/spreadsheets/d/1uM-R8iQ3AFeGzHZJJPE_vWZxuGrpDipg_q2GnsxN-ZQ/edit?usp=sharing)
2. Export as `.csv` into the `src/data` directory
3. Run the `yarn parse` command
4. Voila

## Resources

- [styled-components](https://github.com/zeit/next.js/tree/canary/examples/with-styled-components) with Next.js example
- https://usehooks.com/useDarkMode/
