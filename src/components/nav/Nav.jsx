import React from 'react';
import Button from '../button/Button';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
   
   
  return (
    <div className={styles.navWrapper}>
        <div className={styles.logo}>
          <span>Pokemon Assignment</span>
        </div>
        <div className={styles.menu}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                
            </ul>
            
        </div>
       
        
    </div>
  )
}

export default Nav