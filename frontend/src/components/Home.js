import { Carousel } from 'react-bootstrap';
import './Home.css'

import Categories from './layouts/cards'


export default function Home(){
  

    let images = [{image:"https://hips.hearstapps.com/hmg-prod/images/plants-index-1558561755.png"},
    {image:"https://as1.ftcdn.net/v2/jpg/03/16/83/44/1000_F_316834496_4xpm6fZ3iHcNT1llAIonh1VCq6iti5Yd.jpg"},
    {image:"    https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/09/29195121/cover-copy.jpg"}
  ]
    return(
        <>
       <Carousel pause="hover" 
       className='mx-0'
       style={{ height: "500px", width: "100%"}} >
                    {images && images.map(image => 
                    <Carousel.Item key= {image.index}>
                      <img
          className="d-block mt-3 w-100 carousel-image"
          src={image.image}
          alt={image.index}
          
          
        />


                    </Carousel.Item>)}
                </Carousel>
               <Categories/>
    
      
        </>
    )
}
