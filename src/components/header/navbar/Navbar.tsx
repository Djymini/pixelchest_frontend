import {FC} from 'react';
import {useNavigate} from "react-router-dom";

const Navbar: FC<{isLogged : boolean}> = ({isLogged}) => {
    return (
        <>
            {isLogged ?
                <nav>
                    <a href="/">Accueil</a>
                    <a href="/game/explorer">Catalogue</a>
                    <a href="/studio/explorer">Studio</a>
                    <a href="/user">Tableau de bord</a>
                </nav>
                :
                <nav>
                    <a href="/">Accueil</a>
                    <a href="/game/explorer">Catalogue</a>
                    <a href="/studio/explorer">Studio</a>
                </nav>
            }
        </>
    );
};

export default Navbar;
