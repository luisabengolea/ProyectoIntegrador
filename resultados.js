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

            resultado = resultado.data
         console.log(resultado)

         if (gifsPopulares.length == 0) {
            alert("No hay resultados");
        }

        for (let index = 0; index < 1; index++) {
            const cadaResultado = resultado[index];
            
            let trackTitle = cadaResultado.title
            let trackArtist = cadaResultado.artist.name
            let nombreAlbum = cadaresultado.album.title
            let trackImg = cadaResultado.album.cover_medium
            let duracion = cadaResultado.duration
            let trackId = cadaResultado.index

            let htmlResultado = `
            <li>
            <div class="slide">
              <a href="detallecancion.html?iddeTrack=` + trackId + `">
              <img class="imagencancion imgslide" src="` + trackImg + `" alt=" "></a>
              <div class="uk-position-bottom-center uk-panel"><h3 class="textoslide">` + trackTitle + `</h3></div>
            </div>
        </li>
        `
        document.querySelector(".listadoResultados").innerHTML += htmlResultado
            
            
           
        }

       
        }  
    )
})