


let htmlNavbar = `  
    <a class="link" href="/"> <img src="/img/logo.png" alt=""></a>
    <a class="link links-nav" href="/#nosotros">Nosotros</a>

    <li class=" nav-item dropdown">
        <a class="link links-nav dropdown-toggle" href="#" role="button" data-toggle="dropdown">Colegios</a>
        <div class="links-nav dropdown-menu">
            <a class="dropdown-item" href="/pages/colegio-las-condes ">Colegio Las Condes</a>
            <a class="dropdown-item"  href="/pages/colegio-coyancura">Colegio Coyancura</a>
            <a class="dropdown-item" href="/pages/colegio-nuestra-senora-del-rosario ">Colegio Nuestra Señora del Rosario</a>
            <a class="dropdown-item" href="/pages/colegio-leonardo-da-vinci ">Colegio Leonardo Da Vinci</a>
            <a class="dropdown-item" href="/pages/colegio-san-francisco ">Colegio San Francisco Técnico Profesional</a>
            <a class="dropdown-item"  href="/pages/colegio-simon-bolivar">Liceo Bicentenario Simón Bolivar</a>
            <a class="dropdown-item" href="/pages/colegio-san-francisco-del-alba ">Colegio San Francisco del Alba</a>
        </div>
    </li>      


    <li class=" nav-item dropdown">
        <a class="link links-nav dropdown-toggle" href="#" role="button" data-toggle="dropdown">
        Categorías
        </a>
        <div class="links-nav dropdown-menu">
            <a class="dropdown-item" href="/pages/colegios">Colegios</a>
            <a class="dropdown-item"  href="/pages/no-disponible">Polerones Generacionales</a>
            <a class="dropdown-item"  href="/pages/no-disponible">Vestuario Deportivo</a>
            <a class="dropdown-item"  href="/pages/no-disponible">Vestuario Corporativo</a>
            <a class="dropdown-item"  href="/pages/no-disponible">Mercancía</a>
            
        </div>
    </li>

    
    <a class="link links-nav" href="/#contacto">Contacto</a>
    <a class="link links-nav" href="/#ubicacion">Ubicación</a>


    <div class="icon-responsive">
        <a onclick="navresponsive()"> <i  class="fas fa-bars"></i> </a>
    </div>
            
    <div id="button-responsive" class="navbar-responsive showmenu">
        <a class="link responsive-link" href="/#nosotros">Nosotros</a>
        <a class="link responsive-link" href="/pages/colegios ">Colegios</a>
        <a class="link responsive-link" href="/pages/no-disponible ">Ropa Deportiva</a>
        <a class="link responsive-link" href="/pages/no-disponible ">Mercancía</a>
        <a class="link responsive-link" href="/pages/no-disponible ">Uniformes Genéricos</a>
        <a class="link responsive-link" href="/#ubicacion">Ubicación</a>
        <a class="link responsive-link" href="/#contacto">Contacto</a>
    </div>  `






let htmlMap = `
    <div id="ubicacion" class="container">
        <h2 class="heading-form">¿Dónde estamos ubicados?</h2>
        <div class="container-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5668970826378!2d-70.56677258424588!3d-33.40846180274575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cedd0fa0de87%3A0x8fddeef43d721a48!2sAv.%20Apoquindo%206415%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1655149171940!5m2!1ses!2scl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="info-map">
            <h3 class="heading-form" >¿Cómo llegar?</h3>
            <ul>
                <li><p>Si vienes en transporte público, nos encontramos cerca de metro Manquehue!</p></li>
                <li><p>Si vienes en vehículo, puedes estacionar directamente en av. apoquindo 6415, siempre y cuando haya disponibilidad</p></li>
                <li><p>También puedes estacionar al lado del estadio Italiano, ubicado en la calle "Esteban Dell'orto 6579"</p></li>
            </ul>
        </div>


        <div class="help-container">
            <div class="help-est">
                <div class="text-est">
                    <p>Estacionamiento Av. Apoquindo 6415</p>
                </div>
                <img class="img-est" src="/img/estacionamiento1.webp" alt="estacionamiento de la sucursal" title="estacionamiento local">
            </div>

            <div class="help-est">
                <div class="text-est">
                    <p>Estacionamiento Estadio Italiano</p>
                </div>
                <img class="img-est"src="/img/estacionamiento2.webp" alt="estacionamiento del estadio italiano" title="estacionamiento del estadio">
            <div>          
        </div>     
    </div>  `






let htmlInformation = `
    <div class="container">
        <div class="footer-container">
            <div class="box-footer">
                <i class="fas fa-phone"></i>
                <h3>Teléfonos</h3>
                <p> +569 6359 3710</p>
                <p> 2 3224 7874</p>
            </div>
        
            <div class="box-footer">
                <i class="fas fa-map-marker-alt"></i>
                <h3>Dirección</h3>
                <p>Av. Apoquindo 6415, Las Condes (Galería Rampa de las Flores) - Local 111 - piso 4 </p>
            </div>
        
            <div class="box-footer">
                <i class="fas fa-clock"></i>
                <h3>Horarios de atención</h3>
                <p>L / V: 11:00am a 19:00pm</p>
                <p>S: 11:00am a 14:00 pm</p>
            </div>
        
            <div class="box-footer">
                <i class="fas fa-envelope"></i>
                <h3>Correo</h3>
                <p>styloschool@gmail.com</p>
            </div>
        </div>
    </div>
`



