 const countdown = document.getElementById("countdown");
 const daysCountdown = document.getElementById("daysCountdown");
 const hoursCountdown = document.getElementById("hoursCountdown");
 const minsCountdown = document.getElementById("minsCountdown");
 const secondsCountdown = document.getElementById("secondsCountdown");


//Set launch Date ms

const launchDate = new Date("Jan 1,2019 13:00:00").getTime();

//update every second

const intvl = setInterval(() => {
	//Get todays date and time ms
	const now = new Date().getTime();

	//distance from today to launch date

	const distance = launchDate - now;

//Time calculation

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const secs = Math.floor((distance % (1000 * 60)) / (1000));

//Display results
daysCountdown.innerText = days + " Days";
hoursCountdown.innerText = hours + " Hours";
minsCountdown.innerText = mins + " Minutes";
secondsCountdown.innerText = secs + " Seconds";

//If launch date passed
if(distance<0){
	clearInterval(intvl);
	countdown.style.color ="#17a2b8";
	countdown.innerHTML = "Launched !"
}

}, 1000);