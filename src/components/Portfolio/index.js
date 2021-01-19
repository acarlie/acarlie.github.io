import React from 'react';
import Link from './../Link';

/**
 * Styles
 */
import styles from './Portfolio.module.scss';
import heading from './../../scss/modules/Heading.module.scss';
import linkList from './../../scss/modules/LinkList.module.scss';
import text from './../../scss/modules/Text.module.scss';
import utility from './../../scss/modules/Utility.module.scss';

function PortfolioItem(props) {
    const direction = props.odd ? styles.odd: styles.even;
    const isCodepen = props.url.indexOf("codepen") > -1;

    return (
        <li className={styles.item}>
            <div className={styles.inner + ' ' + direction}>
                <div className={styles.wrapper}>
                    <img className={styles.img} src={process.env.PUBLIC_URL + '/assets/images/sm/' + props.img} alt={'Screen capture of ' + props.title} />
                </div>
                <div className={styles.info + ' ' + text.small}>
                    {props.even}
                    <h3 className={heading.small}>{props.title}</h3>
                    <p>{props.desc}</p>
                    <ul className={linkList.list} aria-label="Related links">
                        {props.url && !isCodepen && <li className={linkList.item}><Link href={props.url} blank>View the deployment <span className={utility.sr_only}>of {props.title}</span>  ⟶ </Link></li>}
                        {props.url && isCodepen && <li className={linkList.item}><Link href={props.url} blank>View <span className={utility.sr_only}>{props.title}</span> on CodePen ⟶  </Link></li>}
                        {props.repo && <li className={linkList.item}><Link href={props.repo} blank>View the repo <span className={utility.sr_only}>for {props.title}</span> ⟶  </Link></li>}
                    </ul>
                </div>
            </div>
        </li>
    )
}

function Portfolio(props) {
    return (
        <div className={styles.container}>
            <ul id="portfolio" aria-label="Portfolio items">
                {props.items &&
                    props.items.map((item, i) => {
                        return (
                            <PortfolioItem
                                key={i}
                                odd={i % 2}
                                title={item.title}
                                img={item.img}
                                url={item.url}
                                repo={item.repo}
                                desc={item.desc}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}


export default Portfolio;