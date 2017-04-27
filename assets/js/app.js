window.addEventListener("load", function(){
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var dni = document.getElementById("dni");
	var fechaNac = document.getElementById("fecha-nac");
	var celular = document.getElementById("celular");
	var telefonoCasa = document.getElementById("telefono");
	var password = document.getElementById("password");
	var confirmarPassword = document.getElementById("confirmar-pass");
	var comentario = document.getElementById("comentario");

	var btn = document.getElementById("enviar");
	btn.addEventListener("click", function(e){
		e.preventDefault();
			if(/(^[A-Z][a-z]{2,}\s)+/.test(nombre.value)){
				nombre.nextElementSibling.innerText = "";
			}else{
				nombre.nextElementSibling.innerText = "Nombre- La primera letra en mayuscula";	
			}

			if(/^[0-9]{9}$/.test(dni.value)){
				dni.nextElementSibling.innerText = "";
			}else{
				dni.nextElementSibling.innerText = "DNI debe tener 9 digitos";
			}
	});

});