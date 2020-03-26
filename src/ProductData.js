import React from 'react';
import classes from './app.module.css';
// import ProductDetails from './ProductDetails';


const ProductData= (props)=>{

  // console.log(props.currentPos)

    
    const coloroptions = props.data.colorOptions.map((item, pos)=>{

      const colorArry = [classes.productImage]

    if(pos === props.currentPos){
      colorArry.push( classes.selectedProductImg )
    }
        return(
            <img key={pos} className={colorArry. join(' ')} src={item.imageurl} onClick={()=>props.onColorOptionClick(pos)} />
          )
    })

    const ButtonList = props.data.BtnList.map((item, pos)=>{

      const btnArr=[ classes.FeatureItem ]

      if(pos==0){
        btnArr.push(classes.selectedFeatureItem)
      }

      return(
      <button className={btnArr. join(' ')} key= {pos} onClick={ ()=>props.onFeatureItemClick(pos)} >{item}</button>
      )

    })

    return(
        <div className={classes.productData}>
        <h1>{props.data.title}</h1>
         <p>{props.data.description}</p>
         <h3>Select Color</h3>
         <div>
           {/* <img className={[classes.productImage, classes.selectedProductImg].join(' ')} src="https://i.imgur.com/PTgQlim.png" alt="red colored watch"/>
           <img className={classes.productImage} src="https://i.imgur.com/Mplj1YR.png" alt="blue colored watch"/>
           <img className={classes.productImage} src="https://i.imgur.com/Zygu7I3.png" alt="creem colored watch"/>
           <img className={classes.productImage} src="https://i.imgur.com/iOeUBV7.png" alt="Black colored watch"/> */}
           
            {coloroptions}
         </div>
         <h3>Features</h3>
         <div>
           {ButtonList}
           {/* <button className={[classes.FeatureItem, classes.selectedFeatureItem].join(' ')}>Time</button>
           <button className={classes.FeatureItem}>Heart Rate</button> */}
         </div>
         <button className={classes.primaryBtn}>Buy Now</button>
        </div>
    );
}

export default ProductData;