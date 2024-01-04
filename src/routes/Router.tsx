import React from 'react';
import { Routes, Route } from "react-router-dom";
import {publicRoutes} from "./routes";
import AppRoute from "./AppRoute";

function Router() {
    return (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    key={route.key}
                    path={route.path}
                    element={
                        <AppRoute
                            routePath={route.path}
                            routeKey={route.key}
                            component={route.component}
                            metaData={route.meta}
                        />
                    }
                />
            ))}
        </Routes>
    )
}

export default Router;