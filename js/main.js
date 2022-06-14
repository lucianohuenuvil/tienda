addEventListener('DOMContentLoaded', () => {
    setInterval(slide,5000);
  })
   
  
  
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
  
  
  
  
  
  

