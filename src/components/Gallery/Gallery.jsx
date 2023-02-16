import './Gallery.css';
import Card from '../../components/Cards/Card';
import React,{useState, useEffect} from 'react';
import {fetchData} from '../../controller/house';



function Gallery()
{

    const [data,setData]=useState();

      useEffect(()=>{
        fetchData()
            .then((locations) => {
                setTimeout(() => {
                    setData(locations);
                }, 2000);
                })
            .catch((err) => {
               console.log(err);
                });
      },[])

      console.log("data", data);
    return(
        <section className="sectionGallery">
            <div className="gallery">
                {
                    data && data.length>0 && data.map((item)=><Card key={item.id} houseTxt={item.title} houseId={item.id} houseImg={item.cover} />)
                }
            </div>
        </section>
    );
}

export default Gallery
