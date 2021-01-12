import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function IconContainerInner(props) {
    const info = props.info ? 'icon-container-info' : '';
    const tab = props.tabbable ? '0' : '-1';
    return (
        <div className={`icon-container ${info}`} tabIndex={tab}>
            <div className='icon-content'>
                {props.children}
            </div>
            <span className='icon'>
                <i className={`fas fa-${props.icon || 'info'}`}></i>
            </span>
        </div>
    );
}

function IconContainer(props) {
    const fade = props.fade ? 'fade-up' : '';
    return (
        <>
            {
                fade &&
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' offset={0} duration={.5}>
                    <IconContainerInner {...props} tabbable />
                </ScrollAnimation>
            }
            {
                !fade &&
                <IconContainerInner {...props} />
            }
        </>
    )
}

export default IconContainer;