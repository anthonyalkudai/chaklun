import React from "react";

export interface IMenuItem {
    title: string
    path: string
}

export interface RouteProps {
    key: string;
    path: string;
    component: React.ComponentType;
    meta?: RouteMetaData;
}

export interface RouteMetaData {
    title?: string;
}

export interface IBlog {
    title: string
    preview: string | string[]
    author: string
    category: string
    date: string
    body: string
    additionalBody?: string
    views: number
}

