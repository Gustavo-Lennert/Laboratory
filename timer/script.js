const btnStop = document.getElementById('stop');
const btnStart = document.getElementById('start');
const btnReset = document.getElementById('reset');
const timer  = document.querySelector('.timer');
let secounds = 0;
let counter = 0;

function getTimeFromSeconds(secounds) {
	const data = new Date(secounds * 1000);

	return data.toLocaleTimeString('pt-BR', {
		hour12: false,
		timeZone: 'GMT',
	});
}

function startTimer(){
	btnStart.disabled = true;
	counter = setInterval(() =>{
		secounds++;
		timer.innerHTML = getTimeFromSeconds(secounds);
	}, 1000);
}

btnStart.addEventListener('click', ()=>{
	clearInterval(counter);
	let timer  = document.querySelector('.timer');
	timer.classList.remove("pause");
	btnStart.innerText = "Iniciar";
	startTimer();
});

btnStop.addEventListener('click', ()=>{
	timer.classList.add("pause");
	btnStart.disabled = false;
	btnStart.innerText = "Retomar";
	clearInterval(counter);
});

btnReset.addEventListener('click', ()=>{
	clearInterval(counter);
	timer.classList.remove("pause");
	btnStart.disabled = false;
	timer.innerText = "00:00:00";
	btnStart.innerText = "Iniciar";
	secounds = 0;
});