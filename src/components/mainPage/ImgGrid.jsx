import React from 'react';
import classes from './MainPage.module.css';

const ImgGrid = () =>{
    return(
      <div className={classes.imgGrid}>
          <div className={classes.imgItem}>Number1</div>
          <div className={classes.imgItem}>Number2</div>
          <div className={classes.imgItem}>Number3</div>
      </div>
    );
}

export default ImgGrid