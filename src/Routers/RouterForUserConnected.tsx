import {FC} from 'react';
import {RouteType} from "../types/routeType";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import GameDetailsPage from "../pages/GameDetailsPage";
import StudioDetailsPage from "../pages/StudioDetailsPage";
import {Route, Routes} from "react-router-dom";
import LayoutNotConnected from "../layout/LayoutNotConnected";
import UserSettingPage from "../pages/UserSettingsPage";
import UserDashboardPage from "../pages/UserDashboardPage";
import LayoutConnected from "../layout/LayoutConnected";

const RouterForUserConnected: FC<{}> = ({}) => {
    const routesForUserConnected: RouteType[] = [
        {path: "/", element: <HomePage/>},
        {path: "/login", element: <LoginPage/>},
        {path: "/game/:id", element: <GameDetailsPage/>},
        {path: "/studio/:id", element: <StudioDetailsPage/>},
        {path: "/user", element: <UserDashboardPage/>},
        {path: "/user/settings", element: <UserSettingPage/>},
    ]

    return (
        <Routes>
            <Route path="/" element={<LayoutConnected/>}>
                {routesForUserConnected.map((route: RouteType, index: number) => <Route key={index} path={route.path} element={route.element}/>)}
            </Route>
        </Routes>
    );
};

export default RouterForUserConnected;
