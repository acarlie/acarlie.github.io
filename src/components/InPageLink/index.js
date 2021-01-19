import React from 'react';
import styles from './InPageLink.module.scss';

function InPageLink(props) {
    const { href, ariaLabel, up } = props;
    return (
        <a className={styles.link} href={href} aria-label={ariaLabel}>
            <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.742 56.307">
                <g className={up ? styles.up : styles.down}>
                    <path d="M18.864 1.5v52.189" />
                    <path d="M2.121 37.436l16.75 16.75 16.75-16.75" />
                </g>
            </svg>
        </a>
    );
}

export default InPageLink;