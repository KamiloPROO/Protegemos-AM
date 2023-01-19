function verificacionPersonaSend() {

    var loginn = localStorage.getItem("celUser")
    var IdUser = localStorage.getItem("idPersona")

    const usuario = {

        IdPerson: IdUser,
        IdProject: "5",
        CodeVerification: $("#codigoUserVeri").val(),
        Login: loginn,
        IsRecoverPassword: "true"
       
    }
    verificar(usuario)

}