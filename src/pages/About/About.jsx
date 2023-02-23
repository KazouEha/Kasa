import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import bannerImg from '../../components/Banner/assets/banner_about.png';
import './About.css';

/**
 * About page
 * Use of the component collapse filled with infos from the kasa society
 * props are title and content which are defined in the function
 * Use of the banner component without any text
 * 
 * @returns 
 */
function About() 
  {
    const title1 = "Fiabilité";
    const title2 = "Respect";
    const title3 = "Service";
    const title4 = "Responsabilité";

    const content1 = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const content2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const content3 = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const content4 = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."

    return (
    <>
        <main>
            <section>
                <Banner img={bannerImg} />
            </section>
            <section className="aboutCollapse">
                <div className="aboutCollapse__div">
                    <Collapse title={title1} content={content1} />
                    <Collapse title={title2} content={content2} />
                    <Collapse title={title3} content={content3} />
                    <Collapse title={title4} content={content4} />
                </div>
            </section>
        </main>
    </>
    )
  }

export default About;