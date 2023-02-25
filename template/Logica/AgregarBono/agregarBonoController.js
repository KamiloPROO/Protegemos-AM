function VamosAgregarComercioNavideño() {

    var idUserr = localStorage.getItem("idPersona");
    var idCuponNav = 1;
    var img = localStorage.getItem("imagenBaseNavideña");

    const melo = document.getElementById("selectCategorias").value


    if (melo == "Restaurantes y Bar") {

    
        const ComercioGod = {

            DescriptionTrade: $("#nomComercio").val(),
            DirectionTrade: $("#DireComercio").val(),
            IdCity: 1,
            IdCategory: 1,
            Logo: img,
            IdProject: 5,
            IdCoupon: idCuponNav,
            IdPersonTrade: idUserr,
            ColorHexadecimal: "#2D2D2"
        }

        agregarComercio(ComercioGod)

    } else if (melo == "Hoteles y Resorts") {

        const ComercioGod = {

            DescriptionTrade: $("#nomComercio").val(),
            DirectionTrade: $("#DireComercio").val(),
            IdCity: 1,
            IdCategory: 2,
            Logo: img,
            IdProject: 5,
            IdCoupon: idCuponNav,
            IdPersonTrade: idUserr,
            ColorHexadecimal: "#2D2D2"
        }

        agregarComercio(ComercioGod)

    } else if (melo == "Belleza y Salud") {

     
        const ComercioGod = {

            DescriptionTrade: $("#nomComercio").val(),
            DirectionTrade: $("#DireComercio").val(),
            IdCity: 1,
            IdCategory: 3,
            Logo: img,
            IdProject: 5,
            IdCoupon: idCuponNav,
            IdPersonTrade: idUserr,
            ColorHexadecimal: "#2D2D2"
        }

        agregarComercio(ComercioGod)

    } else if (melo == "Veterinaria") {

       
        const ComercioGod = {

            DescriptionTrade: $("#nomComercio").val(),
            DirectionTrade: $("#DireComercio").val(),
            IdCity: 1,
            IdCategory: 4,
            Logo: img,
            IdProject: 5,
            IdCoupon: idCuponNav,
            IdPersonTrade: idUserr,
            ColorHexadecimal: "#2D2D2"
        }

        agregarComercio(ComercioGod)


    }

}

