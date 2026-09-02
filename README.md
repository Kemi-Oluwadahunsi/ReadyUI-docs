# ReadyUI Docs

The documentation and interactive playground site for [readyui-react](https://www.npmjs.com/package/readyui-react), an open source library of 50+ ready-to-use React UI components.

**Live site:** [readyui-docs.vercel.app](https://readyui-docs.vercel.app/)

This site walks through installation, usage, and props for every component in the library, with live, editable previews for each one.

## Tech Stack

- [React 19](https://react.dev/) + [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) for dev server and builds
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Prism.js](https://prismjs.com/) for code block syntax highlighting
- [readyui-react](https://www.npmjs.com/package/readyui-react) itself, used throughout the site to demo components live

## Getting Started

```bash
git clone https://github.com/Kemi-Oluwadahunsi/ReadyUI-docs.git
cd ReadyUI-docs
npm install
npm run dev
```

The dev server starts on `http://localhost:5173` by default.

## Available Scripts

| Script             | Description                          |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Start the local dev server            |
| `npm run build`    | Build the site for production         |
| `npm run preview`  | Preview the production build locally  |
| `npm run lint`     | Run ESLint                            |

## Project Structure

```text
src/
├── components/         # Site UI: layout, sidebar, search, code blocks, props tables
├── data/
│   └── components.js   # Metadata for every documented component (name, category, description)
├── pages/
│   ├── Home.jsx
│   ├── GettingStarted.jsx
│   └── components/     # One page per documented component
├── App.jsx             # Route definitions
└── main.jsx            # App entry point
```

Adding documentation for a new component generally means:

1. Adding an entry to `src/data/components.js`
2. Creating its page under `src/pages/components/`
3. Registering the route in `src/App.jsx`

## Deployment

The site is deployed on [Vercel](https://vercel.com/) and configured as a single-page app via `vercel.json` (all routes rewrite to `index.html`). A `public/_redirects` file is also included for Netlify-style hosting if needed.

## Contributing

This project is open source and we're looking for developers to help it grow. That could mean documenting new components as they're added to [readyui-react](https://github.com/Kemi-Oluwadahunsi/ReadyToUse-React-Components), fixing errors or unclear explanations on existing pages, or improving the overall experience of the site. Every bit of help counts.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request against the `develop` branch (not main)

## Related

- [readyui-react on npm](https://www.npmjs.com/package/readyui-react)
- [readyui-react source (GitHub)](https://github.com/Kemi-Oluwadahunsi/ReadyToUse-React-Components)
- [Storybook](https://kemi-oluwadahunsi.github.io/ReadyToUse-React-Components)

## License

This site documents [readyui-react](https://github.com/Kemi-Oluwadahunsi/ReadyToUse-React-Components), which is licensed under MIT.
