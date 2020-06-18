window.addEventListener("load", function() {



    // Chequeo si hay canciones favoritas en storage

    if(localStorage.getItem("cancionesPreferidas") != null) {

        // Leemos las favoritas

        let cancionesPreferidas = localStorage.getItem("cancionesPreferidas").split(",")

        //Recorremos el array de favoritos
        for (let i = 0; i < cancionesPreferidas.length; i++) {

            // Traigo de Deezer el detalle de cancion que ya lo tenemos 

            //ponemos cancionesPreferidas [i] porque estamos reemplazando el index por nuestra variable 
            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + cancionesPreferidas[i] + "" )
            .then(
                function(respuesta) {
                    return respuesta.json();   
                           
                }
            )
            .then(
                function(resultado) {
                    // Acá es donde trabajamos la info
                    console.log (resultado)   
                
                    let laCancion = resultado.data;

                    let nombreCancion = laCancion.title;
                    let artistaCancion = laCancion.artist.name;
                    let albumCancion = laCancion.title;
                    let imagenCancion = laCancion.album.cover_big
                    let añoCancion = laCancion.release_date
                    let tiempoCancion = laCancion.duration + " " + "segundos"

                    // muestro la lista de canciones preferidas

                    let htmlNuevaCancion = `
                
                <div class="a"> 
                        <p class="heart"><i class="fa fa-heart"></i></p>
                        <p class="mobile">` + nombreCancion + `</p>
                        <p class="mobile">` + artistaCancion + `</p>
                        <p class="album">` + albumCancion +`</p>
                        <p class="minutos">`+ tiempoCancion +` </p>
                </div>
                    `
                
                    document.querySelector(".canciones").innerHTML += htmlNuevaCancion
                    
                }
            )

        }

    } else {    
        alert("Todavia no tienes canciones favoritas en tu playlist")
    }
})
    