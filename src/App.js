import React, { Component } from 'react';

// packages
import Select from 'react-select';

//components
// import TypeWriter from './components/TypeWriter';
import SocialLinks from './components/SocialLinks';
// import IconContainer from './components/IconContainer';
import PortfolioItem from './components/PortfolioItem';
import makeAnimated from 'react-select/animated';
//assets
// import Profile from './assets/images/profile_square.png';
import items from './assets/js/portfolioItems';
import Logo from './components/Logo';

import styles from './App.module.scss';


const animatedComponents = makeAnimated();
const menuStyles = {
  menu: (provided, state) => ({
    ...provided,
    padding: 10
    // borderRadius: 0
    // overflow: 'hidden'
  })
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loader: ''
    }
    this.filters = ["React", "Node", "Express", "MERN", "MongoDB", "MySQL", "UI/UX", "Mobile-First", "Vanilla JS", "AJAX", "ES6", "Sass", "Bootstrap", "Materialize", "jQuery"]
    this.filterOptions = this.filters.map(x => {
      return { value: x, label: x }
    })
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({
        loader: 'done',
        portfolio: [...items]
      })
    }, 3000)
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 4000)
  }



  filterHandler = (input) => {
    const filterArr = input || false;
    let filtered = [];
    if (filterArr && filterArr.length > 0) {
      const filters = filterArr.map(x => x.value);
      const filteredTitles = [];
      for (let y of filters) {
        for (let x of items) {
          if (x.tags.indexOf(y) > -1 && filteredTitles.indexOf(x.title) < 0) {
            filteredTitles.push(x.title);
            filtered.push(x);
          }
        }
      }

    } else {
      filtered = [...items];
    }
    this.setState({
      portfolio: [...filtered]
    })
  }

  render() {
    return (
      <div className="App">



        {/* Content */}
        <div id="fade-wrapper">
          <main>


            {/* Home */}
            <section className={styles.container + ' ' + styles.container__dark} id="home">
              <div className={styles.wrapper + ' ' + styles.wrapper__center}>
                <div>
                  <Logo />
                  <h1 className={styles.heading__5 + ' ' + styles.heading__uppercase}>
                    <span className={styles.sr_only}>
                      Amelia Carlie
                    </span>
                      Frontend Developer
                  </h1>
                </div>
              </div>
            </section>

            {/* About */}
            <section className={styles.container + ' ' + styles.container__light} id="about">
              <h2 className={styles.sr_only}>About</h2>
              <div className={styles.wrapper}>
                <div className={styles.col + ' ' + styles.col__3}>
                  hello there
                </div>

                <div className={styles.col + ' ' + styles.col__3}>
                  reallly
                </div>
              </div>
            </section>

            {/* Work */}
            <section className={styles.container + ' ' + styles.container__dark} id="work">

              <div className="wrapper">
                <div className="row">
                  <div className='col col-6'>
                    <Select
                      options={this.filterOptions}
                      isMulti
                      name="filter"
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder='Filter by tags...'
                      components={animatedComponents}
                      onChange={this.filterHandler}
                      styles={menuStyles}
                      theme={theme => ({
                        ...theme,
                        borderRadius: 8,
                        colors: {
                          ...theme.colors,
                          primary: '#FF4F69',
                          primary75: '#FF6F84',
                          primary50: '#FF8F9F',
                          primary25: '#FFAFBA'
                        }
                      })}
                    />
                  </div>
                </div>
                <div className="row">
                  <div id="portfolio" className="col col-6 grid">
                    {this.state.loader &&
                      this.state.portfolio.map((item, i) => {
                        return (
                          <PortfolioItem
                            key={i}
                            title={item.title}
                            img={item.img}
                            url={item.url}
                            repo={item.repo}
                            desc={item.desc}
                          />
                        );
                      })
                    }

                  </div>
                </div>
              </div>

              <div className="wrapper-nav">
                <span className="fas fa-chevron-up"></span>
                <a href="#home" className="wrapper-link">Back to Top</a>
              </div>

            </section>

          </main>

          <footer>

            <div id="social" className="footer-top">
              <SocialLinks />
            </div>

            <div className="text-center text-sm footer-bottom">
              <p> - Created with React <i className="fab fa-react"></i> - </p>
              <p>© Amelia Carlie 2021</p>
            </div>

          </footer>
        </div>
      </div>
    );
  }
}

export default App;
