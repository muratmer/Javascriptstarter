let city = document.getElementById("city");
let degree = document.getElementById("degree");
let status = document.getElementById("status");

navigator.geolocation.getCurrentPosition(function(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
 let url1 = "https://fcc-weather-api.glitch.me/api/current?lat="+ lat + "&lon=" + long
 fetch(url1)
 	.then((resp) => resp.json()) // Transform the data into json
   	.then(function(data){
 		

 		city.innerText = data.name + ;
 		degree.innerText = data.main.temp + " C";
 		degree.addEventListener("click", changeDegree)
 		function changeDegree(){
if (degree.innerText === data.main.temp + " C"){
	degree.innerText = (data.main.temp*1.8)+32 + " F"; 
}else{
	degree.innerText = data.main.temp + " C";
}
 		};

 		status.innerHTML = "<img src=" + data.weather[0].icon + "/>";

 	})


});