import './Banner.css';

/**
 * Banner component will be used on home page and about page only
 * 
 * @param {*} img background picture for the banner
 * @param {*} txt optionnal txt for the banner
 * @returns 
 */
function Banner({ img, txt }) {
    return (

        <section className="sectionBanner">
            <div className="banner" style={{ backgroundImage: `url(${img})` }}>
                <div className="banner__Filter"></div>
                {txt !== undefined &&
                    <p className="banner__Txt">{txt}</p>
                }
            </div>
        </section>
        
    )
}

export default Banner
