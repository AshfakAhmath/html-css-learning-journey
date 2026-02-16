let loggedIn = false;
let userName;
let password;

while(!loggedIn){
    userName = window.prompt("What is your user name?");
    password = window.prompt("What is your password?");

    if(userName === "myUserName" && password === "myPassword"){
        loggedIn = true;
        console.log("You are login!");
    }
    else{
        console.log("Username or password incorrect! Please try again");
    }
}