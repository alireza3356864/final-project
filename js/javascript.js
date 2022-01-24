function showmenu(){
    var menu=document.getElementById("menu");
    if(menu.className=="header-menu-burger"){
        menu.className+=" show"
    }else{
        menu.className="header-menu-burger"
    }
    var menuavas=document.getElementById('menu-avaz');
    if(menuavas.className=="fa fa-bars"){
        menuavas.className="far fa-arrow-alt-circle-right";
    }else{
        menuavas.className="fa fa-bars"; 
    }
}
var searchicon=document.getElementById("search-icon");
var searchinput=document.getElementById("search-input");
searchicon.addEventListener("click",function(){
    searchinput.classList.toggle("hidden");
});
var serachbtn=document.getElementById("search-btn");
var inputs=document.getElementsByClassName("inputnull");
serachbtn.addEventListener("click",function(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
})


var indexslid = 0;
showslide();

function showslide() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display='none';
  }

  for(i=0;i<dots.length;i++){
    dots[i].className=dots[i].className.replace(" active","")
  }



  indexslid++;
  if(indexslid>slides.length){
      indexslid=1
  }

  slides[indexslid-1].style.display="block";
  dots[indexslid-1].className+=" active";
  setTimeout(showslide,2000);
}
var btnemail=document.getElementById("btn-email");
var inpemail=document.getElementById("inp-email");
btnemail.addEventListener("click",function(){
    inpemail.value="";
})