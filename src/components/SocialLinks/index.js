import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function Link (props) {
    return (
        <a className='social__link' href={props.url} target='_blank' rel='noopener noreferrer' tabindex="-1">
            <span className={`fab fa-${props.icon} social__icon`} tabindex="0"></span>
        </a>
    );
}

function SocialLinks () {
    return(
        <ScrollAnimation animateIn="zoomIn" duration={.5}>
            <ul className='social'>
                <li><Link url='https://github.com/acarlie' icon='github' /></li>
                <li><Link url='https://www.linkedin.com/in/acarlie' icon='linkedin-in' /></li>
                <li><Link url='https://codepen.io/acarlie/' icon='codepen' /></li>
            </ul>
        </ScrollAnimation>
    );
}

export default SocialLinks;
