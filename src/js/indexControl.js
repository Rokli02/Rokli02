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

function openMenus(liIndex, liPath) {
    let li = $("nav>ul").children("li");
    setTimeout(function() {
        if($(li[liIndex]).hasClass("activeli")) {
            changeContentByFile(liPath);
            stopAnimation();
            if(liIndex == 0){
                setTimeout(function() {
                    let picholder = $(".picHolder").children("div");
                    $(picholder[0]).css('background-image', 'url("src/img/it1.jpg")');
                    $(picholder[1]).css('background-image', 'url("src/img/it1.jpg")');
                }, 50);
                picIndex = 0;
                nextPicIndex = 0;
                circleIndex = 0;
                previousDir = 1;
            }
        }
    }, 50);
}

function changeContentByFile(file) {
    fetch(file)
                .then(response => response.text())
                .then(data => loadTextAsContent(data));
}

function loadTextAsContent(text) {
    let content = $("#content").html(text);
}

//
//  Regisztrációt kezelő funkciók
//
isOpen = false;
function handleRegistration() {
    var cursorOut = true;
    $('#registration').mouseout(function () { 
        cursorOut = true;
    });
    $('#registration').mouseover(function () { 
        cursorOut = false;
    });

    $('#blank').click(function () {
        if(cursorOut) {
            openCloseRegistration();
        }
    });
}

function openCloseRegistration() { 
    if(isOpen) {
        $("#blank").hide();
        $("#registration").hide();
        isOpen = false;
    } else {
        $("#blank").show();
        $("#registration").show();
        isOpen = true;
    }
 }