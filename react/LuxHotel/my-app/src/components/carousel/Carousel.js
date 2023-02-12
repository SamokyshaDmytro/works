import { useEffect, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../carousel/CarouselStyle.css';
import styled from 'styled-components';
const Styled = styled.div `
@media (min-width: 1920px){

  }
  @media (max-width: 1920px){
  
  }
  @media (max-width: 1650px){
  
  }
  @media (max-width: 1400px){
    .CarouselSection{
      padding: 80px 15px 80px 15px;
  }
  }
  @media (max-width: 1200px){
  
  }
  @media (max-width: 992px){
  
  }
  @media (max-width: 768px){
    .main-container {
      max-width: 730px;
      height: 220px;
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .item p {
      font-size: 20px;
      line-height: 22px;
      padding: 10px 0 10px 0;
      word-wrap: break-word;
      max-width: 700px;
    }
  }
  @media (max-width: 576px){
    .main-container {
      max-width: 540px;
      height: 220px;
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .item p {
      font-size: 20px;
      line-height: 22px;
      padding: 10px 0 10px 0;
      word-wrap: break-word;
      max-width: 450px;
      text-align: center;
    }
  .ArrowsSingleBox {
    width: 50px;
    height: 50px;
    }
  }
  }
  @media (max-width: 425px){
    .main-container {
      max-width: 380px;
      height: 220px;
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .item p {
      font-size: 20px;
      line-height: 22px;
      padding: 10px 0 10px 0;
      word-wrap: break-word;
      max-width: 350px;
      text-align: center;
    }
  .ArrowsSingleBox {
    width: 40px;
    height: 40px;
    }
  }
  @media (max-width: 375px){
    .main-container {
      max-width: 300px;
      height: 200px;
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .item p {
      font-size: 20px;
      line-height: 20px;
      padding: 5px 0 5px 0;
      word-wrap: break-word;
      max-width: 300px;
      text-align: center;
    }
  .ArrowsSingleBox {
    width: 40px;
    height: 40px;
    }
  }
  }
  @media (max-width: 320px){
    .main-container {
      max-width: 340px;
      height: 220px;
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .item p {
      font-size: 20px;
      line-height: 20px;
      padding: 5px 0 5px 0;
      word-wrap: break-word;
      max-width: 300px;
      text-align: center;
    }
  .ArrowsSingleBox {
    width: 40px;
    height: 40px;
    }

  }
`

const PAGE_WIDTH = 798 /**/

export const Carousel = ({ children }) => {
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (items.length - 1))
      console.log(newOffset, maxOffset)
      return Math.max(currentOffset - PAGE_WIDTH, maxOffset)
    })
  }

  useEffect(() => {
    setItems(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: '100%',
          },
        })
      })
    )
  }, [])

  return (
    <Styled>
    <div className="main-container">
      
      <div className="window">

      
        <div
          className="all-pages-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {items}
        </div>


      </div>
      <div className='ArrowsBox'>
        <div className='ArrowsSingleBox' onClick={handleLeftArrowClick} >
          <FaChevronLeft className="arrow"/>
        </div>
        <div className='ArrowsSingleBox' onClick={handleRightArrowClick} >
          <FaChevronRight className="arrow"/>
        </div>
      </div>
    </div>
  </Styled>  
  )
}