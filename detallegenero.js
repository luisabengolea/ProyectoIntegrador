window.addEventListener("load",function(){
    let queryString = new URLSearchParams(location.search)

    let losGeneros = queryString.get ("iddeGeneros");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + losGeneros)
    .then(
        function (respuesta){
            return respuesta.json();

        }
    )

    .then(
        function (resultado){

        let generoCancion = resultado
         console.log(resultado)

         

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
                
            
            document.querySelector(".listadoGeneros").innerHTML += htmlNuevoGenero
        

    

       
        }  
    )
})