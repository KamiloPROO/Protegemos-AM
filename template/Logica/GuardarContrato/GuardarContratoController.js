var Afiliados = []

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

    console.table(Afiliado);
    Afiliados.push(Afiliado);
  
    initDataTable();

}


let dataTable;
let dataTableInitialized = false;

const initDataTable = async () => {

    if (dataTableInitialized) {
        dataTable.destroy();
    }

    await listDatos();

    dataTable = $("#table_id").DataTable({

      scrollX: true,

    });
    
    dataTableInitialized = true


}


const listDatos = async () => {

    try {

        let content = ``;

        Afiliados.forEach(element => {

            content += `
                
                <tr>
                    
                     <td>${element.CODIGO}</td>
                     <td>${element.NOMBRE}</td>
                     <td>${element.APELLIDO}</td>
                     <td>${element.ID_MUNICIPIO}</td>
                     <td>${element.ID_BARRIO}</td>
                     <td>${element.DIRECCION}</td>
                     <td>${element.TELEFONO}</td>
                     <td>${element.CELULAR}</td>
                     <td>${element.DOCUMENTO}</td>
                     <td>${element.FECHA_EXPEDICION}</td>
                     <td>${element.ID_TIPODOCUMENTO}</td>
                     <td>${element.ID_PARENTEZCO}</td>
                     <td>${element.DOCUMENTO_PADRE}</td>

                </tr>
                `

            tableBody.innerHTML = content;

        });

    } catch (ex) {

        alert(ex);

    }



}

// window.addEventListener("load", async () => {

    

// });

