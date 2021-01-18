import React from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
import link from './SocialLink.module.scss';
import socialLinks from './SocialLinks.module.scss';

function Link(props) {
    return (
        <a className={link.link} href={props.url} target='_blank' rel='noopener noreferrer' aria-label={props.ariaLabel}>
            <span className={'fab fa-' + props.icon + ' ' + link.span}></span>
        </a>
    );
}

function SocialLinks() {
    return (
        <ul className={socialLinks.list}>
            <li className={socialLinks.item}><Link url='https://www.linkedin.com/in/acarlie' icon='linkedin-in' ariaLabel="View Linked In profile for Amelia Carlie, opens in new tab" /></li>
            <li className={socialLinks.item}><Link url='https://github.com/acarlie' icon='github' ariaLabel="View GitHub profile for Amelia Carlie, opens in new tab" /></li>
            <li className={socialLinks.item}><Link url='https://codepen.io/acarlie/' icon='codepen' ariaLabel="View CodePen profile for Amelia Carlie, opens in new tab" /></li>
        </ul>
    );
}

export default SocialLinks;
