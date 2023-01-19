document.addEventListener('DOMContentLoaded', e => {

    var loading = document.getElementById('cargando')
    loading.style.display = 'flex'

    $.ajax({
        type: "POST",
        url: "https://myqlub.app/api/CuponComercio/CouponListAll",
        data: {"IdQuery": 1},
        success: function (data) {

            loading.style.display = 'none'


            for ( const compras of data) {
            console.log(compras);
            console.log(compras.Id);            

            const productList = document.getElementById("product-list");
            const element = document.createElement("div");

            if (compras.Id == 1){

                const idMem1 = compras.Id;

                localStorage.setItem('idMembresia1', idMem1);
                console.log(" membresia1 " + idMem1);
                
                element.innerHTML += `
                <div class="planess">
                
                <div class="cardInversion" id="plan2" style="background:url(./assets/images/myqbluemembresia.png);background-repeat: no-repeat;background-size: cover; height: 230px">
                   <div style="margin-top: 70px">
                      <br>
                      <h3 style="margin-left: 0px;">${compras.DescripcionCupon}</h3>
                      <button onclick="membreNavideña()" style="background: #fff; color: black; font-weight: bold; "class="btnComprar">Afiliar comercio</button>
                    </div>
                </div>
              </div>
             `; 
            } else if (compras.Id == 2){

                const idMem2 = compras.Id;
                localStorage.setItem('idMembresia2', idMem2);
                console.log(" membresia2 " + idMem2);

                element.innerHTML += `
                <div class="planess">
                
                <div class="cardInversion" id="plan2" style="background:url(./assets/images/tarjDorada.jpeg);background-repeat: no-repeat;background-size: cover; height: 230px">
                   <div style="margin-top: 70px">
                      <br>
                      <h3 style="margin-left: 0px;">${compras.DescripcionCupon}</h3>
                      <button onclick="membreSanta()" style="background: #fff; color: black; font-weight: bold; "class="btnComprar">Afiliar comercio</button>
                    </div>
                </div>
              </div>
             `; 
            } else {

                const idMem3 = compras.Id;
                localStorage.setItem('idMembresia3', idMem3);
                console.log(" membresia1 " + idMem3);

                element.innerHTML += `
                <div class="planess">
                
                <div class="cardInversion" id="plan2" style="background:url(./assets/images/tarjPlata.jpeg);background-repeat: no-repeat;background-size: cover; height: 230px">
                   <div style="margin-top: 70px">
                      <br>
                      <h3 style="margin-left: 0px;">${compras.DescripcionCupon}</h3>
                      <button onclick="membreAliado()" style="background: #fff; color: black; font-weight: bold; "class="btnComprar">Afiliar comercio</button>
                    </div>
                </div>
              </div>
             `; 
            }
                
             productList.appendChild(element)

            }

        },
        error: function () {
            loading.style.display = 'none'
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
})