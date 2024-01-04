import { FC } from 'react';
import {RouteMetaData} from "types/types";

interface AppRouteProps {
    component: React.ComponentType<any>;
    routeKey: string;
    routePath: string;
    blankLayout?: boolean;
    metaData?: RouteMetaData;
}

const AppRoute: FC<AppRouteProps> = ({ component: Component, routeKey, routePath, blankLayout = false, metaData }) => {

    return (
        <>
            <Component {...metaData} />
        </>
    )
}

export default AppRoute;