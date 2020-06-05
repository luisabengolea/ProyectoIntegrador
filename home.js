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

       // Trabaja el resultado  y armar vafiables con los reusltados para tenerlos almacenados 

            for (let i = 0; i < artistasPopulares.length; i ++){
                const cadaArtista = artistasPopulares[i];
                
                let artistImg = cadaArtista.picture_big;
                let artistName = cadaArtista.name;
                let artistId = cadaArtista.id;

                let htmlNuevoArtista = `
             <li>
                <div class="slide">
                    <a href="detalleartista.html?idDeArtista= ` + artistId + ` ">
                     <img src="` + artistImg + `" alt="">
                     <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + artistName + `</h3></div>
                  </a>
                </div>
            </li>
                    `
                
                document.querySelector(".listadoArtistasPopulares").innerHTML += htmlNuevoArtista
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

                let htmlNuevoTrack = `
            <li>
                <div class="slide">
                  <a href="detallecancion.html?iddeTrack=` + trackId + `">
                  <img class="imagencancion" src="` + trackImg + `" alt=" "></a>
                  <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + trackTitle + `</h3></div>
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
                  <img src="`+ genreImg + `" alt="">
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
})