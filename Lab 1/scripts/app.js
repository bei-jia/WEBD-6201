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
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;
    //output the user’s information to the console
    console.log("Email: " + contactEmail + " Password: " + contactPassword);
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
// set an interesting background image for the home page
let homeBody = document.getElementById('body');


homeBody.style.backgroundImage = 'url(./images/computer.png)';








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
