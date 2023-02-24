import React, { useState } from 'react';
import ArrowDown from './assets/arrowDown.png';
import ArrowUp from './assets/arrowUp.png';
import './Collapse.css';

/**
 * Component Collapse will be used on about page and house page
 * Using a useState to check on the collapse's value
 * if it's set to false => arrow down & only title div visible
 * if it's set to true => arrow up & div content visible
 * a click on arrow will change useState value
 * for the content we use a function renderContent which will test the type of data we get either it's a string (data.description) or if it's an array (data.equipments)
 * 
 * @param {*} title 
 * @param {*} content 
 * @returns 
 */
function Collapse({title, content})
{
    
    const[isOpen, setIsOpen]= useState(false);

    const clickOpenClose = ()=>{
        setIsOpen(!isOpen)
    }

    const whatContent = () => {
        if (typeof content === "string") {
          return <p>{content}</p>;
        } else if (Array.isArray(content)) {
          return content.map((item, index) => <li key={index}>{item}</li>);
        } else {
          return null;
        }
    };
    

    return (
            <div className="collapse">
                <div onClick={clickOpenClose} className="collapse__title">
                    <p className="collapse__title--txt">{title}</p>
                    <img className="collapse__title--btn" src={isOpen ?ArrowUp:ArrowDown} alt="fleche vers le haut" />
                </div>
                {
                    isOpen && 
                    <div className="collapse__content">
                        <div className="collapse__content--content">{whatContent()}</div>
                    </div>
                }
            </div>
    )
}

export default Collapse