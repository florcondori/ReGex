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
			//validar Campo Nombre y Apellido
			if(/([A-Z]{1}[a-z]{2,}\s?){2,}/.test(nombre.value)){
				nombre.nextElementSibling.innerText = "";
			}else{
				nombre.nextElementSibling.innerText = "La primera letra en mayuscula";	
			}
			//Validar campo DNI
			if(/^[0-9]{9}$/.test(dni.value)){
				dni.nextElementSibling.innerText = "";
			}else{
				dni.nextElementSibling.innerText = "DNI debe tener 9 digitos";
			}
			//validar campo Fecha de nacimiento
			if(/(0[1-9]{1}|1[0-9]{1}|2[0-9]{1}|3[0-1]{1})-(0[1-9]{1}|1[0-2]{1})-((19|20)[0-9]{2})/.test(fechaNac.value)){
				fechaNac.nextElementSibling.innerText = "";
				var arrayNac = fechaNac.value.split("-");
				console.log(arrayNac);
				var fecha = new Date();
				var diaActual = fecha.getDate();
				var mesActual = fecha.getMonth()+1;
				var añoActual = fecha.getFullYear();
					if(añoActual-arrayNac[2]>=18){
						fechaNac.nextElementSibling.innerText = "";
						if(mesActual>=arrayNac[1]){
							fechaNac.nextElementSibling.innerText = "";
							if(diaActual>arrayNac[0]){
								fechaNac.nextElementSibling.innerText = "";
							}else{
								fechaNac.nextElementSibling.innerText = "Te falta algunos dias para ser mayor de edad";
							}
						}else{
							fechaNac.nextElementSibling.innerText = "Te falta algunos meses para ser mayor de edad";
						}
					}else{
						fechaNac.nextElementSibling.innerText = "Te falta algunos años para ser mayor de edad";
					}
			}else{
				fechaNac.nextElementSibling.innerText = "Formato: DD-MM-YYYY";
			}
			//Validar campo celular
			if(/^[0-9]{9}$/.test(celular.value)){
				celular.nextElementSibling.innerText = "";
			}else{
				celular.nextElementSibling.innerText = "Celular tiene 9 digitos";
			}
			//Validar campo telefono de casa
			if(/[1-8]{3}(\-|)[1-8]{4}/.test(telefono.value)){
				telefono.nextElementSibling.innerText = "";
			}else{
				telefono.nextElementSibling.innerText = "Telefono Fijo 7 digitos";
			}
			//validar password
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
			//Validar campo comentarios
			if(comentario.value.trim().length != 0){
				comentario.nextElementSibling.innerText = "";
			}else{
				comentario.nextElementSibling.innerText = "Escriba un mensaje";
			}
			//Validar check
			if(check.checked){
				check.nextElementSibling.nextElementSibling.innerText = "";
			}else{
				check.nextElementSibling.nextElementSibling.innerText = "Aceptar terminos y condiciones para continuar";
			}
	});
});