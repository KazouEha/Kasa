import './Gallery.css';
import Card from '../../components/Cards/Card';
import React,{useState, useEffect} from 'react';
import {fetchData} from '../../controller/house';



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
            { isLoading ? "coucou" :
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
