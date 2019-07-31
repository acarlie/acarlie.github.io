var port = {
    portfolio: document.getElementById('portfolio'),
    items:[
        // {title: "title", img: "http://", desc: "", tags: "", url: ""},
        {title: "Color Me ____.", img: "assets/images/portfolio/color-me-5.JPG", desc: "Word game created with Vanilla JS", tags: ["Vanilla JS", "UI/UX"], url: "https://acarlie.github.io/Word_Guess_Game/"},
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
        if (this.letter > 0 && !this.add){ //delete until letter count = 0
            this.letter--;
            var textContent = this.el.textContent;
            this.el.textContent = textContent.substring(0, this.letter); 
        } else if (this.letter === 0 && !this.add){ //when letter count = 0, start adding next word
            this.add = true;
            this.el.innerHTML = '';
            this.counter++; //next word
            this.setWord();
            this.startAdd();
        }
    },
    addLetters() {
        //if all words have been looped through
        if (this.counter === this.textArray.length) {
            this.type();
        } else { //otherwise start word
            this.setWord();
            if (this.letter < this.word.length && this.add) { //before word is complete keep adding
                this.el.textContent += this.word[this.letter];
                this.letter++;
            } else if (this.letter === this.word.length && this.add) { //when letter is complete start deleting
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

var utilities = {
    menuFadeIn(){

    },
    scrollSpy(){

    }
}


$(document).ready(function(){

    $('#fade-wrapper').fadeIn(1000);

    typewriter.type();

    port.generate();

    var scrollMenuIds = $('a.nav-link[href]');

    $("#menu").click(function() {
        $('#nav').toggleClass('nav-visible');
    });

    $('#nav-wrapper').hide();

    var secondChildPos = $('main section:nth-child(2)').offset().top * .75;

    $(document).scroll(function(){
        var scrollPosition = $(document).scrollTop();
      
        if (scrollPosition < secondChildPos){
            $('#nav-wrapper').fadeOut(500);
        } else if (scrollPosition > secondChildPos){
            $('#nav-wrapper').fadeIn(500);

        }

        scrollMenuIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
   


});