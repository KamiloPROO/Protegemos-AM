const btnRegistro = document.getElementById("buttonRegistrarse"); 

btnRegistro.addEventListener('click', () => {

    const nombresRegistro = document.getElementById("Nombre").value
    const apellidosRegistro = document.getElementById("Apellido").value
    const celularRegistro = document.getElementById("Celular").value
    const correoRegistro = document.getElementById("Correo").value

    localStorage.setItem("numCell", celularRegistro)

    if (nombresRegistro === null || nombresRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tus Nombres',

        })


    } else if (apellidosRegistro === null || apellidosRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tus Apellidos',

        })


    } else if (celularRegistro === null || celularRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Celular',
        })

    } else if (correoRegistro === null || celularRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Correo',
        })

    }else {

        CrearPersona();

    }

})