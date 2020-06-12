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

            resultadoBusqueda = resultado.data
         console.log(resultado)

        

        for (let index = 0; index < resultadoBusqueda.length; index++) {
            const cadaResultado = resultadoBusqueda[index];
            
            let trackTitle = cadaResultado.title
            let trackArtist = cadaResultado.artist.name
            let trackAlbum = cadaResultado.album.title
            trackImg = cadaResultado.album.cover_medium
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