import {FC} from 'react';
import {RouteType} from "../types/routeType";
import {Route, Routes} from "react-router-dom";
import LayoutNotConnected from "../layout/LayoutNotConnected";

const RouterForUserNotConnected: FC<{}> = ({}) => {
    const routesForUserNotConnected: RouteType[] = [
        {path: "/", element: <HomePage/>},
    ]

    return (
        <Routes>
            <Route path="/" element={<LayoutNotConnected/>}>
                {routesForUserNotConnected.map((route: RouteType, index: number) => <Route key={index} path={route.path} element={route.element}/>)}
            </Route>
        </Routes>
    );
};

export default RouterForUserNotConnected;
