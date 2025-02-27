


function generateUniqueID1(firstName, lastName) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string' || firstName === '' || lastName === '') {
        return null;
    }

    let firstLetter = firstName[0].toLowerCase();
    let lastNameLower = '';

    // Convert lastName to lowercase manually
    for (let i = 0; i < lastName.length; i++) {
        let char = lastName[i];
        if (char >= 'A' && char <= 'Z') {
            lastNameLower += String.fromCharCode(char.charCodeAt(0) + 32);
        } else {
            lastNameLower += char;
        }
    }

    let uniqueString = '';
    let uuid = uuidv4(); // Generate a UUID
    let count = 0;

    // Extract first 8 alphanumeric characters manually
    for (let i = 0; i < uuid.length && count < 8; i++) {
        let char = uuid[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            uniqueString += char;
            count++;
        }
    }

    return firstLetter + lastNameLower + uniqueString;
}

/**
 * Adds an account to users.txt if valid.
 *
 * @param {Array} userInfo - [firstName, lastName, email, age]
 * @returns {boolean} Returns true if saved, false otherwise.
 */
function addAccount(userInfo) {

    








    if (!Array.isArray(userInfo) || userInfo.length !== 4) {
        return false;
    }

    let firstName = userInfo[0];
    let lastName = userInfo[1];
    let email = userInfo[2];
    let age = userInfo[3];

    // Check if firstName, lastName, and email are valid non-empty strings
    if (typeof firstName !== 'string' || firstName === '') return false;
    if (typeof lastName !== 'string' || lastName === '') return false;
    if (typeof email !== 'string' || email === '' || !validator.isEmail(email)) return false;
    if (typeof age !== 'number' || age < 18) return false;

    let uniqueID = generateUniqueID(firstName, lastName);
    if (!uniqueID) return false;

    let userData = firstName + ',' + lastName + ',' + email + ',' + age + ',' + uniqueID + '\n';

    try {
        fs.appendFileSync('users.txt', userData, 'utf8');
        return true;
    } catch (err) {
        return false;
    }
}

// Export functions
module.exports = { generateUniqueID, addAccount };






const { generateUniqueID, addAccount } = require('./index');

// Test generateUniqueID()
console.log("Testing generateUniqueID():");
console.log(generateUniqueID("Alan", "Turing")); // Expected format: aturingXXXXXXXX

// Test addAccount()
console.log("\nTesting addAccount():");

// Valid case
console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25])); // Expected: true

// Invalid cases
console.log(addAccount(["", "Berners-Lee", "tim@w3c.com", 25])); // Expected: false
console.log(addAccount(["Tim", "", "tim@w3c.com", 25])); // Expected: false
console.log(addAccount(["Tim", "Berners-Lee", "invalid-email", 25])); // Expected: false
console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 17])); // Expected: false
















