window.addEventListener ("load", function(){
    let queryString = new URLSearchParams (location.search)
    let codigoCancion = queryString.get ("idDeTrack")
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoCancion )
    .then(
        function (respuesta) {
            return respuesta.json ();
        }
    )
//respuesta
    .then(
        function (information) {
    
        let laCancion = information;
        console.log (information)

        
       let nombreCancion = laCancion.title;
       let artistaCancion = laCancion.artist;
       let albumCancion = laCancion.album;
   
       


   
    document.querySelector (".unica").innerHTML += htmlNuevoCancion
        
        
        

        


           
        }
    )
 })