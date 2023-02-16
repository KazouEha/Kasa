import './Banner.css';


function Banner({img ,txt})
{
    return(
        <section className="sectionBanner">
            <div className="banner" style={{backgroundImage: `url(${img})`}}>
                <div className="banner__Filter"></div>
                <p className="banner__Txt">{txt}</p>
            </div>
        </section>
    )
}

export default Banner
