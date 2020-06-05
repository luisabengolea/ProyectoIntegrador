window.addEventListener ("load", function(){
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/")
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
       let 
       


    let htmlNuevoCancion = `
        <div class="a"> 
        <p class="heart"><i class="fa fa-heart"></i></p>
        <p class="mobile"> ` + nombreCancion + ` </p>
        <p class="mobile"> ` + artistaCancion + ` </p>
        <p class="album"> ` + albumCancion + ` </p>
        <p class="minutos">4:24</p>
        </div>
    `
    document.querySelector (".unica").innerHTML += htmlNuevoCancion
        
        
        

        


           
        }
    )
 })