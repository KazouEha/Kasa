import './Carrousel.css';
import React from 'react';
import { useState } from 'react';
import arrowLeft from './assets/arrowleft.png';
import arrowRight from './assets/arrowright.png';


/**
 * Components Carrousel will be used on the house page
 * Components wich uses a useState with index to browse the array
 * Click on the arrows will show the previous or next picture
 * In case it's the last picture, the next one will be the first
 * In case it's the first picture, the previous one will be the last
 * A string is shown at the end of the div to see which picture we're looking at and how many there is to see
 * In case there is only one picture, the arrows and the index will be hidden
 *
 * @param {*} imgArray array of pictures to illustrate the house
 * @returns 
 */
function Carrousel({imgArray})
{
        const [index, setIndex] = useState(0); 
        const length = imgArray.length;
    
        const previousPic = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
        };
    
        const nextPic = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
        }

    return(
            
            <div className="divCarrousel" style={{backgroundImage: `url(${imgArray[index]}`}}>
                {
                    length > 1 ? (

                <>       
                    <div className = "divCarrousel__arrows">
                        <img onClick={previousPic} src={arrowLeft} className="divCarrousel__arrows--left" alt="arrow left" />
                        <img onClick={nextPic} src={arrowRight} className="divCarrousel__arrows--right"alt="arrow right" />    
                    </div>
                    <p className = "divCarrousel__index">{index+1}/{imgArray.length}</p>
                </> 

                    ) : ""
                }
                    
            </div>
    )
}

export default Carrousel


