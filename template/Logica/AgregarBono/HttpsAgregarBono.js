function CallEndPointPostComercio(url, jsonArgs) {

    var loading = document.getElementById('cargando2')
    loading.style.display = 'flex'

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            loading.style.display = 'none'
                
                if (data.Codigo === 200 ){

                    Swal.fire({
                        icon: 'success',
                        title: 'Comercio Ingresado Correctamente'
                        
                    }).then((result) => {
                        if(result.isConfirmed){
                            window.location.href = URL_API_BASE;
                            location.replace("dash.html");
                            location.href ="dash.html";   
                        }   
                    })

                }else{

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ya te encuentras registrado en nuestro sistema',
                      })

                }
        },
        error: function () {
            loading.style.display = 'none'
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });

    
}