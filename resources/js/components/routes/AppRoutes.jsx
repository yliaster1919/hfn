import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error404 from "./Error404";
import HomeIndex from "../homepage/Index";
import SectionIndex from "../content/Index";
export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <HomeIndex />,
            },
            {
                path: "/buy_ticket",
                element: <SectionIndex />,
            },
        ],
    },
    { path: "*", element: <Error404 /> },
]);
