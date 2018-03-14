var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i < 6; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
newImage.onclick = function(e){
	var nimg = e.target.getAttribute("src") ;
	displayImage(nimg) ;

}
function displayImage(nimg){
	displayedImage.setAttribute('src', nimg);
}

}


/* Wiring up the Darken/Lighten button */
btn.onclick = function(e){
	var btnstatus = e.target.getAttribute("class");
	if (btnstatus === "dark"){
		btn.textContent = "Lighten";
		btn.setAttribute("class", "light");
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	}
	else{
		btn.textContent = "Darken";
		btn.setAttribute("class", "dark");
		overlay.style.backgroundColor = "rgba(0,0,0,0)";

	}
}

