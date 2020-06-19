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

       // Trabaja el resultado  y armar variables con los reusltados para tenerlos almacenados 

            for (let i = 0; i < artistasPopulares.length; i ++){
                const cadaArtista = artistasPopulares[i];

                // este for recorre todos los artistas "tredning" que hay para despues pode imprimirlos depende de su id 
                // muestra desde cuando tiene que empezar, el largo que seria la cantidad de artistas que hay y de cuanto en cuanto 
                // const representa que despues el index se va a reemplazar por la info de los artistas 
                
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

                    // desde aca pongo la estuctura que seria de solo como se ve un artista, (es un li porque el carrousel es un ul con muchos li)
                    // aca ya tengo armada esta estructur que se va a repetir siguiendo al cantidad de artistas que haya, 
                
                document.querySelector(".listadoArtistasPopulares").innerHTML += htmlNuevoArtista
            }
            //elijo que parte del html quiero reemplazar (EL UL)
            //ACA BORRAMOS TODA LA ESTRUCTURA HECHA A MANO DEL HTML y reeptida Y DEJAMOS SOLO EL UL con clase que pusimos que se va a reemplazar automaticamente  
            
            
            
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

       // Trabaja el resultado  y armar variables con los reusltados para tenerlos almacenados 

            for (let i = 0; i < albumsPopulares.length; i ++){
                const cadaAlbum = albumsPopulares[i];

                // este for recorre todos los artistas "tredning" que hay para despues pode imprimirlos depende de su id 
                // muestra desde cuando tiene que empezar, el largo que seria la cantidad de artistas que hay y de cuanto en cuanto 
                // const representa que despues el index se va a reemplazar por la info de los artistas 
                
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

                    // desde aca pongo la estuctura que seria de solo como se ve un artista, (es un li porque el carrousel es un ul con muchos li)
                    // aca ya tengo armada esta estructur que se va a repetir siguiendo al cantidad de artistas que haya, 
                
                document.querySelector(".listadoAlbumsPopulares").innerHTML += htmlNuevoAlbum
            }
            //elijo que parte del html quiero reemplazar (EL UL)
            //ACA BORRAMOS TODA LA ESTRUCTURA HECHA A MANO DEL HTML y reeptida Y DEJAMOS SOLO EL UL con clase que pusimos que se va a reemplazar automaticamente  
            
            
            
        }  
    )

})