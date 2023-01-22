import React from 'react';
import styles from './SocialLinks.module.scss';

const Link = ({ url, ariaLabel, children }) => (
    <a className={styles.link} href={url} target='_blank' rel='noopener noreferrer' aria-label={ariaLabel}>
        {children}
    </a>
);


function LinkedInSVG() {
    return (
        <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9997 5.3335H7.99967C6.52692 5.3335 5.33301 6.5274 5.33301 8.00016V24.0002C5.33301 25.4729 6.52692 26.6668 7.99967 26.6668H23.9997C25.4724 26.6668 26.6663 25.4729 26.6663 24.0002V8.00016C26.6663 6.5274 25.4724 5.3335 23.9997 5.3335Z" className={styles.path} />
            <path d="M10.666 14.667V21.3337M10.666 10.667V10.6803M15.9993 21.3337V14.667M21.3327 21.3337V17.3337C21.3327 16.6264 21.0517 15.9481 20.5516 15.448C20.0515 14.9479 19.3733 14.667 18.666 14.667C17.9588 14.667 17.2805 14.9479 16.7804 15.448C16.2803 15.9481 15.9993 16.6264 15.9993 17.3337" className={styles.path} />
        </svg>

    )
}

function CodePenSVG() {
    return (
        <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 20L16 28L28 20L16 12L4 20Z" className={styles.path} />
            <path d="M4 12V20M28 12V20M16 4V12M16 20V28M4 12L16 20L28 12L16 4L4 12Z" className={styles.path} />
        </svg>
    )
}

function GitHubSVG() {
    return (
        <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 25.3333C6.26667 27.1999 6.26667 21.9999 4 21.3333M20 27.9999V23.3333C20 21.9999 20.1333 21.4666 19.3333 20.6666C23.0667 20.2666 26.6667 18.7999 26.6667 12.6666C26.665 11.0732 26.0434 9.54301 24.9333 8.39993C25.454 7.01589 25.406 5.4821 24.8 4.13327C24.8 4.13327 23.3333 3.73327 20.1333 5.8666C17.423 5.16072 14.577 5.16072 11.8667 5.8666C8.66667 3.73327 7.2 4.13327 7.2 4.13327C6.59397 5.4821 6.54604 7.01589 7.06667 8.39993C5.9566 9.54301 5.33496 11.0732 5.33333 12.6666C5.33333 18.7999 8.93333 20.2666 12.6667 20.6666C11.8667 21.4666 11.8667 22.2666 12 23.3333V27.9999" className={styles.path} />
        </svg>


    )
}

function SocialLinks() {
    return (
        <ul className={styles.list} aria-label="Links to Amelia Carlie's social profiles">
            <li><Link url='https://www.linkedin.com/in/acarlie' icon='linkedin-in' ariaLabel="View Linked In profile for Amelia Carlie, opens in new tab"><LinkedInSVG /></Link></li>
            <li><Link url='https://github.com/acarlie' icon='github' ariaLabel="View GitHub profile for Amelia Carlie, opens in new tab"><GitHubSVG /></Link></li>
            <li><Link url='https://codepen.io/acarlie/' icon='codepen' ariaLabel="View CodePen profile for Amelia Carlie, opens in new tab"><CodePenSVG /></Link></li>
        </ul>
    );
}

export default SocialLinks;