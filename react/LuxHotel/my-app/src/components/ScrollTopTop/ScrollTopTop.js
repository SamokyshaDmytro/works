import React, {useState} from 'react';
import { P } from '../ScrollTopTop/ScrollTopStyle';
	
const ScrollL = () =>{ 
    
    const [visible, setVisible] = useState(true) 
      
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 0){ 
        setVisible(false) 
      }  
      else if (scrolled <= 0){ 
        setVisible(true) 
      } 
    }; 
      
          
    window.addEventListener('scroll', toggleVisible); 
      
    return ( 
      <>
      
      <P  style={{display: visible ? 'inline' : 'none'}} >scroll</P>
       
       
       
      </>
    ); 
  } 
	
export default ScrollL;