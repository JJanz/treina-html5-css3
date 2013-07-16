function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else{
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;
  var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";

  document.getElementById("mapa").innerHTML = "<img src='" + img_url + "'>";
}

function showError(error) {
  console.log('shit')
  switch(error.code) {
    case 1:
      x.innerHTML = "O usuário negou o acesso ao seu local."
      break;
    case 2:
      x.innerHTML = "A informação de local está indisponível."
      break;
    case 3:
      x.innerHTML = "A requisição do local do usuário demorou tempo demais para responder."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "Um erro desconhecido ocorreu."
      break;
  }
}

var x=document.getElementById("info");
document.getElementById("consultar").onclick = getLocation;
