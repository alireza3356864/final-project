var input = document.getElementById("userInput");
var enterbtn = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByName("li");

enterbtn.addEventListener("click", addlistclick);
input.addEventListener("keypress", addlistkeypress);

function inputlength() {
  return input.value.length;
}
function addlistclick() {
  if (inputlength() > 0) {
    crateelemen();
  }
}
// event kelid press shodas ke grefte mishvad
function addlistkeypress(event) {
  if (inputlength() > 0 && event.which === 13) {
    crateelemen();
  }
}


function crateelemen() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);


  input.value = "";

  function crossout() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossout);

  var btndelete = document.createElement("button");
  btndelete.appendChild(document.createTextNode(""));

  li.appendChild(btndelete);
  btndelete.className = "fas fa-calendar-times btnd";

  btndelete.addEventListener("click", function () {
    li.classList.add("delete");
  });
}
