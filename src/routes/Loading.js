import React from 'react';
import {Oval} from "react-loader-spinner"; 


function Loading () {
   
    return ( 
        <div className='oval'>
        <Oval 
        color="#ff0000" 
        height={100} 
        width={100}
        
        />
        </div>
    ) ;

};

export default Loading;