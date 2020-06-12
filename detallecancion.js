window.addEventListener ("load", function(){
    let queryString = new URLSearchParams (location.search)
    let codigoCancion = queryString.get ("iddeTrack")
//conecto con el URL de deezer
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoCancion )
    .then(
        function (respuesta) {
            return respuesta.json ();
        }
    )
//respuesta
    .then(
        function (information) {
    
        let laCancion = information;
        console.log (information)

 // creo las variables para reemplazar en c/ cancion
       let nombreCancion = laCancion.title;
       let artistaCancion = laCancion.artist.name;
       let albumCancion = laCancion.album.title;
       let imagenCancion = laCancion.album.cover_big
       let añoCancion = laCancion.release_date
       let tiempoCancion = laCancion.duration
   
// reemplazo variables en las etiquetas HTML
     let nuevoTitulo = ` 
     <h1> ` + nombreCancion + `  <br> ` + artistaCancion  + ` </h1> `

// modifico HTML
     document.querySelector (".titulocancion").innerHTML += nuevoTitulo

     let nuevoAño = ` <h3> ` + añoCancion + ` </h3> `

     document.querySelector (".año").innerHTML += nuevoAño

     let nuevoTiempo =` <h4> ` + tiempoCancion  + ` </h4> `
    document.querySelector (".tiempo").innerHTML += nuevoTiempo

    let nombre = `<p> ` + nombreCancion + ` </p>  `
    document.querySelector (".song").innerHTML += nombre

    let artista = ` <p> ` + artistaCancion + ` </p> `
    document.querySelector (".artist").innerHTML += artista

    let album = `<p> ` + albumCancion + ` <p> `
    document.querySelector (".albums").innerHTML += album

    let tiempo = ` <p> ` + tiempoCancion + ` </p> `

    document.querySelector (".minutos").innerHTML += tiempo

    let imagenDeLaCancion = ` <img class="img" src=" ` + imagenCancion + ` " alt=""> `

    document.querySelector (".img").innerHTML += imagenDeLaCancion

           
        }
    )
 })