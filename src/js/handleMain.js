var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function setTransitionSpeed(time) {
    let text = "transform "+time+"ms";
    $(".picHolder div").css({"transition":text});
}

//TODO: Automaticly generate circles by the number of given pic urls!
picIndex = 0;
nextPicIndex = 0;
circleIndex = 0;
canWork = true;
function swapImages() {
    $(".picHolder>span").click(function () {
        let pathOfPics = ['url("src/img/it1.jpg")', 'url("src/img/it2.jpg")', 'url("src/img/it3.jpg")'];
        let picHolders = $(".picHolder").children("div");

        if(canWork) {
            canWork = false;
            if($(this).attr("id") == "before")
                swap(pathOfPics, picHolders, 0);
            else
                swap(pathOfPics, picHolders, 1);

            selectCircles(circleIndex);
        }
    });
}

previousDir = 1;
function swap(pathOfPics, picHolders, direction) {
    if((picIndex % 2) == 0)
        var indexes = [0, 1];
    else
        var indexes = [1, 0];
    
    if(direction == 1) {
        incrementVariables(pathOfPics);
        indexes[2] = -100;
        indexes[3] = 100
    } else if(direction == 0) {
        decreaseVariables(pathOfPics);
        indexes[2] = 100;
        indexes[3] = -100
    }
    if(previousDir != direction) {
        setTransitionSpeed(0);
        $(picHolders[indexes[1]]).css({"transform":"translateX("+indexes[3]+"%)"});
        setTimeout(function() {
            movePic(pathOfPics, picHolders, indexes);
        }, 20);
        previousDir = direction;
    } else {
        movePic(pathOfPics, picHolders, indexes)
    }
}

function movePic(pathOfPics, picHolders, indexes) {
    setTransitionSpeed(700);
    $(picHolders[indexes[0]]).css({"transform":"translateX("+indexes[2]+"%)"});
    $(picHolders[indexes[1]]).css("background-image", pathOfPics[nextPicIndex]);
    $(picHolders[indexes[1]]).css("transform","translateX(0%)");

    setTimeout(function() {
        setTransitionSpeed(0);
        $(picHolders[indexes[0]]).css({"transform":"translateX("+indexes[3]+"%)"});
        canWork = true;
    } ,800);
} 

function selectCircles(index) {
    let divs = $(".picSelector").children("div");
    divs.css("background-color","rgb(24, 23, 23)");
    $(divs[index]).css("background-color","rgb(136, 133, 133)");
}

function incrementVariables(pathOfPics) {
    if(nextPicIndex >= pathOfPics.length-1)
        nextPicIndex = -1;
    if(picIndex == 1)
        picIndex = -1;
    if(circleIndex >= pathOfPics.length-1)
        circleIndex = -1;
    picIndex++;
    nextPicIndex++;
    circleIndex++;
}

function decreaseVariables(pathOfPics) {
    if(nextPicIndex <= 0)
        nextPicIndex = pathOfPics.length;
    if(picIndex == 0)
        picIndex = 2;
    if(circleIndex <= 0)
        circleIndex = pathOfPics.length
    picIndex--;
    nextPicIndex--;
    circleIndex--;
}