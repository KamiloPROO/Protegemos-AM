function recuperarContrasenia() {

    const correo = localStorage.getItem("correoRecovery");
    const numUser = localStorage.getItem("celUser");

    const recoverPass = {

        IdProject: "5",
        Phone: numUser,
        Email: correo,
        Password: ""
        
    
    }

    recoveryyPassword(recoverPass)

}


function CallEndPointPostVeri(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);


            if (data.CodeResponse == 405) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Codigo de verificacion incorrecto',
                })

            } else if (data.CodeResponse == 200) {


                recuperarContrasenia();

                

            }else{

                Swal.fire({
                    icon: 'error',
                    title: 'No pudimos modificar tu contraseña'
                    
                })

            }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}