 
document.getElementById("formulario").addEventListener("submit",guardarDatos);
  function guardarDatos (e){
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var producto =document.getElementById("producto").value;
  var precio =document.getElementById("precio").value;
  /* objeto */
  const datos ={

    nombre:nombre,
    telefono:telefono,
    producto:producto,
    precio:precio
   }
   

   if(localStorage.getItem("datos") === null){
    var datosArray=[];
    datosArray.push(datos);
    localStorage.setItem("datos",JSON.stringify(datosArray))
   }else{
    var datosArray = JSON.parse(localStorage.getItem("datos"));
    datosArray.push(datos);
    localStorage.setItem("datos",JSON.stringify(datosArray))
   }
 
   
   /* escribir loe elmentos introducidos en el input */
   
 
   document.getElementById("formulario").reset();
  e.preventDefault(); 
  
  escribirDatos();
   
   
 };

 function escribirDatos(){
   let datos = JSON.parse(localStorage.getItem("datos"));
   for(let i =0; i<datos.length; i++){
     let nombre = datos[i].nombre
     let telefono = datos[i].telefono;
     let producto = datos[i].producto;
     let precio = datos[i].precio;
     


     document.getElementById("vista").innerHTML +=`
   
  <li id="items"> ${nombre} ${telefono} ${producto} ${precio} 
  <input type="button"   onclick="borrarDatos(nombre)" value="eliminar" class="botoneliminar btn-flat red">
  </li>  `;
   }
   
  
 }

 /* borar li con boton borrar */
 function borrarDatos (){
      
  var nuevosli = document.getElementById("items");
  nuevosli.remove();
  
 }

escribirDatos();
  
 



 





