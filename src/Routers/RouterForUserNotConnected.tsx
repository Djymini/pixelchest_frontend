import {FC} from 'react';
import {RouteType} from "../types/routeType";
import {Route, Routes} from "react-router-dom";
import LayoutNotConnected from "../layout/LayoutNotConnected";
import HomePage from "../pages/main/HomePage";
import LoginPage from "../pages/main/LoginPage";
import GameDetailsPage from "../pages/main/GameDetailsPage";
import StudioDetailsPage from "../pages/main/StudioDetailsPage";
import GameExplorer from "../pages/main/GameExplorer";
import StudioExplorer from "../pages/main/Studio Explorer";

const RouterForUserNotConnected: FC<{}> = ({}) => {
    const routesForUserNotConnected: RouteType[] = [
        {path: "/", element: <HomePage/>},
        {path: "/login", element: <LoginPage/>},
        {path: "/game/explorer", element: <GameExplorer/>},
        {path: "/studio/explorer", element: <StudioExplorer/>},
        {path: "/game/:id", element: <GameDetailsPage/>},
        {path: "/studio/:id", element: <StudioDetailsPage/>}
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
