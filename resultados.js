window.addEventListener("load",function(){
    let queryString = new URLSearchParams(location.search)

    let loBuscado = queryString.get ("buscador");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado + "")
    .then(
        function (respuesta){
            return respuesta.json();

        }
    )

    .then(
        function (resultado){

        let resultadoBusqueda = resultado.data
         console.log(resultado)

        



        for (let index = 0; index < resultadoBusqueda.length; index++) {
            const cadaResultado = resultadoBusqueda[index];
            
            let trackTitle = cadaResultado.title
            let trackArtist = cadaResultado.artist.name
            let trackAlbum = cadaResultado.album.title
            trackImg = cadaResultado.album.cover_big
            let duracion = cadaResultado.duration
            let trackId = cadaResultado.index

            let htmlResultado = `
            <li>
            <div class="slide">
              <a href="detallecancion.html?iddeTrack=` + trackId + `">
              <img class="imagencancion imgslide" src="` + trackImg + `" alt=" "></a>
              <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + trackTitle + `-` + trackArtist +  `</h3></div>
            </div>
        </li>
        `
        document.querySelector(".listadoResultados").innerHTML += htmlResultado
            
            
           
        }

       
        }  
    )

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

         

        for (let index = 0; index < resultadoAlbum.length; index++) {
            const cadaResultadoAlbum = resultadoAlbum[index];
            
            
            let albumImg = cadaResultadoAlbum.cover_big;
            let albumTitle = cadaResultadoAlbum.title;
            let albumId = cadaResultadoAlbum.id;

            

            let htmlResultadoAlbum = `
         <li>
            <div class="slide">
                <a href="detalleartista.html?idDeArtista= ` + albumId + ` ">
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