import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
const Logo = () =>{
    return(
        <div className='ma6 mt0'>
            <Tilt className="tilt parallax-effect-glare-scale br3 ba shadow-4" style={{height: 150, width:150}} perspective={500} glareEnable={true} glareMaxOpacity={0.45}>
                <div className='inner-element f1'>
                    Kisses
                    😘
                 </div>
            </Tilt>
        </div>
    );
}

export default Logo;