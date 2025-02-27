const { generateUniqueID, addAccount } = require('./index');



console.log(generateUniqueID("Alan", "Turing")); // Expected format: aturing + alphanumeric random 8 chars

// more test case
console.log(generateUniqueID("Jeoff", "Conde"));
console.log(generateUniqueID("Justin", "Joaquin"));
console.log(generateUniqueID("Brat", "Pinya"));



console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58])); // true

// more test case
console.log(addAccount(["", "Conde", "Conde@w3c.com", 23])); // false
console.log(addAccount(["Jeoff", "", "jeoffjnc@w3c.com", 25])); // false
console.log(addAccount(["Jeoff", "Conde", "invalidemail", 25]));  // false
console.log(addAccount(["Jeoff", "Conde", "jeoffcuteconde@w3c.com", 17])); // false
console.log(addAccount(["Jeoff", "Conde", "jeoffcutecondew3c.com", 18])); // false





