console.log("estmos en prueba");

var selectedRow = null;

function showAlert(message, className) {

    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

//editar data

document.querySelector("#list-datos").addEventListener("click", (e) => {

    target = e.target;
    if (target.classList.contains("edit")) {

        selectedRow = target.parentElement.parentElement;

        document.querySelector("#codUserAfiliado").value = selectedRow.children[0].textContent;
        document.querySelector("#nomUserAfiliado").value = selectedRow.children[1].textContent;
        document.querySelector("#apeUserAfiliado").value = selectedRow.children[2].textContent;
        document.querySelector("#selectMunicipioAfiliado").value = selectedRow.children[3].textContent;
        document.querySelector("#selectBarrioAfiliado").value = selectedRow.children[4].textContent;
        document.querySelector("#direUserAfiliado").value = selectedRow.children[5].textContent;
        document.querySelector("#telUserAfiliado").value = selectedRow.children[6].textContent;
        document.querySelector("#celUserAfiliado").value = selectedRow.children[7].textContent;
        document.querySelector("#tipDocuUserAfiliado").value = selectedRow.children[8].textContent;
        document.querySelector("#numDocuUserAfiliado").value = selectedRow.children[9].textContent;
        document.querySelector("#fechaExpeUserAfiliado").value = selectedRow.children[10].textContent;
        document.querySelector("#parenUserAfiliado").value = selectedRow.children[11].textContent;
        document.querySelector("#docParenUserAfiliado").value = selectedRow.children[12].textContent;


    }

});


// Add data

document.querySelector("#afiliarNuevo").addEventListener("click", (e) => {

    e.preventDefault();

    const codigo = document.querySelector("#codUserAfiliado").value;
    const nombre = document.querySelector("#nomUserAfiliado").value;
    const apellido = document.querySelector("#apeUserAfiliado").value;
    const municipio = document.querySelector("#selectMunicipioAfiliado").value;
    const barrio = document.querySelector("#selectBarrioAfiliado").value;
    const direccion = document.querySelector("#direUserAfiliado").value;
    const telefono = document.querySelector("#telUserAfiliado").value;
    const celular = document.querySelector("#celUserAfiliado").value;
    const tipDocumento = document.querySelector("#tipDocuUserAfiliado").value;
    const numDocumento = document.querySelector("#numDocuUserAfiliado").value;
    const expeDocumento = document.querySelector("#fechaExpeUserAfiliado").value;
    const parentezco = document.querySelector("#parenUserAfiliado").value;
    const NumDocParent = document.querySelector("#docParenUserAfiliado").value;

    if (selectedRow == null) {

        const list = document.querySelector("#list-datos");
        const row = document.createElement("tr");

        row.innerHTML = `
    
    <td>${codigo}</td>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${municipio}</td>
    <td>${barrio}</td>
    <td>${direccion}</td>
    <td>${telefono}</td>
    <td>${celular}</td>
    <td>${tipDocumento}</td>
    <td>${numDocumento}</td>
    <td>${expeDocumento}</td>
    <td>${parentezco}</td>
    <td>${NumDocParent}</td>
    <td>

    <a href="#" class="botonsEditar edit">Edit</a>
    <a href="#" class="botonsEliminar delete">delete</a>

    </td>
      `

        list.appendChild(row);
        selectedRow = null;
        showAlert("Afiliado Creado", "Succecs")

    }
    else{

        selectedRow.children[0].textContent = codigo;
        selectedRow.children[1].textContent = nombre;
        selectedRow.children[2].textContent = apellido;
        selectedRow.children[3].textContent = municipio;
        selectedRow.children[4].textContent = barrio;
        selectedRow.children[5].textContent = direccion;
        selectedRow.children[6].textContent = telefono;
        selectedRow.children[7].textContent = celular;
        selectedRow.children[8].textContent = tipDocumento;
        selectedRow.children[9].textContent = numDocumento;
        selectedRow.children[10].textContent = expeDocumento;
        selectedRow.children[11].textContent = parentezco;
        selectedRow.children[12].textContent = NumDocParent;
        
        showAlert("Editado Correctamente", "info");
    
    }

});


// eliiminar data
document.querySelector("#list-datos").addEventListener("click", (e) => {

    target = e.target;

    if (target.classList.contains("delete")) {

        target.parentElement.parentElement.remove();
        showAlert("Elemento eliminado correctamente", "danger");
    }

});