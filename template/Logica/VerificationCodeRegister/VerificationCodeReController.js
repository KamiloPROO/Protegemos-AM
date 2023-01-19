function verificacionPersona() {

    var loginn = localStorage.getItem("phoneUser")
    var IdUser = localStorage.getItem("IdUserRegis")

    const verificacionPersona = {

        IdPerson: IdUser,
        IdProject: "5",
        CodeVerification: $("#codigoUser").val(),
        Login: loginn,
        IsRecoverPassword: "false"
       
    }
    verificacion(verificacionPersona)

}
