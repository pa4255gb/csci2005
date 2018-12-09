$(function(){
  $("#loginBtn").on("click", function(){
    var username = $("#username").val();
    var password = $("#password").val();
    var token = 1;

    //for testing
    //console.log("first:" + token);
    //console.log("username:" + username);
    //console.log("password:" + password);

    for(var i in authUsers){
      //console.log('authUsers for loop');
      if(username.toLowerCase() == authUsers[i].username && password.toLowerCase() == authUsers[i].password) {
        token = 0;

        //for testing
        //console.log("token:" + token);

        window.localStorage.setItem("user", username);
        alert(username + " Is logged in!");
        window.location.assign("myAccount.html");
      }
    }
    if(token == 1){
      alert("You have entered an incorrect user name or password");
      document.getElementById("logInForm").reset();
    }
  });
});
