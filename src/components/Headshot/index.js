import React from 'react';
import styles from './Headshot.module.scss';
import image from './../../assets/images/portrait-illustration.png';

function Headshot(props) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="Headshot photograph" />
        </div>
    );
}

export default Headshot;