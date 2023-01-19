function CallEndPointPost(url, jsonArgs) {

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

                 const dataData = data.Data;

                console.log(data);

                

                if (data.CodeResponse === 200 ){

                    const idper = dataData.IdPerson;
                    const cellphone = dataData.Phone;

                    localStorage.setItem("idPersona",idper);
                    localStorage.setItem("celUser",cellphone);

                    // window.location.href = URL_API_BASE;
                    location.replace("login.html");
                    location.href ="login.html";

                }else if (data.CodeResponse != 200 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No pudimos crear tus nuevas credenciales',
                      })

                }
                
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}