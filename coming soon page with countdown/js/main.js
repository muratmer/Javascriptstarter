 const countdown = document.querySelector("countdown");

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

countdown.innerHTML = '<div>${days}</div><div>${hours}</div><div>${mins}</div><div>${secs}</div>'
}, 1000);