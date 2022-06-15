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



  const navresponsive = () => {
    let buttonNav = document.getElementById("button-responsive");
    switch (buttonNav.style.left){
        case "":
            buttonNav.style.left = "0%"
            break;
        case "0%":
            buttonNav.style.left = "-100%";
            break;
        case "-100%":
            buttonNav.style.left = "0%";
            break;
    }
  } 
  

  
//Slide scroll page 

const scrollnav = () => $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
            
            window.location.hash = hash;
        });
      } 
    });

});
  
  
  
  
  

