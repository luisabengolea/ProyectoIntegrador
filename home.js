window.addEventListener("load",function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function (respuesta){
            return respuesta.json();
        }
    )
    //DESEMPAQUETA LA RESPUESTA
    .then(
        function(informacion) {
         
           
        let artistasPopulares = informacion.artists.data;
            // console.log aca para ver que contiene la infromacion de data de charts 

     

            for (let i = 0; i < artistasPopulares.length; i ++){
                const cadaArtista = artistasPopulares[i];

  
                
                let artistImg = cadaArtista.picture_big;
                let artistName = cadaArtista.name;
                let artistId = cadaArtista.id;

                // armo variables 

                let htmlNuevoArtista = `
             <li>
                <div class="slide">
                    <a href="detalleartista.html?idDeArtista=` + artistId + ` ">
                     <img class="imgslide" src="` + artistImg + `" alt="">
                     <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + artistName + `</h3></div>
                  </a>
                </div>
            </li>
                    `


                
                document.querySelector(".listadoArtistasPopulares").innerHTML += htmlNuevoArtista
            }

            
            
            
        }  
    )

    //VOLVEMOS A HACER LO MISMO CON GENEROS Y TRACKS 
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function (respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(informacion) {
         
            
        let tracksPopulares = informacion.tracks.data
        console.log(informacion)
       // Trabaja el resultado  y armar variables con los reusltados para tenerlos almacenados 

            for (let i = 0; i < tracksPopulares.length; i ++){
                const cadaTrack = tracksPopulares[i];
                
                let trackImg = cadaTrack.album.cover_big;
                let trackTitle = cadaTrack.title;
                let trackId = cadaTrack.id;
                let trackArtist = cadaTrack.artist.name

                let htmlNuevoTrack = `
            <li>
                <div class="slide">
                    <a href="detallecancion.html?idDeTrack=` + trackId + `">
                    <div>
                        <img class="imagencancion" src="` + trackImg + `" alt=" "></a>
                        <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + trackTitle + `-` + trackArtist +  `</h3></div>
                    </div>
                </div>
            </li>
                    `
                
                document.querySelector(".listadoTracksPopulares").innerHTML += htmlNuevoTrack
            }
            //elijo que parte del html quiero reemplazar 
            
            
            
        }  
    )

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(
        function (respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(informacion) {
         
            
        let porGeneros = informacion.data
        console.log(informacion)
       // Trabaja el resultado  y armar variables con los reusltados para tenerlos almacenados 

            for (let i = 0; i < porGeneros.length; i ++){
                const cadaGenero = porGeneros[i];
                
                let genreImg = cadaGenero.picture_big;
                let genreName = cadaGenero.name;
                let genreId = cadaGenero.id;

                let htmlNuevoGenero = `                     
            <li>
                <div class="slide">
                  <a href="detallegenero.html?iddeGeneros=` + genreId +`">
                  <img class="imgslide" src="`+ genreImg + `" alt="">
                  <div class="uk-position-center uk-panel "><h3 class="textoslide2">` + genreName + `</h3></div>
                  </a>
                </div>
            </li>
                
                    `
                
                
                document.querySelector(".listadoGeneros").innerHTML += htmlNuevoGenero
            }
            //elijo que parte del html quiero reemplazar 
            
            
            
        }  
    )
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function (respuesta){
            return respuesta.json();
        }
    )
    //DESEMPAQUETA LA RESPUESTA
    .then(
        function(informacion) {
         
           
        let albumsPopulares = informacion.albums.data;
            // console.log aca para ver que contiene la infromacion de data de charts 

      

            for (let i = 0; i < albumsPopulares.length; i ++){
                const cadaAlbum = albumsPopulares[i];

                
                
                let albumsImg = cadaAlbum.cover_big;
                let albumName = cadaAlbum.title;
                let albumId = cadaAlbum.id;

                // armo variables 

                let htmlNuevoAlbum = `
             <li>
                <div class="slide">
                    <a href="albums.html?idDeAlbum=` + albumId + ` ">
                     <img class="imgslide" src="` + albumsImg + `" alt="">
                     <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + albumName + `</h3></div>
                  </a>
                </div>
            </li>
                    `

     
                
                document.querySelector(".listadoAlbumsPopulares").innerHTML += htmlNuevoAlbum
            }
           
            
        }  
    )

})