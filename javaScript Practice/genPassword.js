function genPassword(length, includeLower, includeUpper, includeNumber, includeSympol){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLower ? lowercaseChars: "";
    allowedChars += includeUpper ? uppercaseChars: "";
    allowedChars += includeNumber ? numberChars: "";
    allowedChars += includeSymbol ? symbolChars: "";

    if(length <= 0){
        return `(Password must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character need to be selected)`;
    }

    for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}


const length = 10;
includeLower = true;
includeUpper = true;
includeNumber = true;
includeSymbol = true;

let password = genPassword(length, includeLower, includeUpper, includeNumber, includeSymbol);
console.log(`Generated Password: ${password}`);