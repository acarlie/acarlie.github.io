import React from 'react';
import styles from './Portfolio.module.scss';

function PortfolioItem(props) {
    const direction = props.odd ? styles.odd : styles.even;

    return (
        <li className={styles.item}>
            <div className={styles.item_inner + ' ' + direction}>

                <div className={styles.item_img_cont}>
                    <img className={styles.item_img} src={process.env.PUBLIC_URL + '/assets/images/sm/' + props.img} alt={props.desc} />
                </div>
                <div className={styles.item_info}>
                    {props.even}
                    <h3 className={styles.item_title}>{props.title}</h3>
                    <div className={styles.item_cap}>{props.desc}</div>
                    <ul>
                        {props.url && <li><a href={props.url} target="_blank" rel="noopener noreferrer">View Deployed Project ⟶</a></li>}
                        {props.repo && <li><a href={props.repo} target="_blank" rel="noopener noreferrer">View the Repo ⟶</a></li>}
                    </ul>
                </div>
            </div>

        </li>
    )
}
// function PortfolioItem(props) {
//     return (
//         <li className={styles.grid_item}>
//             <img className={styles.grid_item_img} src={process.env.PUBLIC_URL + '/assets/images/sm/' + props.img} alt={props.desc} />
//             <div className={styles.grid_item_info}>
//                 <div className={styles.grid_item_info_inner}>
//                     <h3 className={styles.grid_item_title}>{props.title}</h3>
//                     <div className={styles.grid_item_cap}>{props.desc}</div>
//                     <ul>
//                         {props.url && <li><a href={props.url} target="_blank" rel="noopener noreferrer">View Deployed Project ⟶</a></li>}
//                         {props.repo && <li><a href={props.repo} target="_blank" rel="noopener noreferrer">View the Repo ⟶</a></li>}
//                     </ul>
//                 </div>
//             </div>
//         </li>
//     )
// }

function Portfolio(props) {
    return (
        <ul id="portfolio" className={styles.grid}>
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
    );
}


export default Portfolio;