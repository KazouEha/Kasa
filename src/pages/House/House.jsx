import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getHouseById} from '../../controller/house';
import Carrousel from '../../components/Carrousel/Carrousel';
import Collapse from '../../components/Collapse/Collapse';
import Review from '../../components/Review/Review';
import Loader from '../../components/Loader/Loader';
import Tag from '../../components/Tag/Tag';
import Page404 from '../Page404/Page404';
import './House.css';

/**
 * House page
 * use of useParams to get the house id in the url
 * use of useEffect to fetch data using the id got with useParams with function getHouseById from our controller
 * use of useState to set isLoading to use the Loader component
 * 
 * Use of Loader component to await the loaded datas
 * Use of Carrousel component to show the data.pictures from the getHousebyId function we used in the useEffect
 * Use of Collapse component to show the data.description & data.equipments and we add a title prop
 * Use of Review component the show the data.rating
 * Use of Tag component to thow the different data.tags, here we browse an array data.tags and for every tag we create a Tag component using the tag value
 * @returns 
 */
function House() 
{

    const [data,setData]=useState(null);
    const[isLoading, setLoading]= useState(true);
    const {id} = useParams();

    useEffect(()=>{
        
        getHouseById(id)
            .then((location) => {
                setData(location);
            })
            .catch((err) => {
                console.log(err);
            });
        
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        
    },[id])

    return (

        <>
            <main>
                {
                
                isLoading ? <Loader /> : 
                

                    !isLoading && data ? 
                        (
                            
                                <>
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
                                </>
        
                        ) : <Page404 />
                }
            
                
            </main>
        </>
        
    )
}

export default House;