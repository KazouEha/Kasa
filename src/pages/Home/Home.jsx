import Banner from '../../components/Banner/Banner';
import bannerImg from '../../components/Banner/assets/banner_home.png';
import Gallery from '../../components/Gallery/Gallery';


/**
 * Home page which shows a banner and the gallery filled witch cards
 * Use of Banner component filled with a prop text which is defined in a const in the function
 * Use of Gallery component to show all the houses
 * @returns 
 */
function Home() 
{

  const bannerText = "Chez vous, partout et ailleurs";
  
  return (

    <>
        <main>
            <Banner txt={bannerText} img={bannerImg} />
            <Gallery />
        </main>
    </>

  )

}

export default Home;