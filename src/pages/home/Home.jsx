import React, { useEffect,useState,useMemo } from 'react';
import styles from './Home.module.css';
import axios from 'axios';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';



const Home = () => {

    const [api, setApi]= useState([]);
    const [numberOfItemsShown, setNumberOfItemsToShown] = useState(20);

 

    useEffect(()=>{
        getData();
    },[])

    const getData = async()=>{
      const {data} = await axios.get('https://api.pokemontcg.io/v2/cards?page=1&pageSize=100');
      setApi(data.data);

    }


  

  const showMore = () =>{
    if(numberOfItemsShown + 20 <= api.length){
      setNumberOfItemsToShown(numberOfItemsShown + 20);
      
    }else {
      setNumberOfItemsToShown(api.length);
    }
  };

  const itemsToShow = useMemo(() => {
    return api
                .slice(0, numberOfItemsShown)
                .map((post, index) =><Card key={post.id +index} mydata= {post} /> );
    
  },[api,numberOfItemsShown]);

    

  return (
    
    <div className={styles.homeContainer}>
    <div className={styles.cardWrapper}>
    {itemsToShow.length ? itemsToShow : "loading..."}
    </div>
    <div className={styles.loadMore}>
    {/* <button onClick={showMore} className={styles.loadBtn}>View More</button> */}
    <Button onClick={showMore} text='View More' className={styles.loadBtn}/>
    </div>
    </div>
    
  )
}

export default Home