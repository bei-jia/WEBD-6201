/** 
 * Student Name:  Bei Jia
 * Student Id Number: 100834162
 * File:          formValidation.js
 * Date:          January 27,2023
 * Description:   validated the form as requested  
 */

console.log("JS script wired up");

/**
 * clicks on the Submit button, the form will output the user’s information to 
 * the console and after 3 seconds, the user will be redirected to the home page.
 * @param {*} e 
 */
function timedRedirect(e) {
    let contactName = document.getElementById('usernameInput').value;
    let contactEmail = document.getElementById('InputEmail1').value;
    let contactPhone = document.getElementById('inputPhone5').value;
    let contactMessage = document.getElementById('floatingTextarea2').value;
    //output the user’s information to the console
    console.log("Name: "+ contactName+ " / Phone Number: "+ contactPhone+ " / Email: " + contactEmail + " / Message: " + contactMessage);
    e.preventDefault();
    //after 3 seconds, the user will be redirected to the home page
    setTimeout(function () {
        window.location.href = "index.html";
     }, 3000)
 }

 // Clicking the Submit Button will start a timer. After 3 seconds, the user will be redirected back to the Home Page. 
let submitButton = document.getElementById('submit-button');
if (submitButton) {
    submitButton.addEventListener('click', timedRedirect, false);
}

// set some welcome text for the home page
let homeText = document.getElementById('homeText');
//homeText.style.fontWeight = 'bold';
if(homeText) {
    homeText.style.fontSize = '20px';
    homeText.style.fontWeight = 'bold';
    homeText.style.color = '#003459';  
    homeText.innerHTML = '<br />'+'Hello, my name is Bei Jia, and I am a programmer. Welcome to my website!'+
    '<br />'+' I share some of my favorite media in my Interests, and I will add more often.'+
    '<br />'+' Or come to Services and see what I can offer you!';    
}

// set background image for the home page
let homeBackground = document.getElementById('body');
if(homeBackground) {
    homeBackground.style.backgroundImage = 'url(images/computer.png)';

}

/**
 * Injects all text parts of the products page
 */
// Get the div for the first piece of media recommended
let productText1 = document.getElementById('product-jibaro');
// create the tag p of the first piece of media recommended
let productContent1=document.createElement('p');
// create the text content of the first piece of media recommended
let newProductText1 = document.createTextNode('1. This is one of my favorite animated films from last year, from love death and robots season 3 jibaro. It\'s hard to imagine that many of these backgrounds and scenes were drawn rather than modeled. Its amazing details, colors, sound effects, action design, and so on are all fascinating, not to mention the stories about humans and siren and the metaphors about greed, desire and so on that it contains are thought-provoking. Here are a few of them, but the brilliance and magnificence it is fully revealed.');
productContent1.appendChild(newProductText1);
// insert the new element in the div 
if(productText1) {
productText1.insertBefore(productContent1, productText1.firstChild);
}


// Get the div for the second piece of media recommended
let productText2 = document.getElementById('product-king');
// create the tag p of the second piece of media recommended
let productContent2=document.createElement('p');
// create the text content of the second piece of media recommended
let newProductText2 = document.createTextNode('2. I\'ve been learning a bit about the history and music of blues, and my favourite blues artist is B.B. King, one of the greatest blues musicians.His songs and music are full of emotions, smooth and natural,  which makes me feel warm and relaxed. Appreciating his works always makes me feel that I am listening to an elder or  warm friend telling their mood and past stories, and I really enjoy the feeling of being immersed in them.  Let\'s enjoy this moment together.');
productContent2.appendChild(newProductText2);
// insert the new element in the third div 
if(productText2) {
productText2.insertBefore(productContent2, productText2.firstChild);
}

// Get the div for the third piece of media recommended
let productText3 = document.getElementById('product-pipa');
// create the tag p of the third piece of media recommended
let productContent3=document.createElement('p');
// create the text content of the third piece of media recommended
let newProductText3 = document.createTextNode('3. This is a piece of pure music played by the traditional Chinese instrument Pipa - Pipa language. Whenever I have insomnia late at night, I turn on this music. It makes me relax and easily enter meditation.');
productContent3.appendChild(newProductText3);
// insert the new element in the third div 
if(productText3) {
productText3.insertBefore(productContent3, productText3.firstChild);
}


/**
 * Injects all text parts of the Servises.html page
 */
