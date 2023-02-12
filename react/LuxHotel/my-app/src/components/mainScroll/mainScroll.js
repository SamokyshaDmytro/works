import React, {useState} from 'react';
import { IoChevronDownCircleSharp } from "react-icons/io5";
import { Button } from '../mainScroll/mainScrollStyle';
	
const ScrollButton = () =>{ 
    
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
      
    const scrollToBottom = () =>{ 
      window.scrollTo({ 
        top: window.innerHeight, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
           in place of 'smooth' */
      }); 
    }; 
      
    window.addEventListener('scroll', toggleVisible); 
      
    return ( 
      <>
      
      <Button> 
       
       <IoChevronDownCircleSharp onClick={scrollToBottom}  
       style={{display: visible ? 'inline' : 'none'}} />
      </Button> 
      </>
    ); 
  } 
	
export default ScrollButton;
