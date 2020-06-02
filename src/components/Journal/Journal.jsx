import React from 'react';
import classes from './Journal.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";

const Journal = () => {
    return (
        <div className={classes.main}>
            <div className={classes.slider}>Journal /  News  /  More something</div>
        </div>
    );
}

export default Journal