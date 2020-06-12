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
            
            let nombreTrack = cadaResultado.title
            let nombreArtista = cadaResultado.artist.name
            let nombreAlbum = cadaresultado.album.title
            let fotoTrack = cadaResultado.album.cover_medium
            let duracion = cadaResultado.duration
            let trackID = cadaResultado.index

            let htmlResultado = `
            
        `
        document.querySelector(".buscar").innerHTML += htmlResultado
            
            
           
        }

       
        }  
    )
})