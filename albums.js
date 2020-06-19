window.addEventListener ("load", function(){
    let queryString = new URLSearchParams (location.search)
    let codigoAlbum = queryString.get ("idDeAlbum")
//conecto con el URL de deezer
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoAlbum )
    .then(
        function (respuesta) {
            return respuesta.json ();
        }
    )
//respuesta
.then(
    function (information) {

    let albumDetalle = information;
    console.log (information)
   
    let nombreGenero = albumDetalle.title;
    let idArtista = albumDetalle.artist.id;
    let nombreArtista = albumDetalle.artist.name;

    let fotoGenero = albumDetalle.cover_big;

    let nuevoTituloAlbum = `
    <h1> ` + nombreGenero + ` </h1>`
    document.querySelector (".tituloartista").innerHTML += nuevoTituloAlbum

    let artist = ` <h4 <a href= "detalleartista.html?idDeArtista=` + idArtista + `" >   ` + nombreArtista + ` </h4>`
    document.querySelector (".fans").innerHTML += artist


    
    let perfilGenero =
    ` <img class="img"  src=" ` + fotoGenero + ` " alt=""> `
    document.querySelector (".img").innerHTML += perfilGenero
    } )

   
    
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/albums/" + codigoAlbum + "/tracks" )
    .then(
        function (respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(informacionTracks) {
            
        let porCancion = informacionTracks.data
        console.log(informacionTracks)
       // Trabaja el resultado  y armar variables con los reusltados para tenerlos almacenados 

    for (let i = 0; i < porCancion.length; i ++){
        const cadaCancion = porCancion[i];
        let idDeTrack = cadaCancion.data.id
        let tituloCancion = cadaCancion.data.title;
        let artistaCancion = cadaCancion.artist.name;
        let tiempoCancion = cadaCancion.duration + " " + "segs";
       

        let htmlCanciones = `
        <li>
            <div class="a">
                <button class="heart"><i class="fa fa-heart"></i></button>
                <p class="song" <a href= "detallecancion.html?idDeTrack=` + idDeTrack + `" > ` + tituloCancion + ` </p> 
                <p class="artist"> ` + artistaCancion + ` </p>
                <p class="albums"> ` + albumCancion + ` </p>
                <p class="minutos"> ` + tiempoCancion + ` </p>
       
             </div>
        </li>
            `
     
        document.querySelector(".items").innerHTML += htmlCanciones
       
    }



    })
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoArtista + "/top?limit=50"  )
    .then(
        function (respuesta) {
            return respuesta.json ();
        }
    )

    .then(
        function(resultado){
            console.log(resultado)

            let HTMLReproductorArtista = 
            `<iframe scrolling="no" frameborder="0" allowTransparency="true" 
            src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=
            f0c4cb&layout=dark&size=medium&type=radio&id=artist-` + codigoArtista + `&app_id=1" width="1108" height="90"></iframe>`

            document.querySelector(".reproductor").innerHTML = HTMLReproductorArtista
        }

    )

    })