window.addEventListener("load", function(){
  document.getElementById("indexPageBtn").addEventListener("click", goToInstructorPage);
});

function goToInstructorPage(){
  var page = document.getElementById('instructorOptions').value;
  if(page != 'placeholder'){
    window.location = page;
  }
}
