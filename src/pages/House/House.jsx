
import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getHouseById} from '../../controller/house';

function House() 
  {
    const [data,setData]=useState();
    const {id} = useParams();

      useEffect(()=>{
        getHouseById(id)
            .then((location) => {
                setTimeout(() => {
                    setData(location);
                }, 2000);
                })
            .catch((err) => {
               console.log(err);
                });
      },[id])

      console.log("data", data);

    return (
    <>
        <main>
            <p>coucou</p>
        </main>
    </>
    )
  }

export default House;