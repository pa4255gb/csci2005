$(function(){
  var accountKey = window.localStorage.getItem("user");
  for(var i in authUsers){
    if(accountKey.toLowerCase() == authUsers[i].username.toLowerCase()){
      var tmp = "Welcome " + authUsers[i].firstName + " " + authUsers[i].lastName;
      $('#welcomeUser').text(tmp);
    }
  }
});
