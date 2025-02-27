

const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');


/*
- first nam and last name should be string
- first letter of the first name is lowercase
- last name is converted to towercase
- unique alphanumeric string should be length 8
- uuid package to get unique alphanumeric string (trim if need)
*/



function generateUniqueID(fName, lName) {
    
    // - first nam and last name should be string
    if (typeof fName !== 'string' || typeof lName !== 'string' || fName === '' || lName === '') {
        console.log("Error since the given name is not a string or returning an empty string");
        return null;
    } 

    // - first letter of the first name is lowercase
    let modified_fName = fName;
    modified_fName = modified_fName[0].toLowerCase();

    // - last name is converted to towercase
    let modified_lName = lName;
    modified_lName = lName.toLowerCase();

    
    // - unique alphanumeric string should be length 8
    let uniqueString = '';
    let uuid = uuidv4(); // Generate a UUID
    let count = 0;

    for (let i = 0; i < uuid.length && count < 8; i++) {
        // get 8
        let char = uuid[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            // ang ilalagay lang is alphanumeric
            uniqueString += char; // lagay sa unique string ung char
            count++; // counter kung ilan na ung nilagay
        }
    }

    let uniqueId = modified_fName[0] + modified_lName + uniqueString; // combine

    return uniqueId;

}

function addAccount(info) {
    

    if (!Array.isArray(info) || info.length !== 4) {
        // kulang
        return false;
    }

    // gets the corresponding index of the list
    let fName = info[0];
    let lName = info[1];
    let email = info[2];
    let age = info[3];


    if (typeof fName !== "string" || typeof lName !== "string" || typeof email !== "string" || typeof age !== "number") {
        console.log("It does not satisfy one or more typeof.");
        return false;
    }

    if (fName === '' || lName === '' || email === '') {
        console.log("Empty string");
        return false;
    }

    if (age < 18) {
        console.log("Age is not valid");
        return false;
    }

    if (!validator.isEmail(email)) {
        console.log("Email is not valid");
        return false;
    }


    let uniqueID = generateUniqueID(fName, lName);
    if (!uniqueID) {
        return false;
    }

    let userData = fName + ',' + lName + ',' + email + ',' + age + ',' + uniqueID + "\n";
    // for space
    // combine it into the variable userData for the users.txt

    // lab handout reference: https://nodejs.org/api/fs.html#fsappendfilesyncpath-data-options
    try {
        fs.appendFileSync('users.txt', userData, 'utf8');
        console.log('The "data to append" was appended to file!');
        return true;
    } catch (err) {
        return false;
    }


}


// https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/
module.exports = { generateUniqueID, addAccount };