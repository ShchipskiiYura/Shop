import React from 'react';
import classes from './Header.module.css';
import {BrowserRouter, Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.main}>
            <nav className={classes.navbar}>
                <div className={classes.left_header}>
                    <NavLink to={'/'}>
                        <div className={classes.logo}>logo</div>
                    </NavLink>
                </div>
                <div className={classes.center_header}>
                    <Link to={'/'}>
                        <div className={classes.item}>home</div>
                    </Link>
                    <Link to='/shop'>
                        <div className={classes.item}>shop</div>
                    </Link>
                    <NavLink to={'/pages'}>
                        <div className={classes.item}>pages
                        </div>
                    </NavLink>
                    <NavLink to={'/shop_inst'}>
                        <div className={classes.item}>shop instagram
                        </div>
                    </NavLink>
                    <NavLink to={'/collections'}>
                        <div className={classes.item}>collections
                        </div>
                    </NavLink>
                    <NavLink to={'/journal'}>
                        <div className={classes.item}>journal
                        </div>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <div className={classes.item}>contact
                        </div>
                    </NavLink>
                </div>
                <div className={classes.right_header}>
                    <NavLink to={'/account'}>
                        <div className={classes.item}>account
                        </div>
                    </NavLink>
                    <div className={classes.item}>search</div>
                    <div className={classes.item}>cart</div>
                </div>
            </nav>
        </header>
    );
}

export default Header