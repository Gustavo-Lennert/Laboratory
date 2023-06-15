function clock() {
	const btnStart = document.querySelector('.start');
	const timer  = document.querySelector('.timer');
	let secounds = 0;
	let counter = 0;

	//Função para converter segundos no formato do timer
	function getTimeFromSeconds(secounds) {
		const data = new Date(secounds * 1000);

		return data.toLocaleTimeString('pt-BR', {
			hour12: false,
			timeZone: 'GMT',
		});
	}

	function startTimer(){
		btnStart.disabled = true;
		//Função de inicialização do timer
		counter = setInterval(() =>{
			//Contador de segundos
			secounds++;
			timer.innerHTML = getTimeFromSeconds(secounds);
		}, 1000);
	}

	document.addEventListener('click', function(e) {
		const element = e.target;

		if(element.classList.contains('stop')) {
			timer.classList.add("pause");
			btnStart.disabled = false;
			btnStart.innerText = "Retomar";
			//Pausa o contador
			clearInterval(counter);
		}

		if(element.classList.contains('start')) {
			//Pausa o contador, para não ocorrer multiplos starts
			clearInterval(counter);
			let timer  = document.querySelector('.timer');
			timer.classList.remove("pause");
			btnStart.innerText = "Iniciar";
			//Inicia o contador
			startTimer();
		}

		if(element.classList.contains('reset')) {
			//Pausa o contador
			clearInterval(counter);
			timer.classList.remove("pause");
			btnStart.disabled = false;
			timer.innerText = "00:00:00";
			btnStart.innerText = "Iniciar";
			//Zera os segundos para iniciar novamento
			secounds = 0;
		}
	});
}

clock();