alert("Buenas jhony ,hace poco comence a trabajar de ui y maquetador pero todavia me falta mucho por aprender y agradezco que haya esta espacio donde aprendo un monton mirando los proyectos de los demás. La seccion 'clientes' le falta css. Saludos" );

let form = document.querySelector("form");
let boton=document.querySelector(".btn-flat");
let border__form = document.querySelector("#border__form");
let vacio = document.querySelector("#vacio");
function avisopopup (){
  boton.classList.remove("green");
  boton.style.border = "none";
  border__form.style.display = "none"; 
}




/* guardas datos */
document.getElementById("formulario").addEventListener("submit",guardarDatos);
  function guardarDatos (e){
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("teléfono").value;
  var producto =document.getElementById("producto").value;
  var precio =document.getElementById("precio").value;

  (function comprobarform (e){
    
    let telefonoparse = parseInt(telefono);
    let avisotelefono = document.getElementById("avisotelefono");
    if (telefono != telefonoparse){
      avisotelefono.style.display = "block";
      e.preventDefault();
    }else{
      if (telefono == telefonoparse){
        avisotelefono.style.display ="none";
      }
    } 
      
       document.getElementById("formulario").addEventListener("submit",comprobarform)
       

    
      
        
    }()
    );
    vacio.style.display = "none";
    boton.classList.add("green");
    boton.style.border = "green 2px solid";
    
    border__form.style.width = "100%";
    border__form.style.display = "block";
    
  setTimeout(avisopopup,1600);
  form.reset();
  const datos ={

    nombre:nombre,
    telefono:telefono,
    producto:producto,
    precio:precio
   }
   if (localStorage.getItem("datos") === null){
    let datosArray = [];
    datosArray.push(datos);
    localStorage.setItem("datos",JSON.stringify(datosArray))
    
}else{
    let datosArray = JSON.parse(localStorage.getItem("datos"));
    datosArray.push(datos);
    localStorage.setItem("datos",JSON.stringify(datosArray))
   
}


e.preventDefault();
escribir();

}

escribir();

document.getElementById("formulario").addEventListener("submit",escribir);

/* escribir datos en pantalla */
function escribir(e){
  let vista = document.getElementById("vista");
  vista.innerHTML= "";
  let datosArray = JSON.parse(localStorage.getItem("datos"));
  for (i=0; i<datosArray.length; i++){
    let nombre = datosArray[i].nombre;
    let telefono = datosArray[i].telefono;
    let producto = datosArray[i].producto;
    let precio = datosArray[i].precio;
  vista.innerHTML += `<div class="card black-text  " >
  <li><div class="items"><span>Nombre: </span>${nombre}</div>   <div class="items"> <span>Teléfono: </span>${telefono}</div>     <div class="items"><span>Producto/servicio: </span>${producto}</div>    <div class="items"> <span>Precio: </span>${precio}</div>   <br>  <button class ="btn red " onclick="borrar('${telefono}')">Borrar</button></li>
  </div>
  `;
  
  }
  e.preventDefault(nombre);
  
  borrar();
  
} 

  /* borrar datos en pantalla y localstorage */
function borrar(telefono){
  let datosArray = JSON.parse(localStorage.getItem("datos"));
  for(i=0; i<datosArray.length; i++ ){
    if(datosArray[i].telefono == telefono ){
          datosArray.splice(i,1)
    }
  }
  localStorage.setItem("datos",JSON.stringify(datosArray))
  escribir();
  
}
 


 



  
 



 





