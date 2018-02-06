$(function(){
	$('.galeria .contenedor-imagen').on('click',function(){  /*se obtiene el elemento del DOM*/
		$('#modal').modal;
		var ruta_imagen = ($(this).find('img').attr('src'));  /*obtienes la tura de la imagen*/
		$('#imagen-modal').attr('src',ruta_imagen);/*sustituye la iagen den cada modal dependiendo la ruta*/
	});
	$('#modal').on('click',function(){ /*se crea el evento click para cada imagen*/
		$('#modal').modal('hide');
	})
})