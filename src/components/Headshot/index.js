import React from 'react';
import headshot from './Headshot.module.scss';
import image from './../../assets/images/profile_square.png';

function Headshot(props) {
    return (
        <div className={headshot.container}>
            <img className={headshot.image} src={image} alt="Headshot photograph" />
        </div>
    );
}

export default Headshot;