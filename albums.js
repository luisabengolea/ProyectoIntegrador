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
   

   

    let canciones = albumDetalle.tracks.data
        
        for (let i = 0; i < canciones.length; i++) {
            const porCancion = canciones[i];

            let tituloCancion = porCancion.title
            let idDeTrack = porCancion.id
            let artistaCancion = porCancion.artist.name
            let tiempoCancion = porCancion.duration

            //canciones del album

            let nuevoCanciones = 
            
            `
            <li>
            <div class="a">
                <button class="heart"><i class="fa fa-heart"></i></button>
                <p class="song" <a href= "detallecancion.html?idDeTrack=` + idDeTrack + `" > ` + tituloCancion + ` </p> 
                <p class="artist"> ` + artistaCancion + ` </p>
            
                <p class="minutos"> ` + tiempoCancion + ` </p>
       
             </div>
        </li>
            `
            document.querySelector(".items").innerHTML += nuevoCanciones
        }
    } )

  

    })
    
    