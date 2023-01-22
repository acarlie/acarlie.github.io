import React, { Component } from 'react';

/**
 * Components
 */
import Headshot from './components/Headshot';
import InPageLink from './components/InPageLink';
import Link from './components/Link';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

/**
 * Styles
 */
import styles from './App.module.scss';
import col from './scss/modules/Col.module.scss';
import container from './scss/modules/Container.module.scss';
import heading from './scss/modules/Heading.module.scss';
import list from './scss/modules/List.module.scss';
import row from './scss/modules/Row.module.scss';
import text from './scss/modules/Text.module.scss';
import utility from './scss/modules/Utility.module.scss'

/**
 * Assets
 */
import items from './assets/js/portfolioItems';
// import portfolio from './assets/pdfs/AmeliaCarlie_DesignPortfolio.pdf';
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
          <h1 className={utility.sr_only}>Amy Carlie, Frontend Developer</h1>

          {/* Home */}
          <section className={container.gradient} id="home">
            <div className={styles.splash}>
              <div className={styles.item}>
                <Headshot />
              </div>

              <div className={styles.item}>
                <h2 className={heading.large}>
                  Hello, I'm Amy Carlie
                </h2>
                <p className={text.large}>
                  I'm a Frontend Developer with a background in UI/UX design and web accessibility. My passion is creating beautiful interfaces that are both accessible and have exceptional user experience.
                </p>
                <div>
                  <Link href={resume} blank={true} className={Link.link}>Download my resume →</Link>
                </div>
                <div>
                  <SocialLinks />
                </div>
              </div>

              <div className={styles.footer}>
                <InPageLink href="#skills" ariaLabel="My Skills" down />
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className={container.gradient + ' ' + container.inset} id="skills">
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
                    <h3 className={heading.small}>UX/UI Design</h3>
                    Flow mapping, Wireframing, Prototyping, High Fidelity Mockups, Design Library/Component Creation, Requirement Gathering
                  </li>
                  <li className={list.item}>
                    <h3 className={heading.small}>Design Tools</h3>
                    Figma, PhotoShop, Illustrator, InDesign, Adobe XD
                  </li>
                  <li className={list.item}>
                    <h3 className={heading.small}>Graphic Design</h3>
                    Color Theory, Illustration, Typography, Branding, Composition
                    {/* <div>
                      <Link href={portfolio} blank={true} className={Link.link}>Download my past graphic design portfolio →</Link>
                    </div> */}
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
          <section className={container.light} id="work">
            <div className={row.row}>
              <Portfolio items={items} />
            </div>
            <div className={styles.footer}>
              <InPageLink href="#home" ariaLabel="Back to top" up />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
