import React, {useState} from 'react';
import { Button2 } from '../ScrollDownDown/ScrollDownDown';
import { IoChevronDownCircleSharp } from "react-icons/io5";
const UptoUp = () =>{ 
    
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
      
      <Button2> 
       
       <IoChevronDownCircleSharp onClick={scrollToBottom}  
       style={{display: visible ? 'inline' : 'none'}} />
      </Button2> 
      </>
    ); 
  } 
	
export default UptoUp;