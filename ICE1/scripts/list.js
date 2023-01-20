// ADDING ITEMS TO START AND END OF LIST
let list = document.getElementsByTagName('ul')[0];// Get the <ul> element

// ADD NEW ITEM TO END OF LIST
let newLastItem = document.createElement('li');// Create element
// Create text node
let newTextLast = document.createTextNode('half and half cream');
newLastItem.appendChild(newTextLast);// Add text node to element
list.appendChild(newLastItem);// Add element end of list

// ADD NEW ITEM START OF LIST
let newFirstItem = document.createElement('li');
let newTextFirst = document.createTextNode('lettuce');// Create element
newFirstItem.appendChild(newTextFirst);// Create text node
list.insertBefore(newFirstItem, list.firstChild);// Add text node to element
// Add element to list
let listItems = document.getElementsByTagName('li');// All <li> elements
// ADD A CLASS OF COOL TO ALL LIST ITEMS
let i;// Counter variable
for (i=0; i<listItems.length; i++){
    listItems[i].className = 'cool';   
}// Loop through elements
// Change class to cool

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let heading=document.querySelector('h2');// h2 element
let headingText = heading.firstChild.nodeValue;
// h2 text
let totalItems = listItems.length;
// No. of <li> elements
let newHeading=headingText+'<span>' + totalItems + '</span>';
// Content
heading.innerHTML = newHeading;// Update h2 using innerHTML (not textContent) because it contains markup