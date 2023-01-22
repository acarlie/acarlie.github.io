import React from 'react';
import styles from './Headshot.module.scss';
import image from './../../assets/images/portrait-illustration.png';

function Headshot(props) {
    return (
        <div className={styles.container}>
            <img src={image} alt="Portrait illustration" />
        </div>
    );
}

export default Headshot;