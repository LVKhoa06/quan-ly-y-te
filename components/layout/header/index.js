"use client";

import classes from './main.module.scss';
import logo from '../../../assets/img/logo.png';

function Header() {

    return ( 
    <div className={classes.header}>
        {/* <img src={logo.src}/> */}
        <h1>Header</h1>
    </div>
     );
}

export default Header;