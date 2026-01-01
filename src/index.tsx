import {
    createBrowserRouter,
        RouterProvider,
} from "react-router";
import {createRoot} from "react-dom/client";

import App from "@/components/App";
import {Suspense} from "react";
import LazyAbout from "./components/About";
import {Asset} from "@/components/Assets";


const root = document.getElementById("root");

if (!root) {
    throw new Error("root is undefined");
}

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={<div>Loading</div>} ><LazyAbout/></Suspense>,
            },
            {
                path: "/assets",
                element: <Asset />,
            }
        ]
    },
]);

const container = createRoot(root);

container.render(
    <RouterProvider router={router} />,
);