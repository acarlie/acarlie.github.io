var port = {
    portfolio: document.getElementById('portfolio'),
    items: [
      { title: "All Things {Front-End}", img: "assets/images/portfolio/all-things-front-end.JPG", desc: "'All Things {Front-End}' is an article scraper where users can add notes and save articles. Created with Node.js, MongoDB, Express, Handlebars, SCSS, BEM, Gulp, Cheerio, and Axios.", tags: [""], url: "https://agile-bayou-91638.herokuapp.com/", repo: "https://github.com/acarlie/mongo_scraper" },
      { title: "Color Me ____.", img: "assets/images/portfolio/color-me-4.JPG", desc: "'Color Me ___' is a word guessing game created with Vanilla JS.", tags: ["Vanilla JS", "UI/UX"], url: "https://acarlie.github.io/Word_Guess_Game/", repo: "https://github.com/acarlie/Word_Guess_Game" },
      { title: "Giphy Search", img: "assets/images/portfolio/giphy-2.JPG", desc: "'Giphy Search' was created using Giphy's API. Users can favorite gifs and copy gif embed links. Designed mobile first.", tags: ["jQuery, JavaScript, AJAX"], url: "https://acarlie.github.io/Giphy_Project/", repo: "https://github.com/acarlie/Giphy_Project" },
      { title: "Movie Comparison App", img: "assets/images/portfolio/movie-comp.JPG", desc: "Movie comparison app created with AJAX, jQuery, Chart.js, and Materialize. Designed mobile first.", tags: ["jQuery, JavaScript, UI/UX, Materialize, AJAX"], url: "http://acarlie.com/movie_comparison_app/", repo: "https://github.com/acarlie/movie_comparison_app" },
      { title: "Bamazon", img: "assets/images/portfolio/bamazon.gif", desc: "Node.js and MySQL inventory management app with customer, manager, and supervisor views.", tags: ["Node.JS, JavaScript, MySQL"], url: "", repo: "https://github.com/acarlie/bamazon"},
      { title: "Liri Node App", img: "assets/images/portfolio/liri_spotify-this.png", desc: "Node CLI App for searching OMDB, Spotify, and Bands in Town. Created with ES6, Node, Axios, Inquirer.js, and Moment.js.", tags: ["ES6, Node.JS"], url: "", repo: "https://github.com/acarlie/liri_node_app" },
      { title: "Train Scheduler", img: "assets/images/portfolio/train-schedule.JPG", desc: "Train scheduling app created using jQuery, Firebase, and Materialize.", tags: ["jQuery, Firebase, Materialize"], url: "https://acarlie.github.io/Train_Scheduler/", repo: "https://github.com/acarlie/Train_Scheduler" },
      { title: "Wags with Friends", img: "assets/images/portfolio/wags-with-friends.JPG", desc: "App for finding playmates for pets. Created with SASS, MySQL, Sequelize, Node.js, Express, Express-Handlebars.", tags: ["MySQL, Sequelize, SASS"], url: "https://project2-10-2019.herokuapp.com/", repo: "https://github.com/acarlie/wags_with_friends" },
      { title: "Burger App", img: "assets/images/portfolio/burger-app.JPG", desc: "CRUD app created with Node.js, Express, Handlebars, MySQL, jQuery, and Bootstrap.", tags: ["jQuery, Bootstrap, MySQL, Node, Express, Handlebars"], url: "https://blooming-falls-67802.herokuapp.com/", repo: "https://github.com/acarlie/burger" },
      { title: "Women of Scifi and Fantasy Trivia", img: "assets/images/portfolio/trivia-game.JPG", desc: "Timed trivia game created with jQuery and JavaScript.", tags: ["jQuery, JavaScript"], url: "https://acarlie.github.io/Trivia_Game/", repo: "https://github.com/acarlie/Trivia_Game" },
      { title: "A Stranger Game", img: "assets/images/portfolio/a-stranger-game-2.JPG", desc: "Player vs algorithm game created using jQuery and JavaScript.", tags: ["jQuery"], url: "https://acarlie.github.io/Stranger_Things_Game/", repo: "https://github.com/acarlie/Stranger_Things_Game" },
      { title: "Star Trek Character Quiz", img: "assets/images/portfolio/star-trek.JPG", desc: "'Star Trek Character Quiz' is a quiz app created with Node.js, Express, and the Semantic UI library.", tags: ["Node.JS, JavaScript, Express"], url: "https://intense-beyond-55341.herokuapp.com/", repo: "https://github.com/acarlie/star_trek" },
      { title: "CLI Word Guessing Game", img: "assets/images/portfolio/example.gif", desc: "Node.js word guessing game using JavaScript constructors.", tags: ["Node.JS, JavaScript"], url: "", repo: "https://github.com/acarlie/Constructor_Word_Guess" },
      { title: "Wikipedia Search", img: "assets/images/portfolio/wikipedia-viewer.JPG", desc: "Wikipedia search using jQuery, Wikipedia's API, SCSS, and Pug.", tags: ["jQuery", "Rest APIs", "UI/UX", "SCSS", "Bootstrap"], url: "https://codepen.io/acarlie/pen/mERLej", repo: "" },
      { title: "Vanilla JS Typewriter", img: "assets/images/portfolio/typewriter.JPG", desc: "Vanilla JS typerwiter created using setInterval, clearInterval, setTimeout, and ES6 classes.", tags: ["Vanilla JS"], url: "https://codepen.io/acarlie/pen/KOqmPN", repo: "" }
    ],
    generate: function() {
      $.each(port.items, function (i) {
        var arr = port.items,
            figWrap = $('<figure>').addClass('grid-item').appendTo(port.portfolio).attr('data-aos', 'fade-up'),
            img = $('<img>').addClass('grid-item-img').attr('src', arr[i].img).attr('alt', arr[i].desc).appendTo(figWrap),
            info = $('<div>').addClass('grid-item-info').appendTo(figWrap),
            infoWrap = $('<div>').addClass('grid-item-info-wrap').appendTo(info),
            figTitle = $('<h4>').addClass('grid-item-title').text(arr[i].title),
            figCap = $('<figcaption>').addClass('grid-item-cap').text(arr[i].desc),
            linksWrap = $('<ul>').addClass('grid-item-view'),
            deployedWrap = $('<li>'),
            repoWrap = $('<li>'),
            deployedLink = $('<a>').attr('href', arr[i].url).attr('target', '_blank').addClass('grid-item-link'),
            repoLink = $('<a>').attr('href', arr[i].repo).attr('target', '_blank').addClass('grid-item-link');

        if (arr[i].url.length > 0 && arr[i].url.indexOf('codepen') > -1){
          deployedLink.text('View on CodePen ⟶').appendTo(deployedWrap);
        } else if (arr[i].url.length > 0){
          deployedLink.text('View Deployed Project ⟶').appendTo(deployedWrap);
        }

        if (arr[i].repo.length > 0){
          repoLink.text('View the Repo ⟶').appendTo(repoWrap);
        }

        linksWrap.append(deployedWrap, repoWrap);
        infoWrap.append(figTitle, figCap, linksWrap);
      });
    }
  }
  