import './Banner.css';

function Banner({img ,txt})
{
    return(
        <section className="sectionBanner">
            <div className="banner">
                <img className="banner__Img" src={img} />
                <div className="banner__Txt">
                    <p>{txt}</p>
                </div>
            </div>
        </section>
    )
}

export default Banner
