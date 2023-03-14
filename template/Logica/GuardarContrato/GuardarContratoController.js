let Afiliados = []

function AgregarNuevoContrato() {

    const tipoDoc = document.getElementById("tipDocuUserAfiliado").value;

    var tipoFinal = 0;

    if (tipoDoc === "Cedula de Ciudadania") {

        tipoFinal = 1;

    } else if (tipoDoc === "Tarjeta de Identidad") {

        tipoFinal = 2;

    } else if (tipoDoc === "Pasaporte") {

        tipoFinal = 3;
    }

    const muni = document.getElementById("selectMunicipioAfiliado").value;
    var muniAfiliado = 0;

    if (muni === "Popayan") {

        muniAfiliado = 1;

    }

    const barrio = document.getElementById("selectBarrioAfiliado").value;
    var barrioAfiliado = 0;

    if (barrio != "") {

        barrioAfiliado = 1;

    }

    const parentezco = document.getElementById("parenUserAfiliado").value;
    var parenteId = 0;

    if (parentezco != "") {

        parenteId = 1;

    }




    const contrato = {

        ID: "",
        CODIGO: $("#codigoContrato").val(),
        FECHA_EXPEDICION: $("#fechaExpeContrato").val(),
        FECHA_VENCIMIENTO: $("#fechaVenContrato").val(),
        CODIGO_EC: $("#codEcContrato").val(),
        CODIGO_RF: $("#codRfContrato").val(),
        listaAfiliados: Afiliados

    };

    nuevoContrato(contrato);
}



function AgregarAfiliado() {

    const tipoDoc = document.getElementById("tipDocuUserAfiliado").value;

    var tipoFinal = 0;

    if (tipoDoc === "Cedula de Ciudadania") {

        tipoFinal = 1;

    } else if (tipoDoc === "Tarjeta de Identidad") {

        tipoFinal = 2;

    } else if (tipoDoc === "Pasaporte") {

        tipoFinal = 3;
    }

    const muni = document.getElementById("selectMunicipioAfiliado").value;
    var muniAfiliado = 0;

    if (muni === "Popayan") {

        muniAfiliado = 1;

    }

    const barrio = document.getElementById("selectBarrioAfiliado").value;
    var barrioAfiliado = 0;

    if (barrio != "") {

        barrioAfiliado = 1;

    }

    const parentezco = document.getElementById("parenUserAfiliado").value;
    var parenteId = 0;

    if (parentezco != "") {

        parenteId = 1;

    }

    var Afiliado = {

        ID: "",
        CODIGO: $("#codUserAfiliado").val(),
        NOMBRE: $("#nomUserAfiliado").val(),
        APELLIDO: $("#apeUserAfiliado").val(),
        ID_MUNICIPIO: muniAfiliado,
        ID_BARRIO: barrioAfiliado,
        DIRECCION: $("#direUserAfiliado").val(),
        TELEFONO: $("#telUserAfiliado").val(),
        CELULAR: $("#celUserAfiliado").val(),
        DOCUMENTO: $("#numDocuUserAfiliado").val(),
        FECHA_EXPEDICION: $("#fechaExpeUserAfiliado").val(),
        ID_TIPODOCUMENTO: tipoFinal,
        ID_PARENTEZCO: parenteId,
        DOCUMENTO_PADRE: $("#docParenUserAfiliado").val()

    }

    
    console.log(Afiliados);
    Afiliados.push(Afiliado);
  
    // initDataTable();

    listar();

}


var listar = function(){

    var adentroDe = Afiliados[0]
    console.log(JSON.stringify(adentroDe));

    var jfsonData = JSON.stringify(adentroDe);


        var table = $("#table_id").DataTable({

            "destroy": true,
            "data": jfsonData,
            "columns": [

                {"data":"CODIGO"},
                {"":"NOMBRE"},
                {"":"APELLIDO"},
                {"":"ID_MUNICIPIO"},
                {"":"ID_BARRIO"},
                {"":"DIRECCION"},
                {"":"TELEFONO"},
                {"":"CELULAR"},
                {"":"DOCUMENTO"},
                {"":"FECHA_EXPEDICION"},
                {"":"ID_TIPODOCUMENTO"},
                {"":"ID_PARENTEZCO"},
                {"":"DOCUMENTO_PADRE"},
                {"defaultContent":"<button class='botonsEditar' type='button' id='editarDato'>Editar</button>"}
        
                // {"data":"CODIGO"},
                // {"data":"NOMBRE"},
                // {"data":"APELLIDO"},
                // {"data":"ID_MUNICIPIO"},
                // {"data":"ID_BARRIO"},
                // {"data":"DIRECCION"},
                // {"data":"TELEFONO"},
                // {"data":"CELULAR"},
                // {"data":"DOCUMENTO"},
                // {"data":"FECHA_EXPEDICION"},
                // {"data":"ID_TIPODOCUMENTO"},
                // {"data":"ID_PARENTEZCO"},
                // {"data":"DOCUMENTO_PADRE"},
                // {"defaultContent":"<button class='botonsEditar' type='button' id='editarDato'>Editar</button>"}
        
            ]
           });
        
           obtener_data_editar("#table_id tbody", table);

}



// let dataTable;
// let dataTableInitialized = false;

// const initDataTable = async () => {

//     if (dataTableInitialized) {
//         dataTable.destroy();
//     }

//     await listDatos();
    // var adentroDe = Afiliados[0]
    // console.log(JSON.stringify(adentroDe));

    // var jfsonData = JSON.stringify(adentroDe);

//     dataTable = $("#table_id").DataTable({

//       scrollX: true,

//     });
    
//     dataTableInitialized = true

   
//    obtener_data_editar("#table_id tbody", dataTable);

// }


// const listDatos = async () => {





    // try {

    //     let content = ``;

    //     Afiliados.forEach(element => {

    //         content += `
                
    //             <tr>
                    
    //                  <td>${element.CODIGO}</td>
    //                  <td>${element.NOMBRE}</td>
    //                  <td>${element.APELLIDO}</td>
    //                  <td>${element.ID_MUNICIPIO}</td>
    //                  <td>${element.ID_BARRIO}</td>
    //                  <td>${element.DIRECCION}</td>
    //                  <td>${element.TELEFONO}</td>
    //                  <td>${element.CELULAR}</td>
    //                  <td>${element.DOCUMENTO}</td>
    //                  <td>${element.FECHA_EXPEDICION}</td>
    //                  <td>${element.ID_TIPODOCUMENTO}</td>
    //                  <td>${element.ID_PARENTEZCO}</td>
    //                  <td>${element.DOCUMENTO_PADRE}</td>
    //                  <td> 
    //                  <button class="botonsEditar" type="button" id="editarDato">Editar</button>
    //                  <hr>
    //                  <button class="botonsEliminar" type="button" id="elimarDato">Eliminar</button>
    //                  </td>  
               
    //                  </tr>
    //             `

    //         tableBody.innerHTML = content;

    //     });

    // } catch (ex) {

    //     alert(ex);

    // }



// }





var obtener_data_editar = function(tbody, table) {
    $(tbody).on("click", "button.botonsEditar", function(){
        var data = table.row( $(this).parents("tr") ).data();
        console.log(data);
    })
}


// window.addEventListener("load", async () => {

    

// });

