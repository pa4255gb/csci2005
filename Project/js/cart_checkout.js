var testA = window.localStorage.getItem(books[0].key);
var testB = window.localStorage.getItem(books[1].key);
var testC = window.localStorage.getItem(books[2].key);

window.addEventListener("load", function(){
  var cart;
  var pageTitle = document.title;
  var pageTable;

  console.log(testA + "," + testB + "," + testC);

  if(pageTitle == "Checkout"){
    console.log(pageTitle);
    cart = document.getElementById("checkoutTable");
    if(testA == null && testB == null && testC == null){
      pageTable = emptyTable();
    }else {
      pageTable = fillCheckoutTable();
    }
  }
  if(pageTitle == "Cart"){
    console.log(pageTitle);
    document.getElementById('emptyBtn').addEventListener("click", function(){
      window.localStorage.clear();
      window.location.reload();
    });
    cart = document.getElementById("cartTable");
    if(testA == null && testB == null && testC == null){
      pageTable = emptyTable();
    }else {
      pageTable = fillCartTable();
    }
  }
  console.log(pageTable);
  cart.innerHTML = pageTable;
});
function fillCartTable(){
  var tableHead = "<thead><tr><th>Book</th><th>Price</th></tr></thead>";
  var tableBody = "<tbody>";
  tableBody += tableRow();
  tableBody += "</tbody>";
  return tableHead + tableBody;
}
function fillCheckoutTable(){
  var tableHead = "<thead><tr><th>Book</th><th>Price</th></tr></thead>";
  var tableBody = "<tbody>";
  tableBody += tableRow();
  tableBody += totalRow();
  tableBody += "</tbody>";
  return tableHead + tableBody;
}
function tableRow(){
  var tRow = "<tr>";
  if(testA != null){
    tRow += getData(testA);
    tRow += "</tr>";
  }
  if(testB != null){
    tRow += getData(testB);
    tRow += "</tr>";
  }
  if(testC != null){
    tRow += getData(testC);
    tRow += "</tr>";
  }
  return tRow;
}
function getData(k){
  var tmp = k.split(",");
  var num = parseInt(tmp[1]);
  var rStr = "<td>" + tmp[0] + "</td><td>$" + num.toFixed(2); + "</td>";
  return rStr;
}
function totalRow(){
  var totalRow = "<tr><td>Total</td><td>$";
  var total = calcTotal();
  totalRow += total;
  totalRow += "</td></tr>";
  return totalRow;
}
function emptyTable(){
  var tableHead = "<thead><tr><th>Book</th><th>Price</th></tr></thead>";
  var tableBody = "<tbody>";
  tableBody += "<tr><td colspan=\"2\">Cart is empty</td></tr>";
  tableBody += "</tbody>";
  return tableHead + tableBody;
}
function calcTotal(){
  var tValue = 0;
  if(testA != null){
    var tmpA = testA.split(",");
    var numA = parseInt(tmpA[1]);
    console.log(Number.isInteger(numA));
    tValue += numA;
  }
  if(testB != null){
    var tmpB = testB.split(",");
    var numB = parseInt(tmpB[1]);
    console.log(Number.isInteger(numB));
    tValue += numB;
  }
  if(testC != null){
    var tmpC = testC.split(",");
    var numC = parseInt(tmpC[1]);
    console.log(Number.isInteger(numC));
    tValue += numC;
  }
  return tValue.toFixed(2);
}
