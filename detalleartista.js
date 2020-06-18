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
   
    let nombreArtista = artistaDetalle.name;
    let numeroDeFans = artistaDetalle.nb_fan + " " + "fans";
    let numeroAlbums = "Numero de albums:" + " " + artistaDetalle.nb_album;
    let fotoArtista = artistaDetalle.picture_big;

    let nuevoTituloArtista = `
    <h1> ` + nombreArtista + ` </h1>`
    document.querySelector (".tituloartista").innerHTML += nuevoTituloArtista

    let fans = ` <h4> ` + numeroDeFans + ` </h4>`
    document.querySelector (".fans").innerHTML += fans

    let artistaAlbumsNumero = `
    <h4 class="numerosAlbums"> ` + numeroAlbums + ` </h4>
    `
    document.querySelector (".numerosAlbums").innerHTML += artistaAlbumsNumero
    
    let perfilArtista =
    ` <img class="img"  src=" ` + fotoArtista + ` " alt=""> `
    document.querySelector (".img").innerHTML += perfilArtista
    } )

   
    
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoArtista + "/top?limit=50" )
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
        
        let tituloCancion = cadaCancion.title;
        let artistaCancion = cadaCancion.artist.name;
        let albumCancion = cadaCancion.album.title;
        let tiempoCancion = cadaCancion.duration + " " + "segs";
       

        let htmlCanciones = `
        <li>
            <div class="a">
                <button class="heart"><i class="fa fa-heart"></i></button>
                <p class="song"> ` + tituloCancion + ` </p> 
                <p class="artist"> ` + artistaCancion + ` </p>
                <p class="albums"> ` + albumCancion + ` </p>
                <p class="minutos"> ` + tiempoCancion + ` </p>
       
             </div>
        </li>
            `
     
        document.querySelector(".items").innerHTML += htmlCanciones
       
    }



    })

    document.querySelector(".heart").addEventListener("click", function() {
        let arrayDeCancionesFavoritas;
        
        // Me fijo si hay cosas en storage
        if (localStorage.getItem("cancionesPreferidas") != null) {

            //arrayDeCancionesFavoritas y le voy a agregar el código la cancion
            arrayDeCancionesFavoritas = localStorage.getItem("cancionesPreferidas").split(",")
            arrayDeCancionesFavoritas.push(codigoCancion)
        } else {
            //TENGO QUE CREAR UN ARRAY NUEVO CON EL CODIGO DE la cancion
            arrayDeCancionesFavoritas = []
            arrayDeCancionesFavoritas.push(codigoCancion)
        }
        
        localStorage.setItem("cancionesPreferidas", arrayDeCancionesFavoritas);
    })

    })