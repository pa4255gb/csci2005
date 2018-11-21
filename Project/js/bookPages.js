window.addEventListener("load", function(){
  document.getElementById("newButton").addEventListener("click", addNewToCart);
  document.getElementById("usedButton").addEventListener("click", addUsedToCart);
  console.log(document.title);
});

function addNewToCart(){
  var pageTitle = document.title;
  var bookTitle = getBookTitle(pageTitle);
  var tmp = bookTitle;
  for(var i=0; i<books.length; i++){
    if(bookTitle == books[i].title){
      tmp += "," + books[i].newPrice;
      window.localStorage.setItem(books[i].key, tmp);
    }
  }
}
function addUsedToCart(){
  var pageTitle = document.title;
  var bookTitle = getBookTitle(pageTitle);
  var tmp = bookTitle;
  for(var i=0; i<books.length; i++){
    if(bookTitle == books[i].title){
      tmp += "," + books[i].usedPrice;
      window.localStorage.setItem(books[i].key, tmp);
    }
  }
}
function getBookTitle(pageTitle){
  if(pageTitle == pageTitles[0]){
    return books[0].title;
  }
  if(pageTitle == pageTitles[1]){
    return books[1].title;
  }
  if(pageTitle == pageTitles[2]){
    return books[2].title;
  }
}
