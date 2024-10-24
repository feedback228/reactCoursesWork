import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, BrowserRouter} from 'react-router-dom';
import { Home } from './Home';
import { App } from './App'; 
import { Zagl } from './Zagl';

import './index.css';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
    },
    {
        path: '/kek',
        element: <Zagl />,
    },
    {
        path: '/lol',
        element: <Zagl />,
    },
    {
        path: '/lul',
        element: <Zagl />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </StrictMode>
);
