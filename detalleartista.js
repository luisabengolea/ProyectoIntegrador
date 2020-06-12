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
.then(
    function (information) {

    let artistaDetalle = information;
    console.log (information)
   
    let nombreArtista = artistaDetalle.artist.name;
    let numeroDeFans = artistaDetalle.nb_fan;
    let numeroAlbums = artistaDetalle.artist.nb_album;
    let fotoArtista = artistaDetalle.artist.picture_big;

    let nuevoTituloArtista = `
    <h1> ` + nombreArtista + ` </h1>`
    document.querySelector (".tituloartista").innerHTML += nuevoTituloArtista

    let fans = ` <h4> ` + numeroDeFans + ` </h4>`
    document.querySelector (".tiempo").innerHTML += fans
    

    })


    })