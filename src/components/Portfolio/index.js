import React from 'react';
import portfolio from './Portfolio.module.scss';
import portfolioItem from './PortfolioItem.module.scss';
import Link from './../Link';

function PortfolioItem(props) {
    const direction = props.odd ? portfolioItem.odd : portfolioItem.even;

    return (
        <li className={portfolioItem.item}>
            <div className={portfolioItem.inner + ' ' + direction}>

                <div className={portfolioItem.img_cont}>
                    <img className={portfolioItem.img} src={process.env.PUBLIC_URL + '/assets/images/sm/' + props.img} alt={props.desc} />
                </div>
                <div className={portfolioItem.info}>
                    {props.even}
                    <h3 className="heading__6 heading__uppercase_sm">{props.title}</h3>
                    <div className="text__small">{props.desc}</div>
                    <ul className="list__links text__small">
                        {props.url && <li className="list_item__link"><Link href={props.url} blank text="View deployment ⟶" /></li>}
                        {props.repo && <li className="list_item__link"><Link href={props.repo} blank text="View the repo ⟶" /></li>}
                    </ul>
                </div>
            </div>

        </li>
    )
}
// function PortfolioItem(props) {
//     return (
//         <li className={portfolioItem.grid_item}>
//             <img className={portfolioItem.grid_item_img} src={process.env.PUBLIC_URL + '/assets/images/sm/' + props.img} alt={props.desc} />
//             <div className={portfolioItem.grid_item_info}>
//                 <div className={portfolioItem.grid_item_info_inner}>
//                     <h3 className={portfolioItem.grid_item_title}>{props.title}</h3>
//                     <div className={portfolioItem.grid_item_cap}>{props.desc}</div>
//                     <ul>
//                         {props.url && <li><a href={props.url} target="_blank" text="">View Deployed Project ⟶</a></li>}
//                         {props.repo && <li><a href={props.repo} target="_blank" text="">View the Repo ⟶</a></li>}
//                     </ul>
//                 </div>
//             </div>
//         </li>
//     )
// }

function Portfolio(props) {
    return (
        <div className={portfolio.wrapper}>

            <ul id="portfolio">
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