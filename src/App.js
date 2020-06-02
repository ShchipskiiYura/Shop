import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Slider from "./components/slider/Slider";
import ShopPage from "./components/shop_page/ShopPage";
import {BrowserRouter, Route} from "react-router-dom";
import Account from "./components/Account/Account";
import Collection from "./components/Collection/Collection";
import Contact from "./components/Contact/Contact";
import Journal from "./components/Journal/Journal";
import Pages from "./components/Pages/Pages";
import ShopInst from "./components/ShopInst/ShopInst";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div>
                    <Route exact path="/" component={Slider}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/pages" component={Pages}/>
                    <Route path="/shop_inst" component={ShopInst}/>
                    <Route path="/collections" component={Collection}/>
                    <Route path="/journal" component={Journal}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/account" component={Account}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
