/**
 * validateFirst - validated user first name entry through registration form
 * @param {string} first
 * @returns html element for error message
 */
export function validateFirst(first) {

    if (first.length < 2) {

        return "<div>You have entered a first name that is too short.</div>"

    }
    else {
        return "<div></div>";

    }
};

/**
 * validateLast- validated user last name entry through registration form
 * @param {string} last
 * @returns html element for error message
 */
export function validateLast(last) {
    if (last.length < 2) {
        return "<div>You have entered a last name that is too short.</div>"
    }
    else {
        return "<div></div>";
    }
};


/**
 * validateUsername- validated user username entry through registration form
 * @param {string} username
 * @returns html element for error message
 */
export function validateUsername(username) {
if (username.length < 2) {
        return "<div>You have entered a username that is too short.</div>"
    }
    else {
        return "<div></div>" ;
    }
};

/**
 * validateEmail- validated user email entry through registration form
 * @param {string} email
 * @returns html element for error message
 */
export function validateEmail(email) {
if (email.length < 2) {
        return "<div>You have entered a last name that is too short.</div>"
    }
    else {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    let emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

    //return true if the email address is valid 
    let emailBool= !!email && typeof email=== 'string'
        && email.match(emailRegex);

        // if the email address is valid 
        if(emailBool) {
            return "<div></div>" ;
        }else{
            return "<div>Please enter a valid email address.</div>"
        }
}
};


/**
 * validatePassword- validated user password entries 1 and 2 are the same through ristration form
 * @param {string} passord1
 * @param {string} password2
 * @returns html element for error message
 */
export function validatePassword(pass1, pass2) {
    if (pass1 == pass2) {
        return "<div></div>" ;
    } else {
        return "<div>Your passwords do not match.</div>"
    }

};


