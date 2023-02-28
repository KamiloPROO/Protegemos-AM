function CallEndPointPostComercio(url, jsonArgs) {

    

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);












            
        },
        error: function () {
            
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });

    
}