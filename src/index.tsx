import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { ROUTES } from '@/app';

const root = document.getElementById('root');
const router = createBrowserRouter([ROUTES]);

createRoot(root).render(<RouterProvider router={router} />);
