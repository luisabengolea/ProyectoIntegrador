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
            
            let porGeneros = informacionGeneros
            console.log(informacionGeneros)
         

            let genreImg = porGeneros.picture_medium;
            let genreName = porGeneros.name;
            let genreId = porGeneros.id;

        

            let htmlGeneros = ` 
            <div class="subtitulo">  ` + genreName + ` </div>
                    
            
        
            `
            document.querySelector (".arriba").innerHTML += htmlGeneros

            let htmlDelGenero= `
            <h1 class="genre"> ` + genreName + ` </h1>
            <img class="img"  src=" ` + genreImg + ` " alt="">  
            `
            document.querySelector (".listadoGeneros").innerHTML += htmlDelGenero
            
        
             }  )

        
})