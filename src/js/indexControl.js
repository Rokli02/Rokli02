var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function () {
    let i = $("li.activeli").find("span.navtext");
    i.show();

    let pichold = $(".picHolder").children("div");
    $(pichold[0]).css('background-image','url("src/img/it1.jpg")')
    $(pichold[1]).css('background-image','url("src/img/it2.jpg")')
});

function handleNavBar() {
    $("li").click(function() {
        let lista = $(this);

        lista.siblings().removeAttr("class");
        lista.siblings().children("span").removeAttr("class");
        lista.siblings().find("span.navtext").hide();

        if(lista.children("span").attr("class") == "activenav" && lista.attr("class") == "hoverli") {
            lista.removeAttr("class");
            lista.attr("class", "activeli");
        }

        if(lista.attr("class") != "activeli") {
            lista.find("span.navtext").show();
            lista.attr("class","hoverli");
            lista.children("span").attr("class","activenav");
        }  

        
    });

    $("li").mouseover(function () {
        if($(this).attr("class") != "activeli") {
            $(this).attr("class","hoverli");
        }
        
    });
    $("li").mouseout(function (){
        if($(this).attr("class") != "activeli" && $(this).children("span").attr("class") != "activenav") {
            $(this).removeAttr("class");
        }
        
    });
}
