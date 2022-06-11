//window.onload.setTimeout(slide, 2000);

//setInterval(slide,1000);

addEventListener('DOMContentLoaded', () => {
    setInterval(slide,5000);
  })
  
  
  window.onscroll = function() {myFunction()};
  
  
  
  
  function slide() {
      let idSlide = document.getElementById("slide");
      switch (idSlide.style.marginLeft){
        case "":
            idSlide.style.marginLeft = "0%"
            break;
        case "0%":
            idSlide.style.marginLeft = "-100%";
            break;
        case "-100%":
            idSlide.style.marginLeft = "-200%"
            break;
        case "-200%":
            idSlide.style.marginLeft = "-300%"
            break;
        case "-300%":
            idSlide.style.marginLeft = "0%"
            break;
    }
  }
  
  
  
  
  
  
  function myFunction() {
    var navbar = document.getElementById("nav");
    var links = document.getElementsByClassName("link");
    var change = document.getElementById("change");
  
  
    var change_navbar = change.offsetTop;
  
    if (window.pageYOffset >= 300) {
      navbar.style.backgroundColor = "white";
      navbar.style.transition = "all .5s";
      navbar.style.boxShadow = "1px 1px 8px #888888"
      for (let index = 0; index < links.length; index ++){
        links[index].style.color = "#898989";
      }
      
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "none"
      for (let index = 0; index < links.length; index ++){
        links[index].style.color = "white";
      }
  
    }
  }
  
  