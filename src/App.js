import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import CounterComponent from './CounterComponent';
// import WatchApp from './watchapp.js';
import ProductDetails from './ProductDetails';
import classes from './app.module.css';
import ProductPreview from './ProductPreview';
import ProductData from './ProductData';
import Axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage.js';
import ContactPage from './Contact';
import AboutPage from './AboutPage';
import CardGenerate from './CardGenerate';


class App extends React.Component {

      state = { 
        ProductDetails : ProductDetails,
        currentPreviewImagePos: 0,
        showHeartBeat : false,
        bgColorChange : 'blue',
        videoList : []
      }

      onColorOptionClick=(pos)=>{

        this.setState({currentPreviewImagePos:pos})

      }
      onFeatureItemClick=(pos)=>{
        // console.log(pos);
        this.setState({showHeartBeat:pos})
      }

      onBgColorChangeClick=()=>{
        // const bgcolor1= `${Math.floor(Math.random()*256)}` 
        // const bgColor2 = `${Math.floor(Math.random()*256)}` 
        // const bgcolor3 = `${Math.floor(Math.random()*256)}` 
        // console.log(bgcolor1)
        // console.log(bgColor2)
        // console.log(bgcolor3)

        const rgbCode= `rgb( ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
         console.log(rgbCode);
         this.setState({
          bgColorChange : rgbCode
         })

      }

      // https://5d76bf96515d1a0014085cf9.mockapi.io/playlist

     componentDidMount(){

      Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
      .then((response)=>{
        console.log(response.data);
        this.setState({
          videoList : [...response.data]
        })

      })
      .catch((err)=>{
        console.log(err);
      })

     }





   render(){

    const generateCards= this.state.videoList.map((item, pos)=>{
      return(
        
          <div className={classes.videocard} key={pos}>
          <img  className={classes.imgWrapper} src={item.thumbnail} />
          <h4>{item.title}</h4>
          </div>
      
       

      )
    })

    return (
      <BrowserRouter>
      <div>
        <Topbar/>
        <Switch>
        <Route path={'/Contact'} component={ContactPage}/>
        <Route path={'/AboutPage'} component={AboutPage}/>
        <Route path={"/"}  component={HomePage}/>

        </Switch> 
        
        <br/>

        <CounterComponent maxCount={10} minCount={1} />
  
        <div>
          <nav className="watchapptopbar">
            <img src="https://images-fe.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg"/>
          </nav>
          <div className={classes.mainContainer} >
              <ProductPreview showHeartBeat={this.state.showHeartBeat} currentPreviewImg={this.state.ProductDetails.colorOptions[this.state.currentPreviewImagePos].imageurl} />
              <ProductData data={this.state.ProductDetails} onFeatureItemClick={this.onFeatureItemClick} onColorOptionClick={this.onColorOptionClick} currentPos={this.state.currentPreviewImagePos} />
          </div>
  
        </div>
        <div style={{
          width: '100%',
          height: '80px',
          backgroundColor: 'gray'

        }}>
          <h1>OnClick BackgroundColor Change</h1>

        </div>
        <div style={{
          width:'100%',
          height:'150px',
          backgroundColor: this.state.bgColorChange
        }}>
          <button onClick={this.onBgColorChangeClick}>Change Color</button>
        </div>

        <div style={{
          width: '100%',
          height: '80px',
          backgroundColor: 'white'

        }}>
          <h1>AXIOS:</h1>
        </div>
        <div className={classes.cardgrid} >
        {generateCards}
        </div>

        <h1>Generating cards and on click it directs to details page...</h1>
        
      </div>
      </BrowserRouter>
    );

   }
   
}

export default App;


