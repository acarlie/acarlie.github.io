import React from 'react';
import styles from './Link.module.scss';
import utility from './../../scss/modules/Utility.module.scss';

function Link(props) {
    const { blank, href } = props;

    return (
        <>
            {
                blank &&
                <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
                    <span className={styles.inner}>
                        {props.children}
                        <span className={utility.sr_only}>, opens in new tab</span>
                    </span>
                </a>
            }
            {
                !blank &&
                <a className={styles.link} href={href}>
                    <span className={styles.inner}>
                        {props.children}
                    </span>
                </a>
            }
        </>

    );
}

export default Link;