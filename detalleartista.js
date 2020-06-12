window.addEventListener ("load", function(){
    let queryString = new URLSearchParams (location.search)
    let codigoArtista = queryString.get ("idDeArtista")
//conecto con el URL de deezer
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoArtista )
    .then(
        function (respuesta) {
            return respuesta.json ();
        }
    )
//respuesta
    })