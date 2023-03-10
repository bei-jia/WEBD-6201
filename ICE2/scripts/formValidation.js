/** 
 * Student Name:  Bei Jia
 * File:          formValidation.js
 * Date:          January 27,2023
 * Description:   validated the form as requested  
 */
//console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
// function ValidateEmailAddressSimple(emailString) {
//     console.log('in ValidateEmailAddress');

//     // check for @ sign
//     let atSymbol = emailString.indexOf('@');
//     if (atSymbol < 1) return false;

//     let dot = emailString.indexOf('.');
//     if (dot <= atSymbol + 2) return false;

//     // check that the dot is not at the end
//     if (dot === emailString.length - 1) return false;

//     return true;
// }

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function ValidateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    let emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

    //return true if the email address is valid - how to use regex
    return !!emailString && typeof emailString === 'string'
        && emailString.match(emailRegex);
}

// the function to verify that the user's name is valid
function validateUserName() {
    console.log('in validateUserName');
    let userName = document.getElementById('usernameInput').value;
    let userNameError = document.getElementById('usernameError');
    let usernameRegex = /^\S*$/;
    // If the entered user name is less than 5 or greater than 20, highlighted text in red is displayed indicating an error message
    if (userName.length < 5 || userName.length > 20) {

        userNameError.innerHTML = 'Names should be between 5 and 20 characters long';
        userNameError.style.color = 'red';

    }
    // Use red highlighted text to indicate that there are no Spaces between user names
    else if (!userName.match(usernameRegex)) {

        userNameError.innerHTML = "Username cannot contain spaces";
        userNameError.style.color = 'red';

    }
    else {
        userNameError.innerHTML = '';
    }

}

// the function to clear the error messages
function clearErrorMessages() {
    let errorMessage = document.getElementsByClassName('errorMessage');

    // Clear error messages when click the reset button
    for (let i = 0; i < errorMessage.length; i++) {
        errorMessage[i].innerHTML = "";
        errorMessage[i].style.color = "";
    }

}


//TODO:
// Make all fields required - DONE
// Add a pattern attribute in the telephone element (HTML) - Done
// Ensure the password is redacted into dots on screen when typed in - DONE
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - 
// cite source and test it!)- Done
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?) - DONE
// Validate the username when the form is submitted - DONE

// Clear any additional error message and highlighting when the form is reset - DONE
// COMMENT EVERYTHING :D
// Pop your .js file into the meeting chat when you're done and we'll have a look at some examples! (Feel free to leave your name off)

/*
 * Validate the username
* @param {string} emailString
*/
let submittButton = document.getElementById('submit-reg-form');
if (submittButton) {
    submittButton.addEventListener('click', function (e) {
        e.preventDefault();
        validateUserName()
    }, false);

};

/*
 * click the reset button, the error message is cleared
* @param {string} emailString
*/
let resetButton = document.getElementById('reset-reg-form');
if (resetButton) {
    resetButton.addEventListener('click', function (e) {

        clearErrorMessages();
    });

};
