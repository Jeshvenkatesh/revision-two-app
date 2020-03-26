import React from 'react';
import classes from './app.module.css';

const ProductPreview = (props) =>{

    const currentHour = new Date().getHours() < 9 ? '0' + new Date().getHours() : new Date().getHours();
    const currentMinute = new Date().getMinutes() < 9 ? '0' + new Date().getMinutes() : new Date().getMinutes();

    return(
        <div className={classes.productPreview}>

             <img src={props.currentPreviewImg} alt="product preview"/>
             {
                 (!props.showHeartBeat) ?
                 <div className={classes.featureData}>
                 <p>{`${currentHour}: ${currentMinute}`}</p>
                  </div>
                  :
                  <div className={classes.Heartbeat}>
                  <i className="fas fa-heartbeat "></i>
                  <p>78</p>
                  </div> 
             }
                
                  
                                  
           
        </div>
    )
}

export default ProductPreview;