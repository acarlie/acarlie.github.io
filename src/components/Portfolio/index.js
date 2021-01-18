import React from 'react';
import portfolio from './Portfolio.module.scss';
import portfolioItem from './PortfolioItem.module.scss';
import Link from './../Link';

function PortfolioItem(props) {
    const direction = props.odd ? portfolioItem.odd : portfolioItem.even;
    const isCodepen = props.url.indexOf("codepen") > -1;

    return (
        <li className={portfolioItem.item}>
            <div className={portfolioItem.inner + ' ' + direction}>

                <div className={portfolioItem.img_cont}>
                    <img className={portfolioItem.img} src={process.env.PUBLIC_URL + '/assets/images/sm/' + props.img} alt={'Screen capture of ' + props.title} />
                </div>
                <div className={portfolioItem.info}>
                    {props.even}
                    <h3 className="heading__6 heading__uppercase_sm">{props.title}</h3>
                    <div className="text__small">{props.desc}</div>
                    <ul className="list__links text__small" aria-label="Related links">
                        {props.url && !isCodepen && <li className="list_item__link"><Link href={props.url} blank>View the deployment <span className="sr_only">of {props.title}</span>  ⟶ </Link></li>}
                        {props.url && isCodepen && <li className="list_item__link"><Link href={props.url} blank>View <span className="sr_only">{props.title}</span> on CodePen ⟶  </Link></li>}
                        {props.repo && <li className="list_item__link"><Link href={props.repo} blank>View the repo <span className="sr_only">for {props.title}</span> ⟶  </Link></li>}
                    </ul>
                </div>
            </div>

        </li>
    )
}

function Portfolio(props) {
    return (
        <div className={portfolio.wrapper}>

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