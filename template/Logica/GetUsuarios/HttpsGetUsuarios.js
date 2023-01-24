document.addEventListener('DOMContentLoaded', e => {

    // var idpersona = localStorage.getItem("idPersona");
  
    // const nombre = document.getElementById("name")
    // var namee = localStorage.getItem("PrimerNombre")
   
        
    // nombre.textContent = namee;
  
    // console.log(namee);
  
    $.ajax({
      type: "POST",
      url: "http://localhost:8124/Api/getUsuarios",
      data: "",
      success: function (data) {
  
        console.log(data);
  
//         for (const datos of data){
  
//          const productList = document.getElementById("product-list");
//          const element = document.createElement("div")
         
        
//          console.log(namee);
  
//          element.innerHTML += `
//          <div class="planess">
//          <div class="cardInversion" id="plan2">
            
//              <img src="assets/images/GREEN.png" alt="Avatar" style="width:50%"> 
//              <div class="">
//                <h3 ><b>PROGRESS OF MY PLAN</b></h3>
//                <br>
//                <h3>Rendimiento Mensual %</h3>
//                <h3>${datos.Rendimiento}</h3>
//                <br>
//                <h3>${datos.RangoInicial}</h3>
//                <h3>${datos.RangoFinal}</h3>
//                <br>
//                <h3>Amount Invested USD</h3>
//                <h3 style="color: rgb(7, 220, 23)">${datos.Cant_invertir}</h3>
//              </div>
         
//          </div>
//        </div>
//       `;
  
//       productList.appendChild(element)
//   }
      },
      error: function () {
          alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
      }
  });
  
  
  })