import React, { Component } from 'react';

/**
 * Components
 */
import Headshot from './components/Headshot';
import InPageLink from './components/InPageLink';
import Link from './components/Link';
// import Logo from './components/Logo';
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


          {/* <section className={container.dark} id="home">
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
          </section> */}

          {/* Home */}
          <section className={container.light} id="home">
            <div className={row.full}>
              <div className={col.col3 + ' ' + col.center}>
                <Headshot />
              </div>

              <div className={col.col3 + ' ' + col.center}>
                <div className={row.divided}>
                  <h2 className={heading.large}>
                    Hello, I'm Amy Carlie
                  </h2>
                  <p className={text.large + ' ' + stack.two}>
                    I'm a Frontend Developer with a background in UI/UX design and web accessibility. My passion is creating beautiful interfaces that are both accessible and have exceptional user experience.
                  </p>
                  <div className={stack.two}>
                    <Link href={resume} blank={true} className={Link.link}>Download my resume →</Link>
                  </div>
                  <div className={stack.two}>
                    <SocialLinks />
                  </div>
                </div>
                <div className={styles.splash__nav}>
                  <InPageLink href="#skills" ariaLabel="My Skills" down />
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className={container.light} id="skills">
            <div className={row.full}>

              <div className={col.col3 + ' ' + col.center}>
                <h2 className={heading.large}>
                  My Skills
                </h2>
              </div>

              <div className={col.col3 + ' ' + col.center}>
                <ul className={text.small}>
                  <li className={list.item}>
                    <h3 className={heading.small}>Frontend</h3>
                    JavaScript, React, Angular, TypeScript, Web Accessibility, HTML5, CSS3, SCSS, Emotion, SVG & CSS Animations, Node.js
                  </li>
                  <li className={list.item}>
                    <h3 className={heading.small}>Accessibility</h3>
                    Semantic HTML, VoiceOver, JAWS, NVDA, Keyboard Testing
                  </li>
                  <li className={list.item}>
                    <h3 className={heading.small}>Design Tools</h3>
                    Figma, PhotoShop, Illustrator, InDesign, Adobe XD
                  </li>
                  <li className={list.item}>
                    <h3 className={heading.small}>UX/UI Design</h3>
                    Flow mapping, Wireframing, Prototyping, High Fidelity Mockups, Design Library/Component Creation, Requirement Gathering
                  </li>
                  <li className={list.item}>
                    <h3 className={heading.small}>Graphic Design</h3>
                    <div>
                      Color Theory, Illustration, Typography, Branding, Composition
                    </div>
                    <div>
                      <Link href={portfolio} blank={true} className={Link.link}>Download my past graphic design portfolio →</Link>
                    </div>

                  </li>
                  <li className={list.item}>
                    <h3 className={heading.small}>
                      Previous/Some Experience
                    </h3>
                    GraphQL, Express, MySQL, MongoDB
                  </li>
                </ul>
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
          <InPageLink href="#home" ariaLabel="Back to top" up />
        </footer>
      </div>
    );
  }
}

export default App;
