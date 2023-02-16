import Banner from '../../components/Banner/Banner';
import bannerImg from '../../components/Banner/assets/BANNER_img.png';
import Gallery from '../../components/Gallery/Gallery';

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