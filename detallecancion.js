window.addEventListener ("load", function(){
    let queryString = new URLSearchParams (location.search)
    let codigoCancion = queryString.get ("idDeTrack")
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
       let albumCancion = laCancion.title;
       let imagenCancion = laCancion.album.cover_big
       let añoCancion = laCancion.release_date
       let tiempoCancion = laCancion.duration + " " + "segs"
       
       
   
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

    let tiempo = ` <p> ` + tiempoCancion +  ` </p> `

    document.querySelector (".minutos").innerHTML += tiempo

    let imagenDeLaCancion = ` <img class="img" src=" ` + imagenCancion + ` " alt=""> `

    document.querySelector (".img").innerHTML += imagenDeLaCancion

    let imagenDeCancion = 
    `  <img class= "mayer" src=" ` + imagenCancion + ` " alt=""> 
     <p class="mayer">  ` + artistaCancion + ` </p> ` 
    document.querySelector (".creditos").innerHTML += imagenDeCancion

     
       
        }
    )
        
    document.querySelector(".heart").addEventListener("click", function() { //haces el evento onclick en el corazon
        let arrayDeCancionesFavoritas; //variable 
        
        // Me fijo si hay cosas en storage
        if (localStorage.getItem("cancionesPreferidas") != null) { // si no hay canciones, hace el array
            //array + codigo de la cancion

            //arrayDeCancionesFavoritas y le voy a agregar el código la cancion
            
            arrayDeCancionesFavoritas = localStorage.getItem("cancionesPreferidas").split(",") //split divide el objeto en array
            arrayDeCancionesFavoritas.push(codigoCancion) //push agregamos algo que ya existia y le agrego el id
        
        
        } else {  //si no hay canciones, crea el array
            //TENGO QUE CREAR UN ARRAY NUEVO CON EL CODIGO DE la cancion
            arrayDeCancionesFavoritas = []
            arrayDeCancionesFavoritas.push(codigoCancion)
        }
        
        localStorage.setItem("cancionesPreferidas", arrayDeCancionesFavoritas); //storage donde van a guardar los arrays
    })

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoCancion )
    .then(
        function (respuesta) {
            return respuesta.json ();
        }
    )

    .then(
        function(resultado){
            console.log(resultado)

            let HTMLReproductor = 
            `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=false&width=950&height=350&
            color=f0c4cb&layout=dark&size=medium&type=tracks&id=` + codigoCancion + `&app_id=1"
            width="1108" height="90"></iframe>`

            document.querySelector(".reproductor").innerHTML = HTMLReproductor
        }

    )
})
