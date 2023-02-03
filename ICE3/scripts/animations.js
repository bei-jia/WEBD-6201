function fadeInOutTo(){
    // fade out
    $('.red-box').fadeOut(3000);

    // fade in
    $('.red-box').fadeIn(1500);

    // fade to
    $('.green-box').fadeTo(2000, .3);

    // fade to 
    $('.blue-box').fadeTo(1000, .5);


    // toggle diplay (went to none)
    $('.blue-box').fadeToggle();
    // toggle display (went to block,but rememberd the fadeTo()
    $('.blue-box').fadeToggle();

}

function hideElement(){
    $('.red-box').hide(1000);
    $('.red-box').show(2000);
    $('.red-box').slideUp(1000);
    $('.red-box').slideDown(2000);
    $('.red-box').slideToggle(1000);
    $('.red-box').slideToggle(2000);

}

function chainAnimations(){
    $('.red-box').fade(1000,.5);
    $('.green-box').delay(2000).fadeTo(1000,.5);
;
}

chainAnimations();
//hideElement();
//fadeInOutTo();