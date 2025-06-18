import {FC} from 'react';
import {RouteType} from "../types/routeType";
import HomePage from "../pages/main/HomePage";
import LoginPage from "../pages/main/LoginPage";
import GameDetailsPage from "../pages/main/GameDetailsPage";
import StudioDetailsPage from "../pages/main/StudioDetailsPage";
import {Route, Routes} from "react-router-dom";
import LayoutNotConnected from "../layout/LayoutNotConnected";
import UserSettingPage from "../pages/main/UserSettingsPage";
import UserDashboardPage from "../pages/main/UserDashboardPage";
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
