"use client";
import { useState, useEffect } from 'react';
import classes from './DarkMode.module.scss';
import IconSun from '../../assets/svg/icon-sun';
import IconMoon from '../../assets/svg/icon-moon';

function DarkMode({ onMouseDown }) {
    const [darkMode, setDarkMode] = useState(
        typeof window === "undefined" ? '' :
            window.localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        const html = window.document.getElementsByTagName('HTML')[0];
        const toggle = window.document.querySelector(`.${classes.toggleInner}`);

        if (darkMode) {
            html.setAttribute('data-theme', 'dark');
            window.localStorage.setItem('theme', 'dark');

            toggle.classList.add(classes.toggleActive);
        } else {
            html.setAttribute('data-theme', 'light');
            window.localStorage.setItem('theme', 'light');

            toggle.classList.remove(classes.toggleActive);
        }
    }, [darkMode]);

    return (
        <div
            onMouseDown={onMouseDown}
            className={classes.toggle}
            onClick={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}
        >
            <div className={classes.toggleInner}>
                {darkMode ?
                    <IconMoon width="23px" /> :
                    <IconSun width="18px" viewBox="0 0 64 64"  />}
            </div>
        </div>
    );
}

export default DarkMode;