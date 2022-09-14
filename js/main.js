addEventListener('DOMContentLoaded', () => {
    setInterval(slide,6000);
    
  })
   
  
  
  function slide() {
      let idSlide = document.getElementsByClassName('carousel-slide');
      for (index of idSlide){
        switch (index.style.marginLeft){
            case "":
                index.style.marginLeft = "0%"
                break;
            case "0%":
                index.style.marginLeft = "-100%";
                break;
            // case "-100%":
            //     index.style.marginLeft = "-200%"
            //     break;
            // case "-200%":
            //     index.style.marginLeft = "-300%"
            //     break;
            case "-100%":
                index.style.marginLeft = "0%"
                break;
        }
      }

  }



function cambiarDerecha()   {
    let idSlide = document.getElementsByClassName('carousel-slide');
    for (index of idSlide){

        switch (index.style.marginLeft){
            case "":
                index.style.marginLeft = "-100%"
                break;
            case '0%':
                index.style.marginLeft = "-100%";
                break;

            // case "-100%":
            //     index.style.marginLeft = "-200%"
            //     break;
            // case "-200%":
            //     index.style.marginLeft = "-300%"
            //     break;
            case "-100%":
                index.style.marginLeft = "0%"
                break;

        }
    }
}


function cambiarIzquierda()   {
    let idSlide = document.getElementsByClassName('carousel-slide');
    for (index of idSlide){
        switch (index.style.marginLeft){
            case "":
                index.style.marginLeft = "-100%"
                break;
            case "0%":
                index.style.marginLeft = "-100%";
                break;
            // case "-100%":
            //     index.style.marginLeft = "0%"
            //     break;
            // case "-200%":
            //     index.style.marginLeft = "-100%"
            //     break;
            case "-100%":
                index.style.marginLeft = "0%"
                break;
        }
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

