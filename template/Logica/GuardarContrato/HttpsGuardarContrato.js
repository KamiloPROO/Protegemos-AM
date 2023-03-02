function CallEndPointPostComercio(url, jsonArgs) {


    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);


           if (data != null ) {

           
            Swal.fire({
                icon: 'success',
                title: 'Accion Exitosa',
                text: 'Registro creado correctamente',
              }).then((result) => {

                if(result.isConfirmed){
                    // window.location.href = URL_API_BASE;
                    location.replace("afiliarUsuario.html");
                    location.href ="afiliarUsuario.html";  
                }  
                           
              })

           }else{

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo Salio Mal Intenta Nuevamente',
              })

           

           }
 
        },
        error: function () {
            
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });

    
}