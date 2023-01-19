const btnVerifiacion = document.getElementById("buttonVerifiacion"); 


btnVerifiacion.addEventListener('click', () => {

    const PasswordVerificacion = document.getElementById("codigoUser").value


    if (PasswordVerificacion === null || PasswordVerificacion === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tus Login',
        })

    }else {

        verificacionPersona();
    }
})

