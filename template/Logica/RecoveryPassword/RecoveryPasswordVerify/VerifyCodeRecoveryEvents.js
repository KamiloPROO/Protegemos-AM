const btnVerifiacion = document.getElementById("buttonVerifiacionRecover"); 


btnVerifiacion.addEventListener('click', () => {

    const PasswordVerificacion = document.getElementById("codigoUserVeri").value


    if (PasswordVerificacion === null || PasswordVerificacion === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Codigo de Verificación',
        })

    }else {

        verificacionPersonaSend();
    }
})

