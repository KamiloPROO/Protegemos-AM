function CallEndPointPostComercio(url, jsonArgs) {

    

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);


           if (data != null) {

            location.replace("afiliarUsuario.html");
            location.href ="afiliarUsuario.html";

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