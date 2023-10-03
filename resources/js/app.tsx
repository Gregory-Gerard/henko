import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

createInertiaApp({
  title: (title) => `${title} - Henko`,
  resolve: async (name) => {
    const pages = import.meta.glob<
      true,
      string,
      React.ReactNode & { default: { layout: (page: React.ReactNode) => React.ReactNode } }
    >('./pages/**/*.tsx', { eager: true });
    const page = pages[`./pages/${name}.tsx`];
    // page.default.layout = (page) => <AppLayout>{page}</AppLayout>;

    return page;
  },
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>,
    );
  },
  progress: {
    // The delay after which the progress bar will appear
    // during navigation, in milliseconds.
    delay: 0,

    // The color of the progress bar.
    color: '#6366f1',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: true,
  },
}).then();
