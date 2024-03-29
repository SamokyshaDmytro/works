import React from "react";
import '../ScrollTop/ScrollTopStyle.css';
import { BsChevronUp } from "react-icons/bs";

class ColoredContainer extends React.Component {
    render () {
      let containerStyle = {
        backgroundColor: this.props.color
      }
      return <div className="container" style={containerStyle}></div>
    }
  }
  
  class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <button title='Back to top' className='scroll' 
                 onClick={ () => { this.scrollToTop(); }}>
                  <BsChevronUp className="BsChevronUp arrow-up"></BsChevronUp>
                </button>;
     }
  } 
  
  class ScrollApp extends React.Component {
    constructor() {
      super();
      
      this.state = {
        colors: ["#044747", "#079191", "#38adad", "#90e3e3", "#d5f7f7"]
      }
    }
    
    render () {
      return <div className="long">
                {
                  this.state.colors.map(function(color) {
                      return <ColoredContainer color={color}/>
                  })
                }
                <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
             </div>
    }
  }

  export default ScrollApp ;
