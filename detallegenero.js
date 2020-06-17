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

         

        
            
         let genreImg = cadaGenero.picture_big;
         let genreName = cadaGenero.name;
         let genreId = cadaGenero.id;
         
                
            
            document.querySelector(".listadoGeneros").innerHTML += htmlNuevoGenero
        

    

       
        }  
    )
})