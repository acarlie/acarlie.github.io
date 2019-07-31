var website = {
    portfolio: document.getElementById('portfolio'),
    portfolioItems:[
        // {title: "title", img: "http://", desc: "", tags: "", url: ""},
        {title: "Color Me ____.", img: "assets/images/portfolio/color-me-5.JPG", desc: "Word game created with Vanilla JS", tags: ["Vanilla JS", "UI/UX"], url: "https://acarlie.github.io/Word_Guess_Game/"},
        {title: "Trivia Game", img: "assets/images/portfolio/trivia-game.JPG", desc: "Timed Trivia Game created using jQuery and JavaScript", tags: ["jQuery, JavaScript"], url: "https://acarlie.github.io/Trivia_Game/"},
        {title: "A Stranger Game", img: "assets/images/portfolio/a-stranger-game-2.JPG", desc: "Player vs algorithm game created using jQuery and JavaScript", tags: ["jQuery"], url: "https://acarlie.github.io/Stranger_Things_Game/"},
        {title: "Wikipedia Search", img: "assets/images/portfolio/wikipedia-viewer.JPG", desc: "Wikipedia search using Vanilla JS and Wikipedia's API", tags: ["Vanilla JS", "Rest APIs", "UI/UX", "SCSS", "Bootstrap"], url: "https://codepen.io/acarlie/full/mERLej"},
    ]
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

typewriter.type();

$(document).ready(function(){

    $('#fade-wrapper').fadeIn(1000);
    
    website.portfolioItems.forEach(function(i){
        var itemWrap = document.createElement("div");
        itemWrap.className = "grid-hover-wrapper";
        website.portfolio.appendChild(itemWrap);
    
        var link = document.createElement("a");
        link.classList = "port-link";
        link.setAttribute("href", i.url);
        link.setAttribute("target", "_blank");
        itemWrap.appendChild(link);
    
        var item = document.createElement("div");
        item.className = "grid-item";
        link.appendChild(item);
    
        var figWrap = document.createElement("figure");
        figWrap.className = "img-wrapper";
        item.appendChild(figWrap);
    
        var figCap = document.createElement("figcaption");
        figCap.className = "item-title";
        figCap.innerHTML = "";
        figWrap.appendChild(figCap);
    
        var img = document.createElement("img");
        img.setAttribute("src", i.img);
        img.setAttribute("alt", i.desc)
        img.className = "item-img";
        figWrap.appendChild(img);
    
        var iconCont = document.createElement("div");
        iconCont.className = "icon-container";
        item.appendChild(iconCont);
    
        var iconSpan = document.createElement("span");
        iconSpan.classList = "fas fa-code icon";
        iconCont.appendChild(iconSpan);
    
        var tech = document.createElement("div");
        tech.className = "icon-content";
        tech.innerHTML = '<h3>'+ i.title + '</h3>';
        iconCont.appendChild(tech);
    });


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