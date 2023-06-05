"use client";

import classes from './main.module.scss';
import logo from '../../../assets/img/logo.png';
import DarkMode from '@/components/darkmode';

function Header() {

    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={logo.src} />
            </div>
            <div className={classes.darkmode}>
                <DarkMode/>
            </div>
        </div>
    );
}

export default Header;