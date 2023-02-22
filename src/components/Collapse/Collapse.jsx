import React, { useState } from 'react';
import ArrowDown from './assets/arrowDown.png';
import ArrowUp from './assets/arrowUp.png';
import './Collapse.css';

function Collapse({title, content})
{
    
    const[isOpen, setIsOpen]= useState(false);

    const clickOpenClose = ()=>{
        setIsOpen(!isOpen)
    }

    const renderContent = () => {
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
                    { 
                      isOpen ? 
                      ( 
                        <><img className="collapse__title--btn" src={ArrowUp} alt="fleche vers le haut" /></> 
                      ) :
                      (
                        <><img className="collapse__title--btn" src={ArrowDown} alt="fleche vers le haut" /></> 
                      )
                    }
                </div>
                {
                    isOpen && 
                    <div className="collapse__content">
                        <div className="collapse__content--content">{renderContent()}</div>
                    </div>
                }
            </div>
    )
}

export default Collapse