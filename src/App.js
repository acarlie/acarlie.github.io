import React, { Component } from 'react';

/**
 * Components
 */
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import InPageLink from './components/InPageLink';
import Logo from './components/Logo';
import Headshot from './components/Headshot';
import Link from './components/Link';

/**
 * Styles
 */
import styles from './App.module.scss';

/**
 * Assets
 */
import items from './assets/js/portfolioItems';
import resume from './assets/pdfs/AmeliaCarlie_Resume.pdf';
import portfolio from './assets/pdfs/AmeliaCarlie_DesignPortfolio.pdf';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loader: ''
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">

        {/* Content */}
        <main>

          {/* Home */}
          <section className={styles.container + ' ' + styles.container__dark} id="home">
            <div className={styles.splash + ' ' + styles.row + ' ' + styles.row__100 + ' ' + styles.row__center}>
              <div className={styles.col}>
                <Logo />
                <h1 className={styles.row__stacked + ' heading__5 heading__uppercase'}>
                  <span className="sr_only">
                    Amelia Carlie
                  </span> Frontend Developer
                </h1>
              </div>
              <div className={styles.splash_nav}>
                <InPageLink href="#about" ariaLabel="About me" down />
              </div>
            </div>
          </section>

          {/* About */}
          <section className={styles.container + ' ' + styles.container__light} id="about">
            <h2 className="sr_only">About</h2>
            <div className={styles.row + ' ' + styles.row__100}>

              <div className={styles.col + ' ' + styles.col__3 + ' ' + styles.col__center + ' ' + styles.col__dk}>
                <Headshot />
              </div>

              <div className={styles.col + ' ' + styles.col__3 + ' ' + styles.col__center}>
                <div>
                  <div className={styles.row__inner_divided}>
                    <p className=" text__large">
                      I am a frontend developer
                      passionate about UI/UX. With
                      5 years experience in the
                      graphic design field, I am now
                      applying my knowledge of color
                      theory and composition to my
                      development projects.
                      </p>
                    <div className={styles.row__stacked}>
                      <ul className="list__links">
                        <li className="list_item__link">
                          <Link href={resume} blank={true}>Download my resume →</Link>
                        </li>
                        <li className="list_item__link">
                          <Link href={portfolio} blank={true}>Download my design portfolio →</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.row__inner_divided}>
                    <ul className="text__small">
                      <li className='list_item'>
                        <h3 className="heading__6 heading__uppercase_sm">Frontend</h3>
                          JavaScript, React, Angular, TypeScript, HTML5, CSS3, Sass, Web Accessibility
                        </li>
                      <li className='list_item'>
                        <h3 className="heading__6 heading__uppercase_sm">Backend</h3>
                          Node.js, Express, MySQL, MongoDB
                       </li>
                      <li className='list_item'>
                        <h3 className="heading__6 heading__uppercase_sm">Design Tools</h3>
                          PhotoShop, Illustrator, InDesign, Adobe XD, Figma
                        </li>
                      <li className='list_item'>
                        <h3 className="heading__6 heading__uppercase_sm">Design</h3>
                          Color Theory, Illustration, Typography, Branding, Composition
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work */}
          <section className={styles.container + ' ' + styles.container__dark} id="work">
            <h2 className="sr_only">Work</h2>
            <div className={styles.row}>
              <Portfolio items={items} />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <h2 className={'heading__5 heading__uppercase'}>
            Connect with me
          </h2>
          <SocialLinks />
          <InPageLink href="#home" ariaLabel="Back to top" up />
        </footer>
      </div>
    );
  }
}

export default App;
