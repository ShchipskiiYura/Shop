import React from 'react';
import classes from './Shop_page.module.css';
import ItemsShop from "./ItemsShop/ItemsShop";
import {BrowserRouter, NavLink} from "react-router-dom";

const ShopPage = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.shop}>
                <div className={classes.filter}>
                    <div>Filter</div>
                    <div>
                        <h4>Color</h4>
                        <ul>
                            <li>Red</li>
                            <li>Green</li>
                            <li>Blue</li>
                            <li>Black</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Size</h4>
                        <ul>
                            <li>M</li>
                            <li>S</li>
                            <li>L</li>
                            <li>X</li>
                            <li>...</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={classes.sort}>
                        <div>Grid</div>
                        <div>Sort by</div>
                    </div>
                    <ItemsShop things={props.things}/>
                </div>
            </div>
        </div>
    );
}

export default ShopPage