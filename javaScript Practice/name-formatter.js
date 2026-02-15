let userName = window.prompt("What is your name?");

// userName = userName.trim();

// let firstLetter = userName.charAt(0);
// firstLetter = firstLetter.toUpperCase();

// let balanceLetter = userName.slice(1);
// balanceLetter = balanceLetter.toLowerCase();

// userName = firstLetter + balanceLetter;

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);
