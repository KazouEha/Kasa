
import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getHouseById} from '../../controller/house';
import Carrousel from '../../components/Carrousel/Carrousel';
import Collapse from '../../components/Collapse/Collapse';
import Review from '../../components/Review/Review';
import Loader from '../../components/Loader/Loader';
import Tag from '../../components/Tag/Tag';
import './House.css';


function House() 
  {
    const [data,setData]=useState();
    const[isLoading, setLoading]= useState(true);
    const {id} = useParams();

      useEffect(()=>{
        getHouseById(id)
            .then((location) => {
                setTimeout(() => {
                   setData(location);
                   setLoading(false);
                }, 2000);
                })
            .catch((err) => {
               console.log(err);
                });
      },[id])
    


    return (
    <>
        <main>
            { 
                isLoading ? <Loader /> :
                (<>
                    <section>
                        <Carrousel imgArray={data.pictures} />
                    </section>
                    <section className="houseInfo">
                        <div className="houseInfo__loc">
                            <div className="houseInfo__loc--name">{data.title}</div>
                            <div className="houseInfo__loc--where">{data.location}</div>
                            <div className="houseInfo__loc--tags">
                                { data.tags && data.tags.length>0 && data.tags.map((tag)=><Tag key={tag.toString()} tagTxt={tag} />) }
                            </div>
                        </div>
                        <div className="houseInfo__prez">
                            <div className="houseInfo__prez--review">
                                <Review note={data.rating} />
                            </div>
                            <div className="houseInfo__prez--host">
                                <div className="houseInfo__prez--host-name">{data.host.name}</div>
                                <img className="houseInfo__prez--host-img" src={data.host.picture} alt="host" />
                            </div>
                        </div>
                    </section>
                    <section className='houseCollapse'>
                        <div className='houseCollapse__div'>
                            <Collapse title="Description" content={data.description} />
                        </div>
                        <div className='houseCollapse__div'>
                            <Collapse title="Equipements" content={data.equipments} />
                        </div>
                    </section>
                </>)
            }
            
        </main>
    </>
    )
  }

export default House;