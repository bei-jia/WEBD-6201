console.log('selectors.js loaded');

function highlight(element) {
    element.css('background-color', '#fcf30040');

}

function cssSelectors() {
    // using paragraphs
    $('p').css('background-color', '#2a9d8f');

    // using classes
    $('.red-box').css('background-color', '#fcf30040');

    // using ids
    $('#list').css('background-color', '#2a9d8f');

    $('h1,h2').css('background-color', '#3a86ff');
    $('li:first').css('background-color', 'red');

}

function traversingTheDOM() {
    $('#list').find('li').css('background-color', '#3a86ff');

    // all parents of the ul
    $('#list').parents('body').css('background-color', '#3a86ff');

    // direct parent
    $('#list').parent().css('font-size', '20px');

    // .siblings('div') <- sibling divs of element

    // prev & next
    $('#list').prev().css('background-color', '#3a86ff');
    $('#list').next().css('background-color', '#3a86ff');
    $('#list').prev().next().css('background-color', '#3a86ff');

}

function filter(){
    //$('#list').find('li').filter(':even').css('background-color', '#3a86ff');

    // $('#list').filter(function(index){
    //     return index % 3===0;   
    // }).css('background-color', "#219ebc");

    // highlighting
    let items=$('#list').find('li');
    hightlight(items);
}

function assingReplacingRemoving(){
    $('ul ul:first').append($("<li>I'm going to be the last item.<li>"));

    $("<li>Now I'm going to be the last item.</li>").appendTo('ul ul:first');
    
    // insert as first child
    $('ul ul:first').prepend("<li>I'm going to be the first child.</li>");

    // reverse the syntax
    $("<li>Now I'm first!!</li>").prependTo('ul ul:first');

    // after
    $('.red-box').before("<div class='red-box'>Another Red Box!</div>");

    // sample text 
    let text1="Last night, Darth Vader came down from planet Vulcan.";

    // replace with new element
    $('li').replaceWith(`<li>${text1}</li>`);

    // replace all
    $("<div class='green-box'>Created Green Box</div>").replaceAll(".red-box");

    // remove
    $('li').remove();

    // detaching
    let detachedItems= $('li').detach()

    $('#content').append(detachedItems);

}


//assingReplacingRemoving();

//filter();

traversingTheDOM();
//cssSelectors();

