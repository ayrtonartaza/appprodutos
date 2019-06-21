
document.getElementById("formulario").addEventListener("submit",guardarDatos);
 function guardarDatos (e){
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var producto =document.getElementById("producto").value;
  var precio =document.getElementById("precio").value;
  
  const datos ={

    nombre:nombre,
    telefono:telefono,
    producto:producto,
    precio:precio
   }
   document.getElementById("vista").innerHTML +=`
   
   <li id="items"> ${nombre} ${telefono} ${producto} ${precio}
   <input type="button" onclick="borrarDatos(${nombre})" value="eliminar" class="btn-flat red">
   </li>  `;
   /* clientes */
   document.getElementById("vistaClientes").innerHTML +=`
   
   <li id="items"> Clientes ${nombre} ${telefono} 
   <input type="button" onclick="borrarDatos(${nombre})" value="eliminar" class="btn-flat red">
   </li>  `;
   document.getElementById("formulario").reset();
  e.preventDefault(); 
 };
 
 



 





