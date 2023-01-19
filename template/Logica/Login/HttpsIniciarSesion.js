function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

                console.log(data);

                const metaData = data.Data;
                
              if (data.CodeResponse == 200 ){

                
                const idper = metaData.IdPerson;
                const name = metaData.Names;
                const celUser = metaData.Phone;


                localStorage.setItem("idPersona",idper);
                localStorage.setItem("PrimerNombre",name);
                localStorage.setItem("celularUser", celUser)
                // window.location.href = URL_API_BASE;
                location.replace("dash.html");
                location.href ="dash.html";

              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Usuario o Contraseña Incorrecta',
                })
              };
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}