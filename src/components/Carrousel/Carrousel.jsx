import './Carrousel.css';
import React from 'react';
import { useState } from 'react';
import arrowLeft from './assets/arrowleft.png';
import arrowRight from './assets/arrowright.png';

function Carrousel(imgArray)
{
        const [index, setIndex] = useState(0); 
        const length = imgArray.imgArray.length;
        
        const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
        };
    
        const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
        }

    return(
            
            <div className="divCarrousel" style={{backgroundImage: `url(${imgArray.imgArray[index]}`}}>
                {
                    length > 1 ? (

                <>       
                    <div className = "divCarrousel__arrows">
                        <img onClick={handlePrevious} src={arrowLeft} className="divCarrousel__arrows--left" alt="arrow left" />
                        <img onClick={handleNext} src={arrowRight} className="divCarrousel__arrows--right"alt="arrow right" />    
                    </div>
                    <p className = "divCarrousel__index">{index+1}/{imgArray.imgArray.length}</p>
                </> 

                    ) : ""
                }
                    
            </div>
    )
}

export default Carrousel



/* <Link to={`/House/${houseId}`} className="card" style={{backgroundImage: `url(${houseImg})`}}> */