
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.866667, lng:2.333333 },
    zoom: 12,
  }); 
    
      let req = new XMLHttpRequest();
      req.open("GET","http://localhost/TP-menuPrenium-api/resto.json");

      req.onreadystatechange = function(){
          if(req.readyState == XMLHttpRequest.DONE && req.status == 200){

          let  data = JSON.parse(req.responseText);

          let liste = document.getElementById("liste");
          data.forEach(function (resto) {
              const listeElt = document.createElement('li');
              listeElt.innerHTML = resto.restaurantName + "<br>"  + resto.address + "<br>";
              liste.appendChild(listeElt);
              const repere = { lat: resto.lat, lng: resto.long }
              const marker = new google.maps.Marker({
                  position: repere,
                  map: map,
                });
          });
        }      
     }
      req.send();
      //Initialisation de la geolocalisation

          // if (navigator.geolocation) {
          //     navigator.geolocation.getCurrentPosition(function (position) {
          //         const pos = {
          //             lat: position.coords.latitude,
          //             lng: position.coords.longitude
          //         };
          //         map.setCenter(pos);
          //     });
          // } else {
          //     // Si le navigateur n'a pas supporté la geolocalisation
          //     console.log("Echec de la géolocalisation");
          // }

          // const test = { lat: 48.542460, lng: 7.776520 };

  }

  

