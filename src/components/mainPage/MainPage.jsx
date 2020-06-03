import React from 'react';
import classes from './MainPage.module.css';
import Slider from "./slider/Slider";
import ImgGrid from "./ImgGrid";
import Collection from "./TopCollections/TopColl";
import ItemsShop from "../shop_page/ItemsShop/ItemsShop";

const MainPage = (props) => {
    return (
        <div className={classes.main}>
            <Slider />
            <ImgGrid />
            <Collection />
            <div className={classes.products}>
                <h2>Latest Products</h2>
                <ItemsShop things={props.things}/>
            </div>

        </div>
    );
}

export default MainPage