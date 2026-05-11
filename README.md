# Swathi Vybhav (client)

React 18 single-page app, originally bootstrapped with Create React App and now powered by [Vite](https://vitejs.dev/).

## Tech stack

- React 18 + React Router
- Bootstrap 5 / React-Bootstrap
- react-slick, react-responsive-carousel, animate.css
- Vite (build + dev server) with @vitejs/plugin-react

## Local development

```bash
npm install
npm run dev       # starts the Vite dev server on port 3000
npm run build     # produces a production build in ./build
npm run preview   # serves the production build locally
```

## Project layout

```text
index.html            # Vite HTML entry point (root of the project)
vite.config.js        # Vite configuration
public/               # Static assets served as-is (favicons, logos)
src/
  index.js            # React entry point
  App.js              # Top-level routes
  *.js / *.css        # Pages, components and styles
```

## Migration notes

This project was migrated from `react-scripts` to Vite to remove the long chain of vulnerable transitive build dependencies that ship with CRA's webpack toolchain. The runtime React code is unchanged.
