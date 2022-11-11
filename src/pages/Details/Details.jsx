import React from 'react'
import { useLocation,useParams } from "react-router-dom";
import styles from './Details.module.css';

const Details = () => {
  const location = useLocation();
  const {state} = useLocation();
  const adata = location.state.data;
  
   // const { id } = useParams();

    console.log(adata)

  return (
    <div className={styles.detailWrapper}>
      <div className={styles.imageWrapper}>
        <img src ={adata.images.large} />
      </div>
      <div className={styles.details} >
        <h1><span className={styles.heading}>Name:</span>{adata.name}</h1>
        <span className={styles.main}><span className={styles.heading}>HP:</span>{adata.hp ? adata.hp :'Not Mentioned'}</span>
        <span className={styles.main}><span className={styles.heading}>EVOLVES FROM:</span>{adata.evolvesFrom ? adata.evolvesFrom :'Not Mentioned'}</span>
        <p><span className={styles.heading}>ABILITIES:</span>{adata.types[0].text ? adata.types[0].text : 'Not Mentioned'}</p>
        <p><span className={styles.heading}>ATTACKS:</span>{adata.attacks[0].text ? adata.attacks[0].text :'Not Mentioned'}</p>
      </div>
    </div>
  )
}

export default Details