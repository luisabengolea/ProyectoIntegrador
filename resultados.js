window.addEventListener("load",function(){
    let queryString = new URLSearchParams(location.search)

    //Leer el url y el query string siempre igual


    let loBuscado = queryString.get ("buscador");



    // fetch se usa para pedile a la pagina de deezer info 
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado + "")
    .then(
        function (respuesta){
            return respuesta.json();

        }
    )
// PRIMER THEN DESPEMAQUETA LA RTA 
    


    
    .then(
        function (resultado){

        let resultadoBusqueda = resultado.data
         console.log(resultado)

         if (resultadoBusqueda == undefined || resultadoBusqueda.length == 0) {
            document.querySelector(".listadoResultados").innerHTML =
            `
            <p>NO SE HAN ENCONTRADO CANCIONES</p>
            `
        }

// console.log aca para ver que contiene la infromacion de data de charts 

       



// recorre el array de cancinones porque no sabemos cuan tas canciones hay 
        for (let index = 0; index < resultadoBusqueda.length; index++) {
            const cadaResultado = resultadoBusqueda[index];
        
// index se reemplaza por la variable que estamos recorriendo 






            let trackTitle = cadaResultado.title
            let trackArtist = cadaResultado.artist.name
            let trackAlbum = cadaResultado.album.title
            trackImg = cadaResultado.album.cover_big
            let duracion = cadaResultado.duration
            let trackId = cadaResultado.id

    // cuando araams la estructura interrumpimos el hipervinculo con la variable iddegif, para que la lea del url 
            let htmlResultado = `
        <li>
            <div class="slide">
              <a href="detallecancion.html?idDeTrack=` + trackId + `">
              <img class="imagencancion imgslide" src="` + trackImg + `" alt=" "></a>
              <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + trackTitle + `-` + trackArtist +  `</h3></div>
            </div>
        </li>
        `

         // desde aca pongo la estuctura que seria de solo como se ve el resultado de canciones ,

        document.querySelector(".listadoResultados").innerHTML += htmlResultado
            
        
            
        }

       
        }  
    )

    //repetimos esto con artistas y almbumes cambiandole el link luego del search/
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + loBuscado)
    .then(
        function (respuesta){
            return respuesta.json();

        }
    )

    .then(
        function (resultado){

        let resultadoArtista = resultado.data
         console.log(resultado)

         if (resultadoArtista == undefined || resultadoArtista.length == 0) {
            document.querySelector(".listadoResultadoArtistas").innerHTML =
            `
            <p>NO SE HAN ENCONTRADO ARTISTAS</p>
            `
        }


        for (let index = 0; index < resultadoArtista.length; index++) {
            const cadaResultadoArtista = resultadoArtista[index];
            
            
            let artistImg = cadaResultadoArtista.picture_big;
            let artistName = cadaResultadoArtista.name;
            let artistId = cadaResultadoArtista.id;

            

            let htmlResultadoArtista = `
         <li>
            <div class="slide">
                <a href="detalleartista.html?idDeArtista= ` + artistId + ` ">
                 <img class="imgslide" src="` + artistImg + `" alt="">
                 <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + artistName + `</h3></div>
              </a>
            </div>
        </li>
        `
        document.querySelector(".listadoResultadoArtistas").innerHTML += htmlResultadoArtista
            
            
           
        }

       
        }  
    )

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + loBuscado)
    .then(
        function (respuesta){
            return respuesta.json();

        }
    )

    .then(
        function (resultado){

        let  resultadoAlbum = resultado.data
         console.log(resultado)

         
         if (resultadoAlbum == undefined || resultadoAlbum.length == 0) {
            document.querySelector(".listadoResultadosAlbums").innerHTML =
            `
            <p>NO SE HAN ENCONTRADO ALBUMES</p>
            `
        }

        for (let index = 0; index < resultadoAlbum.length; index++) {
            const cadaResultadoAlbum = resultadoAlbum[index];
            
            
            let albumImg = cadaResultadoAlbum.cover_big;
            let albumTitle = cadaResultadoAlbum.title;
            let albumId = cadaResultadoAlbum.id;

            

            let htmlResultadoAlbum = `
         <li>
            <div class="slide">
                <a href="albums.html?idDeAlbum= ` + albumId + ` ">
                 <img class="imgslide" src="` + albumImg + `" alt="">
                 <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + albumTitle + `</h3></div>
              </a>
            </div>
        </li>
        `
        document.querySelector(".listadoResultadosAlbums").innerHTML += htmlResultadoAlbum
            
            
           
        }

       
        }  
    )

})