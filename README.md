# Vue 3 + Tailwind Starter Project

A modern Vue 3 starter template using Vite, Tailwind CSS, Pinia, and pnpm for fast, beautiful, and maintainable web apps.

## Features

- Vue 3 + Vite for lightning-fast development
- Tailwind CSS for utility-first styling (with dark mode support)
- Pinia for state management (see `/store/todo.js` for example)
- Reusable components (see `/components`)
- Composables for local state and theme management
- Demo pages: Home, About, Store (Todo List)
- Dark/light theme toggle

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) package manager

### Install pnpm

If you don't have pnpm installed:

```sh
npm install -g pnpm
```

### Install dependencies

```sh
pnpm install
```

### Start the development server

```sh
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```sh
pnpm build
```

### Preview production build

```sh
pnpm preview
```

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons
│   ├── components/        # Reusable Vue components
│   ├── composables/       # Custom composables (e.g. use-theme.js)
│   ├── store/             # Pinia stores (e.g. todo.js)
│   ├── views/             # Page components (Home, About, Store)
│   ├── App.vue            # Main app layout
│   ├── main.js            # App entry point
│   ├── router.js          # Vue Router setup
│   └── style.css          # Global styles
├── index.html             # App entry HTML
├── package.json           # Project metadata
├── pnpm-lock.yaml         # pnpm lockfile
├── README.md              # This guide
└── vite.config.js         # Vite config
```

## Usage Guide

- **Dark/Light Theme:** Use the toggle in the header to switch themes. All pages and components support dark mode.
- **Todo List:** Visit `/store` to manage todos using Pinia store. Add, mark as done/undo, and delete todos.
- **Reusable Components:** See `/components` for examples like `demo-card.vue` and `dark-light-toggle.vue`.
- **Composables:** Use `/composables/use-theme.js` for global theme state, `/composables/use-demo.js` for local state.

## Recommended VS Code Extensions

- Volar (Vue 3 support)
- Tailwind CSS IntelliSense
- Pinia

## License

MIT
