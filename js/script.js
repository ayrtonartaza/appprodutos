 
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
   

   localStorage.setItem("datos",JSON.stringify(datos));
  console.log(localStorage.getItem(JSON.stringify("datos")));
 
   
   /* escribir loe elmentos introducidos en el input */
   document.getElementById("vista").innerHTML +=`
   
   <li id="items"> ${nombre} ${telefono} ${producto} ${precio} 
   <input type="button"   onclick="borrarDatos(nombre)" value="eliminar" class="botoneliminar btn-flat red">
   </li>  `;
 
   document.getElementById("formulario").reset();
  e.preventDefault(); 
  
  
   
   
 };


 /* borar li con boton borrar */
 function borrarDatos (){
      
  var nuevosli = document.getElementById("items");
  nuevosli.remove();
  
 }


  
 



 





