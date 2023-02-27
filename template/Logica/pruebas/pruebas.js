
let dataTable;
let dataTableInitialized = false;

const initDataTable = async () => {

    if (dataTableInitialized) {
        dataTable.destroy();
    }

    await listDatos();

    dataTable = $("#table_id").DataTable({});

    dataTableInitialized = true


}


const listDatos = async () => {

    try {

        const response = await fetch("https://excelsiortrader.app/api/TiposMembresia/ListarTiposMembresia");
        const datos = await response.json();

        console.log(datos);

        let content = ``;

        datos.forEach(element => {

            content += `
                
                <tr>
                     <td>${element.Descripcion}</td>
                     <td>${element.Fee}</td>
                     <td>${element.Id}</td>
                     <td>${element.IdEstado}</td>
                     <td>${element.RangoInicial}</td>
                     <td>${element.RangoFinal}</td>
                     <td>${element.Rendimiento}</td>
                </tr>
                `

            tableBody.innerHTML = content;

        });






    } catch (ex) {

        alert(ex);

    }



}


// function listDatos() {

//     $.ajax({
//         type: "GET",
//         url: "https://excelsiortrader.app/api/TiposMembresia/ListarTiposMembresia",
//         data: "",
//         success: function (data) {

//             console.log(data);

//             let content = ``;

//             data.forEach(element => {

//                 content += `

//                 <tr>
//                      <td>${element.Descripcion}</td>
//                      <td>${element.Fee}</td>
//                      <td>${element.Id}</td>
//                      <td>${element.IdEstado}</td>
//                      <td>${element.RangoInicial}</td>
//                      <td>${element.RangoFinal}</td>
//                      <td>${element.Rendimiento}</td>
//                 </tr>
//                 `

//             tableBody.innerHTML = content;

//             });



//         },
//         error: function () {
//             alert("Ha ocurrido un error, por favor vuelva a intentarlo")
//         }
//     });


// };


window.addEventListener("load", async () => {

    await initDataTable();

});


