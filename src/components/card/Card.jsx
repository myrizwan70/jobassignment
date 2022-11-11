import React, { useEffect,useState } from 'react';
import styles from './Card.module.css';
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";

const Card = ({mydata}) => {

    /**
     * id, name,supertype,subtypes,level,hp,types,
     * evolvesFrom,abilities,attacks,weaknesses,
     * resistances,retreatCost,
     * 
     * convertedRetreatCost,artist,rarity,nationalPokedexNumbers,
     * legalities,images,
     */

    

    const navigate = useNavigate();
    const {id} = useParams();
    const handleSubmit = () => {
  // navigate(`/pokemon/${mydata.id}`,{data:mydata})
   navigate(`/pokemon/${mydata.id}`,{state: { data:mydata}})
   
   
  }


  return (
    <div className={styles.myCardWrapper} onClick={handleSubmit}>
        <img src={mydata.images.small} />
        <span>Name: {mydata.name}</span>
        <span>Level: {mydata.level}</span>
        <span>Super Type:{mydata.supertype}</span>
    </div>
  )
}

export default Card