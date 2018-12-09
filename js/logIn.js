window.addEventListener('submit', testLogin);

function testLogin(e){
  //e.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for(var i=0; i < authUsers.length; i++) {
        if(username.toLowerCase() == authUsers[i].username && password.toLowerCase() == authUsers[i].password) {
          window.localStorage.setItem("user", username);
          alert(username + " Is logged in!");
          window.location.assign("myAccount.html");
          return
        }
      }
      alert("You have entered an incorrect user name or password");
}
