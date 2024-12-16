import React from "react";
import { Link } from 'react-router-dom';
import {HeaderPrincipal,HeaderH1,HeaderNav} from  './Header.js'


const Header = ()=> {
    return(
        <HeaderPrincipal>
            <HeaderH1>Mayoreo Store</HeaderH1>
            <HeaderNav>
            <Link to="/">Home</Link>
            <Link to="/products">Productos</Link>
            <Link to="/login">Login</Link>
            </HeaderNav>
        </HeaderPrincipal>
    );
};

export default Header;