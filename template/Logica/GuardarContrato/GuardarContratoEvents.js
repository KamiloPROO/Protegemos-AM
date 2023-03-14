const btnNuevoContrato = document.getElementById("guardarNuevoContrato");

btnNuevoContrato.addEventListener('click', () => {

    const codContra = document.getElementById("codigoContrato").value
    const fechaContra = document.getElementById("fechaExpeContrato").value
    const fechaVenContra = document.getElementById("fechaVenContrato").value
    const codEc = document.getElementById("codEcContrato").value
    const codRf = document.getElementById("codRfContrato").value
    const codUser = document.getElementById("codUserAfiliado").value
    const nomUser = document.getElementById("nomUserAfiliado").value
    const apeUser = document.getElementById("apeUserAfiliado").value
    const munUser = document.getElementById("selectMunicipioAfiliado").value
    const barUser = document.getElementById("selectBarrioAfiliado").value
    const direUser = document.getElementById("direUserAfiliado").value
    const teUser = document.getElementById("telUserAfiliado").value
    const celUser = document.getElementById("celUserAfiliado").value
    const tipDocUser = document.getElementById("tipDocuUserAfiliado").value
    const docUser = document.getElementById("numDocuUserAfiliado").value
    const fechaExUser = document.getElementById("fechaExpeUserAfiliado").value
    const parenUser = document.getElementById("parenUserAfiliado").value
    const docParen = document.getElementById("docParenUserAfiliado").value



    if (codContra === null || codContra === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa el codigo de contrato',

        })


    } else if (fechaContra === null || fechaContra === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa la fecha de expedicion del contrato',

        })

    } else if (fechaVenContra === null || fechaVenContra === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa la fecha de vencimeinto del contrato',

        })

    }else if (codEc === null || codEc === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa el codigo EC ',

        })

    }else if (codRf === null || codRf === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa el codigo RF',

        })

    }else if (codUser === null || codUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un codigo',

        })

    }else if (nomUser === null || nomUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un nombre',

        })

    }else if (apeUser === null || apeUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un apellido',

        })

    }else if (munUser === null || munUser === "-Seleccione-") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un municipio de residencia',

        })

    }else if (barUser === null || barUser === "-Seleccione-") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un barrio de residencia',

        })

    }else if (direUser === null || direUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa una direccion de residencia',

        })

    }else if (teUser === null || teUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un numero de telefono',

        })

    }else if (celUser === null || celUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un numero de celular',

        })

    }else if (tipDocUser === null || tipDocUser === "-Seleccione-") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un tipo de identificacion',

        })

    }else if (docUser === null || docUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa tu numero de documento',

        })

    }else if (fechaExUser === null || fechaExUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa la fecha de expedición de tu documento',

        })

    }else if (parenUser === null || parenUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un parentezco',

        })

    }else if (docParen === null || docParen === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa el numero de documento de tu parentezco',

        })

    }else {

        AgregarNuevoContrato();

    }

});


const btnAfiliar = document.getElementById("afiliarNuevo");

btnAfiliar.addEventListener('click', () => {

    var tabla = document.getElementById('divTabla');

    const codUser = document.getElementById("codUserAfiliado").value
    const nomUser = document.getElementById("nomUserAfiliado").value
    const apeUser = document.getElementById("apeUserAfiliado").value
    const munUser = document.getElementById("selectMunicipioAfiliado").value
    const barUser = document.getElementById("selectBarrioAfiliado").value
    const direUser = document.getElementById("direUserAfiliado").value
    const teUser = document.getElementById("telUserAfiliado").value
    const celUser = document.getElementById("celUserAfiliado").value
    const tipDocUser = document.getElementById("tipDocuUserAfiliado").value
    const docUser = document.getElementById("numDocuUserAfiliado").value
    const fechaExUser = document.getElementById("fechaExpeUserAfiliado").value
    const parenUser = document.getElementById("parenUserAfiliado").value
    const docParen = document.getElementById("docParenUserAfiliado").value

    if (codUser === null || codUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un codigo de usuario',

        })

    }else if (nomUser === null || nomUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un nombre de usuario',

        })

    }else if (apeUser === null || apeUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un apellido de usuario',

        })

    }else if (munUser === null || munUser === "-Seleccione-") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un municipio de residencia de usuario',

        })

    }else if (barUser === null || barUser === "-Seleccione-") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un barrio de residencia de usuario',

        })

    }else if (direUser === null || direUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa una direccion de residencia de usuario',

        })

    }else if (teUser === null || teUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un numero de telefono de usuario',

        })

    }else if (celUser === null || celUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un numero de celular de usuario',

        })

    }else if (tipDocUser === null || tipDocUser === "-Seleccione-") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un tipo de identificacion de usuario',

        })

    }else if (docUser === null || docUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa tu numero de documento de usuario',

        })

    }else if (fechaExUser === null || fechaExUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa la fecha de expedición de tu documento de usuario',

        })

    }else if (parenUser === null || parenUser === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un parentezco de usuario',

        })

    }else if (docParen === null || docParen === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa el numero de documento de tu parentezco de usuario',

        })

    }else {

        tabla.style.display = 'block'
        AgregarAfiliado();

    }

});


