import './Tag.css';


/**
 * Tag component is shown on house page
 * filled with TagTxt prop
 * 
 * @param {*} TagTxt 
 * @returns 
 */
function Tag({tagTxt})
{
    return(
            
            <div className="tag">
                    {tagTxt}
            </div>
    )
}

export default Tag