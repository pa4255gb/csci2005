//Suggestions for logIn - Shelby
//Validate username and password >>> data.js
//Go to myAccount.html if creds match >>> use window.location.assign();
//Put submitted username into local storage
//if window.localStorage.getItem("user") != null
//bypass logIn.html and go to myAccount.html
//Code to populate myAccount.html with data from submitted user >>> might want to put this in a
//separate js file.


window.addEventListener('submit', testLogin);

function testLogin(e){
e.preventDefault();
var authUsers = [
  {
    "username": "shelby",
    "password": "medlock"
  },
  {
    "username": "tom",
    "password": "mcdonald"
  },
  {
    "username": "keith",
    "password": "perlman"
  }
]

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

for(i =0; i < authUsers.length; i++) {
      if(username.toLowerCase() == authUsers[i].username && password.toLowerCase() == authUsers[i].password) {
       alert(username + " Is logged in!")
      window.location.href = "accountReg.html";
       return
      }
   }
   alert("You have entered an incorrect user name or password")
}

 