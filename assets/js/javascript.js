var port = {
    portfolio: document.getElementById('portfolio'),
    items:[
        {title: "Color Me ____.", img: "assets/images/portfolio/color-me-5.JPG", desc: "Word game created with Vanilla JS", tags: ["Vanilla JS", "UI/UX"], url: "https://acarlie.github.io/Word_Guess_Game/"},
        {title: "Giphy Search", img: "assets/images/portfolio/giphy-2.JPG", desc: "Giphy search using Giphy's API", tags: ["jQuery, JavaScript, AJAX"], url: "https://acarlie.github.io/Giphy_Project/"},
        {title: "Train Scheduler", img: "assets/images/portfolio/train-schedule.JPG", desc: "Train scheduling app created using jQuery, Firebase, and Materialize.", tags: ["jQuery, Firebase, Materialize"], url: "https://acarlie.github.io/Train_Scheduler/"},
        {title: "Trivia Game", img: "assets/images/portfolio/trivia-game.JPG", desc: "Timed Trivia Game created using jQuery and JavaScript", tags: ["jQuery, JavaScript"], url: "https://acarlie.github.io/Trivia_Game/"},
        {title: "A Stranger Game", img: "assets/images/portfolio/a-stranger-game-2.JPG", desc: "Player vs algorithm game created using jQuery and JavaScript", tags: ["jQuery"], url: "https://acarlie.github.io/Stranger_Things_Game/"},
        {title: "Wikipedia Search", img: "assets/images/portfolio/wikipedia-viewer.JPG", desc: "Wikipedia search using Vanilla JS and Wikipedia's API", tags: ["Vanilla JS", "Rest APIs", "UI/UX", "SCSS", "Bootstrap"], url: "https://codepen.io/acarlie/full/mERLej"},
    ],
    generate(){
        $.each(port.items, function(i){
            var arr = port.items;
            var itemWrap = $('<div>').addClass('grid-hover-wrapper').appendTo(port.portfolio);
            var link = $('<a>').addClass('port-link').attr('href', arr[i].url).attr('target', '_blank').appendTo(itemWrap);
            var item = $('<div>').addClass('grid-item').appendTo(link);
            var figWrap = $('<figure>').addClass('img-wrapper').appendTo(item);
            var figCap = $('<figcaption>').addClass('item-title').appendTo(figWrap);
            var img = $('<img>').addClass('item-img').attr('src', arr[i].img).attr('alt', arr[i].desc).appendTo(figWrap);
            var iconCont = $('<div>').addClass('icon-container').appendTo(item);
            var iconSpan = $('<span>').addClass('fas fa-code icon').appendTo(iconCont);
            var tech = $('<div>').addClass('icon-content').html('<h3>' + arr[i].title + '</h3>').appendTo(iconCont);
        }); 
    }
}

var typewriter = {
    el: document.getElementById('type'),
    elLength: document.getElementById('type').textContent.length,
    period: 150,
    interval: '',
    deleteInterval: '',
    word: '',
    add: true,
    textArray: ["Amelia Carlie", "Development", "& Design"],
    type() {
        this.letter = 0;
        this.counter = 0;
        clearInterval(this.interval);
        this.interval = setInterval(function(){typewriter.addLetters();}, typewriter.period);
    },
    setWord(){
        this.word = this.textArray[this.counter];
    },
    deleteLetters(){
        if (this.letter > 0 && !this.add){ 
            this.letter--;
            var textContent = this.el.textContent;
            this.el.textContent = textContent.substring(0, this.letter); 
        } else if (this.letter === 0 && !this.add){ 
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
                setTimeout(function(){ typewriter.startDelete(); }, 1500);
            }  
        } 
    },
    startDelete() {
        document.getElementById('blinker').classList = "";
        clearInterval(this.interval);
        this.interval = setInterval(function(){typewriter.deleteLetters();}, typewriter.period);
    },
    startAdd(){
        clearInterval(this.interval);
        this.interval = setInterval(function(){typewriter.addLetters();}, typewriter.period);
    }
}

var util = {
    init(){
        $('#fade-wrapper').fadeIn(1000);
        $('#nav-wrapper').hide();
    },
    mobileMenu(){
        $('#nav').toggleClass('nav-visible');
    },
    menuFade(scrollTop, secondChild){
        if (scrollTop < secondChild){
            $('#nav-wrapper').fadeOut(500);
        } else if (scrollTop > secondChild){
            $('#nav-wrapper').fadeIn(500);

        }
    }
}

$(document).ready(function(){
    util.init();

    var scrollMenuIds = $('a.nav-link[href]');
    var secondChildPos = $('main section:nth-child(2)').offset().top * .75;

    typewriter.type();
    port.generate();

    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        states : {
            "default-state": {
                gradients: [
                    ['#F857A8', '#FF5858'],
                    ['#FF8008', '#FFC837'],       
                    ['#FF8008', '#FFC837'],
                    ['#4CB8C4', '#3CD3AD'],
                    ['#24C6DC', '#514A9D'],
                    ['#FF512F', '#DD2476'],
                    ['#DA22FF', '#9733EE']           
                ],
                transitionSpeed: 7000

            }
        }
    });

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


    //mobile menu
    $("#menu").click(util.mobileMenu);


    $(document).scroll(function(){
        var scrollPosition = $(document).scrollTop();
        
        util.menuFade(scrollPosition, secondChildPos);

        scrollMenuIds.each(function(i){
            var link = scrollMenuIds[i];
            var container = $(link).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(link).addClass('active');
            } else{
                $(link).removeClass('active');
            }
    
        });
    });
   


});