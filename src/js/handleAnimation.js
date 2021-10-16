let id = null;
function animateBrand() {
    let counter = 0;
    const image = $('#kep')
    const cola = $('#cola');
    const fanta = $('#fanta');
    const doritos = $('#doritos');
    const chees = $('#cheeseb');

    id = setInterval(frame, 100);
    function frame() {
        //Cola
        if(counter > 210){
            $(image).css({'opacity' : '1', 'transform' : 'rotateZ(2deg)'});
            counter = 0;
        }
        else if(counter > 200){
            $(image).attr("src","src/img/Cola.png");
            $(image).css('transform' , 'rotateZ(-1deg)');
        }
        else if(counter > 190){
            $(image).css('opacity' , '0');
            $(chees).css({'backgroundPositionX' : '-80em', 'textShadow' : 'none'});
        }   

        //Sajtburger
        else if(counter > 160){
            $(image).css({'opacity' : '1' , 'transform' : 'rotateZ(-6deg)'});
            $(chees).css({'backgroundPositionX' : '0em', 'textShadow' : 'azure 2px 1px'});
        }       
        else if(counter > 150){
            $(image).attr("src","src/img/Cheeseburger.png");
            $(image).css('transform' , 'rotateZ(1deg)');
        }
        else if(counter > 140){
            $(image).css('opacity' , '0');
            $(doritos).css({'backgroundPositionX' : '-80em', 'textShadow' : 'none'});
        }

        //Doritos
        else if(counter > 110){
            $(image).css({'opacity' : '1' , 'transform' : 'rotateZ(8deg)'});
            $(doritos).css({'backgroundPositionX' : '0em', 'textShadow' : 'azure 2px 1px'});
        }
        else if(counter > 100){
            $(image).attr("src","src/img/Doritos.png");
            $(image).css('transform' , 'rotateZ(4deg)');
        }
        else if(counter > 90){
            $(image).css('opacity' , '0');
            $(fanta).css({'backgroundPositionX' : '-80em', 'textShadow' : 'none'});
        }

        //Fanta
        else if(counter > 60){
            $(image).css({'opacity' : '1' , 'transform' : 'rotateZ(-2deg)'});
            $(fanta).css({'backgroundPositionX' : '0em', 'textShadow' : 'azure 2px 1px'});
        }
        else if(counter > 50){
            $(image).attr("src","src/img/Fanta.png");
            $(image).css('transform' , 'rotateZ(8deg)');
        }
        else if(counter > 40) {
            $(image).css('opacity' , '0');
            $(cola).css({'backgroundPositionX' : '-80em', 'textShadow' : 'none'});
        }
        else if (counter > 10) {
           
        }
        else if(counter > 0) {
            $(cola).css({'backgroundPositionX' : '0em', 'textShadow' : 'azure 2px 1px'});
            $(image).css('transform' , 'rotateZ(-2deg)');
        }
        counter++;
    }
}

function stopAnimation() {
    clearInterval(id);
 }