// Get the li for the first service 
let servicesText1 = document.getElementById('web-develop');
// create the tag p of the first service 
let servicesContent1=document.createElement('p');
// create the text content of the first service 
let newServicesText1 = document.createTextNode('Currently I can provide web development through HTML, CSS,.NET, PHP, JavaScript.For example, personal website development, user registration, client management <br/>	and other aspects of web development.');
servicesContent1.appendChild(newServicesText1);
// insert the new element in the li 
if(servicesText1) {
    servicesText1.insertBefore(servicesContent1, servicesText1.firstChild);
}


// Get the li for the second service 
let servicesText2 = document.getElementById('back-end');
// create the tag p of the second service 
let servicesContent2=document.createElement('p');
// create the text content of the second service 
let newServicesText2 = document.createTextNode('Customized back-end development services through C++, C#, Java, etc');
servicesContent2.appendChild(newServicesText2);
// insert the new element in the third li 
if(servicesText2) {
    servicesText2.insertBefore(servicesContent2, servicesText2.firstChild);
}

// Get the li for the third service 
let servicesText3 = document.getElementById('tester');
// create the tag p of the third service 
let servicesContent3=document.createElement('p');
// create the text content of the third service 
let newServicesText3 = document.createTextNode('Provide web testing services. 1. According to product development plans and testing requirements, prepare test schemes, develop test plans and test cases, organize and implement tests, control test progress, and adjust test plans; 2. Follow up and report the progress of the test work, write the test summary report, analyze the missing problems in the test;');
servicesContent3.appendChild(newServicesText3);
// insert the new element in the third li
if(servicesText3) {
    servicesText3.insertBefore(servicesContent3, servicesText3.firstChild);
}


/**
 * Injects all text parts of the about us page
 */
// Get the li for the first about us 

let aboutText1 = document.getElementById('painting');
// create the tag p of the first about us 
let aboutContent1=document.createElement('p');
// create the text content of the first about us 
let newAboutText1 = document.createTextNode('One of my hobbies is painting. It\'s a good way to reduce stress and improve concentration. I enjoy the pleasure of painting, and I am very happy to give them to my friends as birthday or holiday gifts, and they will happily hang my gifts on the wall or put them on the table. For example, a portrait I gave to a friend four years ago still hangs in her living room. But because of work and study I have little time to create new works now');
aboutContent1.appendChild(newAboutText1);
// insert the new element in the li 
if(aboutText1) {
    aboutText1.insertBefore(aboutContent1, aboutText1.firstChild);
}


// Get the li for the second about us  
let aboutText2 = document.getElementById('planting');
// create the tag p of the second about us  
let aboutContent2=document.createElement('p');
// create the text content of the second about us 
let newAboutText2 = document.createTextNode('At the same time, I like gardening very much, which also makes me feel relaxed and enjoy. And it\'s a great topic of conversation to have with my neighbors, we often exchange gardening tips and flower and vegetable seeds. During the harvest season,I often give my vegetables and fruits to our neighbors, and friends.');
aboutContent2.appendChild(newAboutText2);
// insert the new element in the second li 
if(aboutText2) {
    aboutText2.insertBefore(aboutContent2, aboutText2.firstChild);
}

// Get the li for the third about us  
let aboutText3 = document.getElementById('me');
// create the tag p of the third about us  
let aboutContent3=document.createElement('p');
// create the text content of the third about us  
let newAboutText3 = document.createTextNode('This is me :)');
aboutContent3.appendChild(newAboutText3);
// insert the new element in the third li
if(aboutText3) {
    aboutText3.insertBefore(aboutContent3, aboutText3.firstChild);
}




// Get the current year
let currentYear = new Date().getFullYear();

// set the copyright statement with the current year
let copyright = document.getElementById('copyright');
copyright.innerHTML = "Copyright &copy; " + currentYear;

// add another link to the Navbar above named Human Resources, that 
// sits between About Us and Contact Us.
let contact = document.querySelector('#contact');
//Create a new element
let newItem = document.createElement('li');
let ul = document.querySelector('ul');
//Add content for the new element
newItem.className = 'nav-item';
newItem.innerHTML= '<a class="nav-link" href="#"><i class="fa-solid fa-handshake"></i> Human Resources</a>';
// Insert the new element into ul
ul.insertBefore(newItem, contact);

// change the Products link found in the Navbar above to Interests
let products = document.querySelector('#products');
products.innerHTML = '<i class="fa-brands fa-product-hunt"></i></i> Interests';
