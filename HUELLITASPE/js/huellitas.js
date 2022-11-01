
 /*Funcion Script perros.html*/
 function reserve(){
     alert("Tu reserva se ha registrado con éxito :D");
 }

 /*Funcion Script signin.html*/
let d = document;
		const form = d.getElementById('form');
		const inp = d.querySelectorAll('#form input');
		function Ingresar(){
			let correo = d.getElementById('correo_i').value;
			let contra = d.getElementById('contrasena_i').value;
			if(correo == '' || contra == ''){
				$('.sms').removeClass("sms").addClass('tile2');
				d.getElementById('mensaje-error').innerHTML='<img src="../images/error.jpg" class="alert-img"><br>Los campos correo y contraseña son obligatorios...!!';
			}else{
				$('.sms').removeClass("sms").addClass('tile2');
				d.getElementById('mensaje-error').innerHTML=`<img src="../images/alert.jpg" class="alert-img"><br>Registrese...!! <a style="text-decoration: underline;" href="signup.html">REGISTRARSE</a>`;
			}
		}

		inp.forEach((input) => {
			input.addEventListener('keyup',()=>{
				$('.tile2').removeClass("tile2").addClass('sms');
			})
		})

