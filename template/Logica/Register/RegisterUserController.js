function CrearPersona() {

    const melo = document.getElementById("selectTipDocument").value

    if (melo == "Tarjeta de Identidad"){

        const tarjeta = 1

        const registrarPersona = {

            FirstName: $("#Nombre").val(),
            SecondName: "",
            FirstSurname:  $("#Apellido").val(),
            SecondSurname: "",
            Sex: "",
            DateOfBirth: "",
            DocumentType: tarjeta,
            Document: $("#DocumentoRegistro").val(),
            MaritalStatus: "",
            Phone: $("#Celular").val(),
            CellPhone: $("#Celular").val(),
            Direction: "",
            Email: $("#Correo").val(),
            IdProject: "5",
            Passworrd: "",
            IdRole: "1",
    
        }
    
        registro(registrarPersona)
        
    }else if (melo == "Cedula de Ciudadania"){

        const cedula = 2;

        const registrarPersona = {

            FirstName: $("#Nombre").val(),
            SecondName: "",
            FirstSurname:  $("#Apellido").val(),
            SecondSurname: "",
            Sex: "",
            DateOfBirth: "",
            DocumentType: cedula,
            Document: $("#DocumentoRegistro").val(),
            MaritalStatus: "",
            Phone: $("#Celular").val(),
            CellPhone: $("#Celular").val(),
            Direction: "",
            Email: $("#Correo").val(),
            IdProject: "5",
            Passworrd: "",
            IdRole: "1",
    
        }
    
        registro(registrarPersona)

    }else if ( melo == "Pasaporte"){

        const pasaporte = 3;

        const registrarPersona = {

            FirstName: $("#Nombre").val(),
            SecondName: "",
            FirstSurname:  $("#Apellido").val(),
            SecondSurname: "",
            Sex: "",
            DateOfBirth: "",
            DocumentType: pasaporte,
            Document: $("#DocumentoRegistro").val(),
            MaritalStatus: "",
            Phone: $("#Celular").val(),
            CellPhone: $("#Celular").val(),
            Direction: "",
            Email: $("#Correo").val(),
            IdProject: "5",
            Passworrd: "",
            IdRole: "1",
    
        }
    
        registro(registrarPersona)

    }

    

}