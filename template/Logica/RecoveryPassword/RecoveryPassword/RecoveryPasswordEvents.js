const recovey = document.getElementById("buttonRecovery")


recovey.addEventListener("click", function(e){

    const userr = document.getElementById("loginUserRecovery").value
    const correoo = document.getElementById("emaildUserRecovery").value

    localStorage.setItem("correoRecovery",correoo);

    if ( userr === null || userr === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Usuario',
            
          })

      } else if ( correoo ===  null || correoo === "" ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Correo',
          })

      }else{

        passRecovery(); 

      }
})
