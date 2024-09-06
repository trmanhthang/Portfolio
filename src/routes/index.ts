import DefaultLayout from "../components/layout/DefaultLayout.tsx";
import {Detail, Home} from "../pages";
import React from "react";

interface Routes {
    path: string,
    component: React.ElementType,
    layout: React.ElementType | null

}

const publicRoutes: Routes[] = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/detail", component: Detail, layout: DefaultLayout}
]

export {publicRoutes};