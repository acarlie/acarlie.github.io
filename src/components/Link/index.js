import React from 'react';
import link from './Link.module.scss';

function Link(props) {
    const { blank, href, text } = props;

    return (
        <>
            {
                blank &&
                <a className={link.link} href={href} target="_blank" rel="noopener noreferrer">{text} <span className="sr_only">, opens in new tab</span></a>
            }
            {
                !blank &&
                <a className={link.link} href={href}>{text}</a>
            }
        </>

    );
}

export default Link;