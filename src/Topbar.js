import React from 'react';
import classes from './Topbar.module.css';
import { Link } from 'react-router-dom';

const Topbar=()=>{
    return(
        <div className={classes.topbar}>
           <Link to="/">Home</Link>
           <Link to="/Contact">CONTACT</Link>
           <Link to="/AboutPage">ABOUT</Link>
        </div>
    )
}
export default Topbar;