
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

        // const response = await fetch("https://excelsiortrader.app/api/TiposMembresia/ListarTiposMembresia");
        // const datos = await response.json();

        // console.log(datos);

        var listaData = [



            {
                Descripcion: "Melos",
                Fee: "6",
                Id: "46",
                IdEstado: "45",
                RangoInicial: "44",
                RangoFinal: "43",
                Rendimiento: "4"
            }

        ];

        let content = ``;

        listaData.forEach(element => {

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

window.addEventListener("load", async () => {

    await initDataTable();

});


