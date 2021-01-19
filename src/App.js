import React, { Component } from 'react';

/**
 * Components
 */
import Headshot from './components/Headshot';
import InPageLink from './components/InPageLink';
import Link from './components/Link';
import Logo from './components/Logo';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

/**
 * Styles
 */
import styles from './App.module.scss';
import col from './scss/modules/Col.module.scss';
import container from './scss/modules/Container.module.scss';
import heading from './scss/modules/Heading.module.scss';
import linkList from './scss/modules/LinkList.module.scss';
import list from './scss/modules/List.module.scss';
import row from './scss/modules/Row.module.scss';
import stack from './scss/modules/Stack.module.scss';
import text from './scss/modules/Text.module.scss';
import utility from './scss/modules/Utility.module.scss';


/**
 * Assets
 */
import items from './assets/js/portfolioItems';
import portfolio from './assets/pdfs/AmeliaCarlie_DesignPortfolio.pdf';
import resume from './assets/pdfs/AmeliaCarlie_Resume.pdf';


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
          <section className={container.dark} id="home">
            <div className={styles.splash + ' ' + row.full + ' ' + row.center}>
              <div className={col.col}>
                <Logo />
                <div className={stack.one}>
                  <h1 className={heading.main}>
                    <span className={utility.sr_only}>
                      Amelia Carlie
                    </span> Frontend Developer
                  </h1>
                </div>
              </div>
              <div className={styles.splash__nav}>
                <InPageLink href="#about" ariaLabel="About me" down />
              </div>
            </div>
          </section>

          {/* About */}
          <section className={container.light} id="about">
            <h2 className={utility.sr_only}>About</h2>
            <div className={row.full}>

              <div className={col.col3 + ' ' + col.center + ' ' + col.dk}>
                <Headshot />
              </div>

              <div className={col.col3 + ' ' + col.center}>
                <div>
                  <div className={row.divided}>
                    <p className={text.large}>
                      I am a frontend developer
                      passionate about UI/UX. With
                      5 years experience in the
                      graphic design field, I am now
                      applying my knowledge of color
                      theory and composition to my
                      development projects.
                      </p>
                    <div className={stack.one}>
                      <ul className={linkList.link}>
                        <li className={linkList.item}>
                          <Link href={resume} blank={true}>Download my resume →</Link>
                        </li>
                        <li className={linkList.item}>
                          <Link href={portfolio} blank={true}>Download my design portfolio →</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={row.divided}>
                    <ul className={text.small}>
                      <li className={list.item}>
                        <h3 className={heading.small}>Frontend</h3>
                          JavaScript, React, Angular, TypeScript, HTML5, CSS3, Sass, Web Accessibility
                        </li>
                      <li className={list.item}>
                        <h3 className={heading.small}>Backend</h3>
                          Node.js, Express, MySQL, MongoDB
                       </li>
                      <li className={list.item}>
                        <h3 className={heading.small}>Design Tools</h3>
                          PhotoShop, Illustrator, InDesign, Adobe XD, Figma
                        </li>
                      <li className={list.item}>
                        <h3 className={heading.small}>Design</h3>
                          Color Theory, Illustration, Typography, Branding, Composition
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work */}
          <section className={container.dark} id="work">
            <h2 className={utility.sr_only}>Work</h2>
            <div className={row.row}>
              <Portfolio items={items} />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <h2 className={heading.main}>
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
