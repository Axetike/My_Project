"use strict"


const arrowApp = document.querySelectorAll('.time-add');
const arrowSubtract = document.querySelectorAll('.time-subtract');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const btn = document.querySelector('.btn-start-stop');
const arrow = document.querySelectorAll('.time-arrow');





/*Настроики таимера*/
arrowApp.forEach( function(elem) {
	elem.addEventListener('click', function(el) {
		let dataValue = el.currentTarget.getAttribute('data-app');
		let time = document.querySelector(`[data-time="${dataValue}"]`); 
		time.textContent  = parseInt(time.textContent ) + 1
		if (time.textContent  < 10) {
			time.textContent  = '0' + time.textContent 
		}

		if ( time == hours && time.textContent > 23) {
			time.textContent = '00'
		}

		if (time.textContent > 59) {
			time.textContent = '00'
		}
		
	});
});


arrowSubtract.forEach( function(elem) {
	elem.addEventListener('click', function(el) {
		let dataValue = el.currentTarget.getAttribute('data-subtract');
		let time = document.querySelector(`[data-time="${dataValue}"]`); 
		time.textContent  = parseInt(time.textContent ) - 1
		
		if ( time == hours && time.textContent < 0) {
			time.textContent = 23
		}

		if (time.textContent < 0) {
			time.textContent = '59'
		}

		if (time.textContent  < 10) {
			time.textContent  = '0' + time.textContent 
		}
		
	});
});






/*Активация таимера*/
btn.addEventListener('click', function(){
	bntChanges();
	countdown();
})







/*Стилизация кнопки при вкл/выкл*/
function bntChanges() {
	btn.classList.toggle('active');
	arrowChanges();
	if (btn.classList.contains('active')) {
		btn.textContent = 'Стоп'
	} else {
		btn.textContent = 'Старт'
	}
}
 function arrowChanges() {
 	arrow.forEach(function(elem) {
 		elem.classList.toggle('active');
 	})
 }


/*Отсчет таимера*/
function countdown() {
	if (!btn.classList.contains('active')) {
		return;
	} 

	else if (btn.classList.contains('active')) {
	
		if (parseInt(seconds.textContent) > 0) {
			seconds.textContent = parseInt(seconds.textContent) - 1;
			if (seconds.textContent  < 10) {
				seconds.textContent  = '0' + seconds.textContent 
			}
		} else if (parseInt(minutes.textContent) > 0) {
			minutes.textContent = parseInt(minutes.textContent) - 1;
			seconds.textContent = 59;
			if (minutes.textContent  < 10) {
				minutes.textContent  = '0' + minutes.textContent 
			}
		} else if (parseInt(hours.textContent) > 0) {
			hours.textContent = parseInt(hours.textContent) - 1;
			minutes.textContent = 59;
			if (hours.textContent  < 10) {
				hours.textContent  = '0' + hours.textContent 
			}
		} else {
			bntChanges();
			alert("Конец");
			return;
		}


	} 
 
}


setInterval(countdown, 1000);


