

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



}
