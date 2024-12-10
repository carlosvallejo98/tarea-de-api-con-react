import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'


const Header = ()=> {
    return(
        <header className="header">
            <h1>Mayoreo Store</h1>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Productos</Link>
            <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;