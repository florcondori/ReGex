window.addEventListener("load", function(){
	var nombre = document.getElementById("nombre-apellido");
	var dni = document.getElementById("dni");
	var fechaNac = document.getElementById("fecha-nac");
	var celular = document.getElementById("celular");
	var telefono = document.getElementById("telefono");
	var password = document.getElementById("password");
	var confirmarPassword = document.getElementById("confirmar-pass");
	var comentario = document.getElementById("comentario");
	var check = document.getElementById("check");

	/*nombre.onkeydown = function(e){
		if(e.keyCode == 13){
			if(/([A-Z])\w++/.test(this.value)){
				this.nextElementSibling.innerText = "";
			}else{
				this.nextElementSibling.innerText = "La primera letra en mayuscula";	
			}
		}
	}
	nombre.addEventListener("blur", function(){
		if(/(^[A-Z][a-z]{2,}\s)+/.test(this.value)){
			this.nextElementSibling.innerText = "";
		}else{
			this.nextElementSibling.innerText = "La primera letra en mayuscula";	
		}
	});

	dni.addEventListener("blur", function(){
		if(/^[0-9]{9}$/.test(dni.value)){
			this.nextElementSibling.innerText = "";
		}else{
			this.nextElementSibling.innerText = "DNI debe tener 9 digitos";
		}
	});*/

	var btn = document.getElementById("enviar");
	btn.addEventListener("click", function(e){
		e.preventDefault();
			if(/([A-Z]{1}[a-z]{2,}\s?){2,}/.test(nombre.value)){
				nombre.nextElementSibling.innerText = "";
			}else{
				nombre.nextElementSibling.innerText = "La primera letra en mayuscula";	
			}

			if(/^[0-9]{9}$/.test(dni.value)){
				dni.nextElementSibling.innerText = "";
			}else{
				dni.nextElementSibling.innerText = "DNI debe tener 9 digitos";
			}

			if(/^[0-9]{9}$/.test(celular.value)){
				celular.nextElementSibling.innerText = "";
			}else{
				celular.nextElementSibling.innerText = "Celular tiene 9 digitos";
			}

			if(/[1-8]{3}(\-|)[1-8]{4}/.test(telefono.value)){
				telefono.nextElementSibling.innerText = "";
			}else{
				telefono.nextElementSibling.innerText = "Telefono Fijo 7 digitos";
			}

			if(password.value.trim().length != 0){
				password.nextElementSibling.innerText = "";
				if(password.value === confirmarPassword.value){
					confirmarPassword.nextElementSibling.innerText ="";
				}else{
					confirmarPassword.nextElementSibling.innerText ="Contraseña diferente";
				}				
			}else{
				password.nextElementSibling.innerText = "Ingrese una contraseña";
			}


			if(comentario.value.trim().length != 0){
				comentario.nextElementSibling.innerText = "";
			}else{
				comentario.nextElementSibling.innerText = "Escriba un mensaje";
			}

			if(check.checked){
				check.nextElementSibling.nextElementSibling.innerText = "";
			}else{
				check.nextElementSibling.nextElementSibling.innerText = "Aceptar terminos y condiciones para continuar";
			}
	});
});