import {FC} from 'react';
import Navbar from "../../components/header/navbar/Navbar";
import Searchbar from "../../components/header/searchbar/Searchbar";
import LoginButton from "../../components/header/loginButton/LoginButton";
import Clock from "../../components/header/watch/Clock";

const Header: FC<{}> = ({}) => {
    return (
        <header>
            <h1>Pixel Chest</h1>
            <Navbar isLogged={false}/>
            <Searchbar/>
            <LoginButton/>
            <Clock/>
        </header>
    );
};

export default Header;