let htmlFooter = `

    <div class="container text-center text-md-start pt-5">
        <div class="row mt-3 text-footer">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4"> <i class="me-3"> <img src="/img/Stylos icon.png" alt="" height="25px" ></i>Styloschool </h6>
                <p> Atrévete y marca la diferencia </p>
                <p> Tu imagen en nuestras manos! </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">Categorías</h6>
                <p><a href="/pages/colegios " class="text-reset">Uniformes de colegio</a></p>
                <p><a href="/pages/no-disponible " class="text-reset">Vestuario corporativo</a></p>
                <p><a href="/pages/no-disponible " class="text-reset">Vestuario deportivo</a></p>
                <p><a href="/pages/no-disponible " class="text-reset">Uniformes genéricos</a> </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4"> -</h6>
                <p> <a href="/pages/no-disponible " class="text-reset">Merchandising</a></p>
                <p> <a href="/pages/no-disponible " class="text-reset">Otros</a> </p>
                <p><a href="#contacto" class="text-reset">Contacto</a></p>
                <p> <a href="#ubicacion" class="text-reset">Ubicación</a> </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Redes sociales</h6>
                <p><i class="fab fa-whatsapp me-3"></i></i> <a class="text-reset" target="_blank"  href="https://api.whatsapp.com/send?phone=56963593710">Whatsapp</a> </p>
                <p><i class="fab fa-facebook-f me-3"></i><a class="text-reset"  target="_blank" href="https://www.facebook.com/people/Styloschool-Uniformes/100057278446525/">Facebook</a> </p>
                <p><i class="fab fa-instagram me-3" ></i><a class="text-reset"  target="_blank" href="https://www.instagram.com/styloschool/">Instagram</a> </p>
            </div>
        </div>
    </div>


    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2022 Todos los derechos a:
        <a class="text-reset fw-bold" href="/">Styloschool</a>
    </div>
    <!-- Copyright -->
`



if (document.getElementById("extends_navbar"))
    document.getElementById("extends_navbar").innerHTML = htmlNavbar

if (document.getElementById("extends_map"))
    document.getElementById("extends_map").innerHTML = htmlMap

if (document.getElementById("extends_information"))
document.getElementById("extends_information").innerHTML = htmlInformation

if (document.getElementById("extends_footer"))
document.getElementById("extends_footer").innerHTML = htmlFooter





/*Codigo migas de pan*/

let pathname = window.location.pathname;

let pathCollege = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>Colegios</li>`

let pathCLC = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li> <a href="/pages/colegios">Colegios</a> <i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>Colegio Las Condes</li>`

let pathCYR = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li> <a href="/pages/colegios">Colegios</a> <i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>Colegio Coyancura</li>`

let pathLVC = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li> <a href="/pages/colegios">Colegios</a> <i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>Colegio Leonardo Da Vinci</li>`

let pathNSR = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li> <a href="/pages/colegios">Colegios</a> <i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>Colegio Nuestra Señora del Rosario</li>`

let pathSFA = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li> <a href="/pages/colegios">Colegios</a> <i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>Colegio San Francisco del Alba</li>`

let pathSFTP = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li> <a href="/pages/colegios">Colegios</a> <i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>Colegio San Francisco Técnico Profesional</li>`

let pathLSB = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li> <a href="/pages/colegios">Colegios</a> <i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>Colegio Simón Bolivar</li>`

let pathRDEP = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>Ropa Deportiva</li>`

let pathNOTFOUND = ` <li><a href="/">Inicio</a><i class="fa-sharp fa-solid fa-angle-right"></i> </li>
<li>No disponible</li>`





if(document.getElementById("breadcrumb"))
    switch (pathname){
        case '/pages/colegios':
        case '/pages/colegios.html':
            document.getElementById("breadcrumb").innerHTML = pathCollege;
            break;

        case '/pages/colegio-las-condes':
        case '/pages/colegio-las-condes.html': 
            document.getElementById("breadcrumb").innerHTML = pathCLC;    
            break;

        case '/pages/colegio-coyancura':
        case '/pages/colegio-coyancura.html': 
            document.getElementById("breadcrumb").innerHTML = pathCYR;
            break;

        case '/pages/colegio-leonardo-da-vinci':
        case '/pages/colegio-leonardo-da-vinci.html': 
            document.getElementById("breadcrumb").innerHTML = pathLVC;
            break;

        case '/pages/colegio-nuestra-senora-del-rosario':
        case '/pages/colegio-nuestra-senora-del-rosario.html': 
            document.getElementById("breadcrumb").innerHTML = pathNSR;
            break;

        case '/pages/colegio-san-francisco-del-alba':
        case '/pages/colegio-san-francisco-del-alba.html': 
            document.getElementById("breadcrumb").innerHTML = pathSFA;
            break;

        case '/pages/colegio-san-francisco':
        case '/pages/colegio-san-francisco.html': 
            document.getElementById("breadcrumb").innerHTML = pathSFTP;
            break;

        case '/pages/colegio-simon-bolivar':
        case '/pages/colegio-simon-bolivar.html': 
            document.getElementById("breadcrumb").innerHTML = pathLSB;
            break;

        case '/pages/ropa-deportiva':
        case '/pages/ropa-deportiva.html': 
            document.getElementById("breadcrumb").innerHTML = pathRDEP;
            break;

        case '/pages/no-disponible':
        case '/pages/no-disponible.html': 
            document.getElementById("breadcrumb").innerHTML = pathNOTFOUND;
            break;
    }
        

