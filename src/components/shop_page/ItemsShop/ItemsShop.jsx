import React from "react";
import classes from "./ItemsShop.module.css";

const ShopItem = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.img}>{props.photo}</div>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.price}>{props.price}</div>
        </div>
    );
}

const ItemsShop = (props) => {
    //  let things = [
    //     {id: 1, photo: "Photo", title: 'Title', price: 'Price'},
    //     {id: 2, photo: "Photo", title: 'Title', price: 'Price'},
    //     {id: 3, photo: "Photo", title: 'Title', price: 'Price'},
    //     {id: 4, photo: "Photo", title: 'Title', price: 'Price'}
    // ]

    let shopItem = props.things.map((el) => {
        return (
            <ShopItem photo={el.photo} title={el.title} price={el.price} />
            // <ShopItem photo={`${item.photo}_${item.id}`} title={`${item.title}_${item.id}`}
            //           price={`${item.price}_${item.id}`}/>

        );
    })

    return (
        <div className={classes.things}>
            <div className={classes.things_item}>
                {shopItem}
            </div>
        </div>
    );
}

export default ItemsShop