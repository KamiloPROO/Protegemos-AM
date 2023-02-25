function VamosAgregarComercioNavideño() {

    var idUserr = localStorage.getItem("IdUserRegis")
    var idCuponNav = localStorage.getItem("idMembresia1")
    var img = localStorage.getItem("imagenBaseNavideña")

    const melo = document.getElementById("selectCategorias").value


    if (melo == "Restaurantes y Bar") {

        const idCatego = 1;
        const ComercioGod = {

            DescriptionTrade: $("#nomComercio").val(),
            DirectionTrade: $("#DireComercio").val(),
            IdCity: 1,
            IdCategory: idCatego,
            Logo: img,
            IdProject: 5,
            IdCoupon: idCuponNav,
            IdPersonTrade: idUserr,
            ColorHexadecimal: "#2D2D2"
        }

        agregarComercio(ComercioGod)

    } else if (melo == "Hoteles y Resorts") {

        const idCatego = 2;
        const ComercioGod = {

            DescriptionTrade: $("#nomComercio").val(),
            DirectionTrade: $("#DireComercio").val(),
            IdCity: 1,
            IdCategory: idCatego,
            Logo: img,
            IdProject: 5,
            IdCoupon: idCuponNav,
            IdPersonTrade: idUserr,
            ColorHexadecimal: "#2D2D2"
        }

        agregarComercio(ComercioGod)

    } else if (melo == "Belleza y Salud") {

        const idCatego = 3;
        const ComercioGod = {

            DescriptionTrade: $("#nomComercio").val(),
            DirectionTrade: $("#DireComercio").val(),
            IdCity: 1,
            IdCategory: idCatego,
            Logo: img,
            IdProject: 5,
            IdCoupon: idCuponNav,
            IdPersonTrade: idUserr,
            ColorHexadecimal: "#2D2D2"
        }

        agregarComercio(ComercioGod)

    } else if (melo == "Veterinaria") {

        const idCatego = 4;
        const ComercioGod = {

            DescriptionTrade: $("#nomComercio").val(),
            DirectionTrade: $("#DireComercio").val(),
            IdCity: 1,
            IdCategory: idCatego,
            Logo: img,
            IdProject: 5,
            IdCoupon: idCuponNav,
            IdPersonTrade: idUserr,
            ColorHexadecimal: "#2D2D2"
        }

        agregarComercio(ComercioGod)


    }

}

// function VamosAgregarComercioSemSanta() {

//     var idUserr = localStorage.getItem("idPersonaQlub")
//     var idCuponSan = localStorage.getItem("idMembresia2")
//     var imgSanta = localStorage.getItem("imagenBaseSemSanta")

//     const melo = document.getElementById("selectCategorias").value



//     if (melo == "Restaurantes y Bar") {

//         const idCatego = 1;
//         const ComercioGod = {

//             DescriptionTrade: $("#nomComercio").val(),
//             DirectionTrade: $("#DireComercio").val(),
//             IdCity: 1,
//             IdCategory: idCatego,
//             Logo: imgSanta,
//             IdProject: 6,
//             IdCoupon: idCuponSan,
//             IdPersonTrade: idUserr,
//             ColorHexadecimal: "#2D2D2"
//         }

//         agregarComercio(ComercioGod)

//     } else if (melo == "Hoteles y Resorts") {

//         const idCatego = 2;
//         const ComercioGod = {

//             DescriptionTrade: $("#nomComercio").val(),
//             DirectionTrade: $("#DireComercio").val(),
//             IdCity: 1,
//             IdCategory: idCatego,
//             Logo: imgSanta,
//             IdProject: 6,
//             IdCoupon: idCuponSan,
//             IdPersonTrade: idUserr,
//             ColorHexadecimal: "#2D2D2"
//         }

//         agregarComercio(ComercioGod)

//     } else if (melo == "Belleza y Salud") {

//         const idCatego = 3;
//         const ComercioGod = {

//             DescriptionTrade: $("#nomComercio").val(),
//             DirectionTrade: $("#DireComercio").val(),
//             IdCity: 1,
//             IdCategory: idCatego,
//             Logo: imgSanta,
//             IdProject: 6,
//             IdCoupon: idCuponSan,
//             IdPersonTrade: idUserr,
//             ColorHexadecimal: "#2D2D2"
//         }

//         agregarComercio(ComercioGod)

//     } else if (melo == "Veterinaria") {

//         const idCatego = 4;
//         const ComercioGod = {

//             DescriptionTrade: $("#nomComercio").val(),
//             DirectionTrade: $("#DireComercio").val(),
//             IdCity: 1,
//             IdCategory: idCatego,
//             Logo: imgSanta,
//             IdProject: 6,
//             IdCoupon: idCuponSan,
//             IdPersonTrade: idUserr,
//             ColorHexadecimal: "#2D2D2"
//         }

//         agregarComercio(ComercioGod)


//     }
// }

// function VamosAgregarComercioAliado() {

//     var idUserr = localStorage.getItem("idPersonaQlub")
//     var idCuponAlia = localStorage.getItem("idMembresia3")
//     var imgAliado = localStorage.getItem("imagenBaseAliada")

//     const melo = document.getElementById("selectCategorias").value


//     if (melo == "Restaurantes y Bar") {

//         const idCatego = 1;
//         const ComercioGod = {

//             DescriptionTrade: $("#nomComercio").val(),
//             DirectionTrade: $("#DireComercio").val(),
//             IdCity: 1,
//             IdCategory: idCatego,
//             Logo: imgAliado,
//             IdProject: 6,
//             IdCoupon: idCuponAlia,
//             IdPersonTrade: idUserr,
//             ColorHexadecimal: "#2D2D2"
//         }

//         agregarComercio(ComercioGod)

//     } else if (melo == "Hoteles y Resorts") {

//         const idCatego = 2;
//         const ComercioGod = {

//             DescriptionTrade: $("#nomComercio").val(),
//             DirectionTrade: $("#DireComercio").val(),
//             IdCity: 1,
//             IdCategory: idCatego,
//             Logo: imgAliado,
//             IdProject: 6,
//             IdCoupon: idCuponAlia,
//             IdPersonTrade: idUserr,
//             ColorHexadecimal: "#2D2D2"
//         }

//         agregarComercio(ComercioGod)

//     } else if (melo == "Belleza y Salud") {

//         const idCatego = 3;
//         const ComercioGod = {

//             DescriptionTrade: $("#nomComercio").val(),
//             DirectionTrade: $("#DireComercio").val(),
//             IdCity: 1,
//             IdCategory: idCatego,
//             Logo: imgAliado,
//             IdProject: 6,
//             IdCoupon: idCuponAlia,
//             IdPersonTrade: idUserr,
//             ColorHexadecimal: "#2D2D2"
//         }

//         agregarComercio(ComercioGod)

//     } else if (melo == "Veterinaria") {

//         const idCatego = 4;
//         const ComercioGod = {

//             DescriptionTrade: $("#nomComercio").val(),
//             DirectionTrade: $("#DireComercio").val(),
//             IdCity: 1,
//             IdCategory: idCatego,
//             Logo: imgAliado,
//             IdProject: 6,
//             IdCoupon: idCuponAlia,
//             IdPersonTrade: idUserr,
//             ColorHexadecimal: "#2D2D2"
//         }

//         agregarComercio(ComercioGod)


//     }

// }