import React from 'react';
import classes from './Shop_page.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";


const ShopItem = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.img}>{props.photo}</div>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.price}>{props.price}</div>
        </div>
    );
}

const ItemShop = (props) => {
    let things = [
        {id: 1, photo: "Photo", title: 'Title', price: 'Price'},
        {id: 2, photo: "Photo", title: 'Title', price: 'Price'},
        {id: 3, photo: "Photo", title: 'Title', price: 'Price'},
        {id: 4, photo: "Photo", title: 'Title', price: 'Price'},
        {id: 5, photo: "Photo", title: 'Title', price: 'Price'},
        {id: 6, photo: "Photo", title: 'Title', price: 'Price'},
        {id: 7, photo: "Photo", title: 'Title', price: 'Price'},
        {id: 8, photo: "Photo", title: 'Title', price: 'Price'},
        {id: 9, photo: "Photo", title: 'Title', price: 'Price'},
        {id: 10, photo: "Photo", title: 'Title', price: 'Price'}
    ]
    let shopItem = things.map((item) => {
        return (
            <ShopItem photo={`${item.photo}_${item.id}`} title={`${item.title}_${item.id}`} price={`${item.price}_${item.id}`}/>
        );
    })
    return (
        <div className={classes.things_item}>
            { shopItem }
        </div>
    );
}


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
                <div className={classes.things}>
                    <div>Grid</div>
                    <div>Sort by</div>
                    <ItemShop />
                </div>
            </div>
        </div>
    );
}

export default ShopPage