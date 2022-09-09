import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => 
        resolvePageComponent(
            `./Pages/${name}.tsx`, 
            import.meta.glob('./Pages/**/*.tsx')
    ),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

InertiaProgress.init({ color: '#4B5563' });