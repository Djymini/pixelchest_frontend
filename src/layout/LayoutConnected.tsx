import {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../pages/header/Header";
import Footer from "../pages/footer/Footer";

const LayoutConnected: FC<{}> = ({}) => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default LayoutConnected;
