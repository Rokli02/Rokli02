var script = document. createElement('script');
script. src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script. type = 'text/javascript';
document. getElementsByTagName('head')[0]. appendChild(script);

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

function setTransitionSpeed(time) {
    let text = "transform "+time+"ms";
    $(".picHolder div").css({"transition":text});
}

picIndex = 0;
nextPicIndex = 2;
circleIndex = 1;
function swapImages() {
    $(".picHolder").click(function () {
        let pathOfPics = ['url("src/img/it1.jpg")', 'url("src/img/it2.jpg")', 'url("src/img/it3.jpg")'];
        let picHolders = $(this).children("div");
        let splitedMatrix = $(picHolders[0]).css("transform").slice(7,-1).split(", ");

        if(pathOfPics != 2) {
            if(picIndex == 0) {
                setTransitionSpeed(700);
                $(picHolders[0]).css("transform","translateX(-100%)");
                $(picHolders[1]).css("transform","translateX(0%)");
                
                setTimeout(function() {
                    setTransitionSpeed(0);
                    $(picHolders[0]).css("transform","translateX(100%)");
                    $(picHolders[0]).css("background-image", pathOfPics[nextPicIndex]);

                    incrementVariables(pathOfPics);
                } ,700);
                
               
                
            } else if(picIndex == 1){
                setTransitionSpeed(700);
                $(picHolders[1]).css("transform","translateX(-100%)");
                $(picHolders[0]).css("transform","translateX(0%)");
                
                setTimeout(function() {
                    setTransitionSpeed(0);
                    $(picHolders[1]).css("transform","translateX(100%)");
                    $(picHolders[1]).css("background-image", pathOfPics[nextPicIndex]);

                    incrementVariables(pathOfPics);
                } ,700);
            }

        selectCircles(circleIndex);
            //TODO: circle around the images; 
            //      when one picture slides to the left, lose its transition attribute, 
            //      get to the right, and gets back its transition attribute.
            //      Meanwhile select circles below the pic.
        }
        else {
            swapTwoImages(picHolders, splitedMatrix[4]);
        }

        /*console.log("Változó: "+picIndex);
        console.log("0-ás: "+$(picHolders[0]).css("transform"));
        console.log("1-es: "+$(picHolders[1]).css("transform"));*/
       
    });
}

function swapTwoImages(picHolders, matrixNum) {
    if(-350 != matrixNum) {
        $(picHolders[0]).css("transform","translateX(-100%)");
        $(picHolders[1]).css("transform","translateX(-100%)")
    } else {
        $(picHolders[0]).css("transform","translateX(0%)");
        $(picHolders[1]).css("transform","translateX(0%)")
    }
}

function selectCircles(index) {
    let divs = $(".picSelector").children("div");
    divs.css("background-color","rgb(24, 23, 23)");
    $(divs[index]).css("background-color","rgb(136, 133, 133)");
}

function incrementVariables(pathOfPics) {
    if(nextPicIndex == pathOfPics.length-1)
        nextPicIndex = -1;
    if(picIndex == 1)
        picIndex = -1;
    if(circleIndex == pathOfPics.length-1)
        circleIndex = -1;
    picIndex++;
    nextPicIndex++;
    circleIndex++;
}

