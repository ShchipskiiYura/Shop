import React from 'react';
import classes from './MainPage.module.css';
import Slider from "./slider/Slider";
import ImgGrid from "./ImgGrid";
import {BrowserRouter, NavLink} from "react-router-dom";

const MainPage = () => {
    return (
        <div className={classes.main}>
            <Slider />
            <ImgGrid />
        </div>
    );
}

export default MainPage