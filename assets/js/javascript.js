var website = {
    portfolio: document.getElementById('portfolio'),
    portfolioItems:[
        // {title: "title", img: "http://", desc: "", tags: "", url: ""},
        {title: "Color Me ____.", img: "assets/images/portfolio/color-me.JPG", desc: "Word game using Vanilla JS", tags: ["Vanilla JS", "UI/UX"], url: "https://acarlie.github.io/Word_Guess_Game/"},
        {title: "Wikipedia Search", img: "assets/images/portfolio/wikipedia-viewer.JPG", desc: "Wikipedia search using Vanilla JS and Wikipedia's API", tags: ["Vanilla JS", "Rest APIs", "UI/UX", "SCSS", "Bootstrap"], url: "https://codepen.io/acarlie/full/mERLej"},
    ]
}



/* <div class="grid-hover-wrapper">
<div class="grid-item">
    <figure class="img-wrapper">
        <figcaption class="item-title">Lorem Ipsum</figcaption>
        
        <img src="https://via.placeholder.com/300/ddd" alt="" class="item-img">
    </figure>
    <div class="icon-container">
        <span class="fas fa-code icon"></span>
        <div class="icon-content">Technologies Here. BootStrap, Vanilla JS</div>
    </div>
</div>
</div> */

$(document).ready(function(){

    $('#fade-wrapper').fadeIn(1000);
    
    website.portfolioItems.forEach(function(i){
        console.log(i.title);
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

    $(document).scroll(function(){
        scrollMenuIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
   


});