import React from "react";
import HomePage from "pages/HomePage/HomePage";
import AboutPage from "pages/AboutPage/AboutPage";
import FondPage from "pages/FondPage/FondPage";
import {RoutePaths} from "./routeConfig";
import BlogPage from "pages/BlogPage/BlogPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import {RouteProps} from "types/types";

export const publicRoutes: RouteProps[] = [
    {
        key: 'public.home',
        path: RoutePaths.HOME,
        component: () => (<HomePage />),
    },
    {
        key: 'public.about',
        path: RoutePaths.ABOUT,
        component: () => (<AboutPage />),
    },
    {
        key: 'public.fond',
        path: RoutePaths.FOND,
        component: () => (<FondPage />),
    },
    {
        key: 'public.blog',
        path: RoutePaths.BLOG,
        component: () => (<BlogPage />),
    },
    {
        key: 'public.contacts',
        path: RoutePaths.CONTACTS,
        component: () => (<ContactsPage />),
    },
]