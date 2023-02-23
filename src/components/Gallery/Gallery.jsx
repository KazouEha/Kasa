import './Gallery.css';
import Card from '../../components/Cards/Card';
import Loader from '../../components/Loader/Loader';
import React,{useState, useEffect} from 'react';
import {fetchData} from '../../controller/house';


/**
 * Component Gallery will be used on the home page and will contain as many components cards as there is houses to show in houses.json
 * use of usestate to set a "isloading" variable set to true at first, to show the Loader component during the settimeout then set to false to show the gallery component loaded
 * use of useEffect to fetch data from houses.json, fetchdata is imported from our controller
 * then use of data.map to browse the data and create Card component for every item in data.map
 * 
 * @returns 
 */
function Gallery()
{

    const [data,setData]=useState();
    const[isLoading, setLoading]= useState(true);

      useEffect(()=>{
        fetchData()
            .then((locations) => {
                setTimeout(() => {
                    setData(locations);
                    setLoading(false);
                }, 2000);
                })
            .catch((err) => {
               console.log(err);
                });
      },[])

    return(
        
        <section className="sectionGallery">
            { isLoading ? <Loader /> :
                (
                    <>
                        <div className="gallery">
                            {
                                data && data.length>0 && data.map((item)=><Card key={item.id} houseTxt={item.title} houseId={item.id} houseImg={item.cover} />)
                            }
                        </div>
                    </>
        
                )
            }
        </section>
    )
}

export default Gallery
