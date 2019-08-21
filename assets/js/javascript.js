var port = {
  portfolio: document.getElementById('portfolio'),
  items: [
    { title: "Color Me ____.", img: "assets/images/portfolio/color-me-5.JPG", desc: "'Color Me ___' is a word guessing game created with Vanilla JS.", tags: ["Vanilla JS", "UI/UX"], url: "https://acarlie.github.io/Word_Guess_Game/" },
    { title: "Giphy Search", img: "assets/images/portfolio/giphy-2.JPG", desc: "'Giphy Search' was created using Giphy's API. Users can favorite gifs and copy gif embed links.", tags: ["jQuery, JavaScript, AJAX"], url: "https://acarlie.github.io/Giphy_Project/" },
    { title: "Movie Comparison App", img: "assets/images/portfolio/movie-comp.JPG", desc: "Movie comparison app created with AJAX, jQuery, Chart.JS, and Materialize.", tags: ["jQuery, JavaScript, UI/UX, Materialize, AJAX"], url: "https://fzachary.github.io/project1/" },
    { title: "Train Scheduler", img: "assets/images/portfolio/train-schedule.JPG", desc: "Train scheduling app created using jQuery, Firebase, and Materialize.", tags: ["jQuery, Firebase, Materialize"], url: "https://acarlie.github.io/Train_Scheduler/" },
    { title: "Women of Scifi and Fantasy Trivia", img: "assets/images/portfolio/trivia-game.JPG", desc: "Timed trivia game created with jQuery and JavaScript", tags: ["jQuery, JavaScript"], url: "https://acarlie.github.io/Trivia_Game/" },
    { title: "A Stranger Game", img: "assets/images/portfolio/a-stranger-game-2.JPG", desc: "Player vs algorithm game created using jQuery and JavaScript", tags: ["jQuery"], url: "https://acarlie.github.io/Stranger_Things_Game/" },
    { title: "Wikipedia Search", img: "assets/images/portfolio/wikipedia-viewer.JPG", desc: "Wikipedia search using Vanilla JS and Wikipedia's API", tags: ["Vanilla JS", "Rest APIs", "UI/UX", "SCSS", "Bootstrap"], url: "https://codepen.io/acarlie/full/mERLej" }
  ],
  generate() {
    $.each(port.items, function (i) {
      var arr = port.items;
      var link = $('<a>').attr('href', arr[i].url).attr('target', '_blank').appendTo(port.portfolio);
      var figWrap = $('<figure>').addClass('grid-item').appendTo(link).attr('data-aos', 'fade-up');
      var img = $('<img>').addClass('grid-item-img').attr('src', arr[i].img).attr('alt', arr[i].desc).appendTo(figWrap);
      var info = $('<div>').addClass('grid-item-info').appendTo(figWrap);
      var infoWrap = $('<div>').addClass('grid-item-info-wrap').appendTo(info);
      var figTitle = $('<h4>').addClass('grid-item-title').text(arr[i].title);
      var figCap = $('<figcaption>').addClass('grid-item-cap').text(arr[i].desc);
      var figView = $('<p>').addClass('grid-item-view');
      if (arr[i].url.indexOf('codepen') > -1){
        figView.html('View on CodePen ⟶');
        console.log('CodePen' + arr[i].url);
      } else {
        figView.html('View Project ⟶');
      }

      infoWrap.append(figTitle, figCap, figView);
    });
  }
}

var typewriter = {
  el: document.getElementById('type'),
  elLength: document.getElementById('type').textContent.length,
  period: 200,
  interval: '',
  deleteInterval: '',
  word: '',
  add: true,
  textArray: ["Amelia Carlie", "Development", "& Design"],
  type() {
    this.letter = 0;
    this.counter = 0;
    clearInterval(this.interval);
    this.interval = setInterval(function () { typewriter.addLetters(); }, typewriter.period);
  },
  setWord() {
    this.word = this.textArray[this.counter];
  },
  deleteLetters() {
    if (this.letter > 0 && !this.add) {
      this.letter--;
      var textContent = this.el.textContent;
      this.el.textContent = textContent.substring(0, this.letter);
    } else if (this.letter === 0 && !this.add) {
      this.add = true;
      this.el.innerHTML = '';
      this.counter++;
      this.setWord();
      this.startAdd();
    }
  },
  addLetters() {
    if (this.counter === this.textArray.length) {
      this.type();
    } else {
      this.setWord();
      if (this.letter < this.word.length && this.add) {
        this.el.textContent += this.word[this.letter];
        this.letter++;
      } else if (this.letter === this.word.length && this.add) {
        this.add = false;
        document.getElementById('blinker').classList = "blink";
        setTimeout(function () { typewriter.startDelete(); }, 1500);
      }
    }
  },
  startDelete() {
    document.getElementById('blinker').classList = "";
    clearInterval(this.interval);
    this.interval = setInterval(function () { typewriter.deleteLetters(); }, typewriter.period);
  },
  startAdd() {
    clearInterval(this.interval);
    this.interval = setInterval(function () { typewriter.addLetters(); }, typewriter.period);
  }
}

var util = {
  init() {
    $('#fade-wrapper').fadeIn(1000);
    $('#nav-wrapper').hide();
    var granimBg = this.granim('#canvas-basic');
    var granimBgInst = new Granim(granimBg);
    particlesJS("bg", {
      "particles": {
        "number": {
          "value": 500,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.48927153781200905,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 0.2,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 83,
            "size": 2,
            "duration": 5,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  },
  granim(id) {
    var obj = {
      element: id,
      direction: 'left-right',
      states: {
        "default-state": {
          gradients: [
            ['#F857A8', '#FF5858'],
            ['#DA22FF', '#9733EE'],
            ['#24C6DC', '#514A9D'],
            ['#4CB8C4', '#3CD3AD'],
            ['#24C6DC', '#514A9D'],
            ['#DA22FF', '#9733EE'],
            ['#F857A8', '#FF5858']
          ],
          transitionSpeed: 10000
        }
      }
    }
    return obj;
  }
}

$(document).ready(function () {
  util.init();
  typewriter.type();
  port.generate();
  $('.icon-container-info, .profile-wrapper').attr('data-aos', 'fade-up');
  $('.social-links').attr('data-aos', 'zoom-in');
});