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
         
         function(informacionGeneros) {
            
            let porGeneros = informacionGeneros.data
            console.log(informacionGeneros)
         

         for (let i = 0; i < porGeneros.length; i ++){
            const cadaGenero = porGeneros[i];
            
            let genreImg = cadaGenero.picture_big;
            let genreName = cadaGenero.name;
            let genreId = cadaGenero.id;

            let htmlNuevoGenero = `                     
            <h1> ` + genreName + ` </h1>
            `

            document.querySelector(".categoriacancion").innerHTML += htmlNuevoGenero
            }
        
             }  )

        
})