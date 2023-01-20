import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import logo from './logo.png';

const Logo = () =>{
    return(
        <div className='ma6 mt0'>
            <Tilt className="tilt parallax-effect-glare-scale br4 shadow-4" style={{height: 150, width:150}} perspective={500} glareEnable={true} glareMaxOpacity={0.45}>
                <div className='inner-element f1'>
                    <img style={{paddingTop:'15px'}} alt='logo' src={logo} />
                 </div>
            </Tilt>
        </div>
    );
}

export default Logo;