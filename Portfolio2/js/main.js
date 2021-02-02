/*Окно навигаций*/

document.querySelector('.burger').onclick = function () {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
};

document.querySelectorAll('.nav__ref').forEach(function (el) {
    el.onclick = function () {
    	document.querySelector('.nav').classList.toggle('active');
    	document.querySelector('.burger').classList.toggle('active');
    }
});


/*Слаидер*/

const arrowLeft = document.querySelector('.slider__btn-left');
const arrowRight = document.querySelector('.slider__btn-right');
const amtSlid = document.querySelectorAll('.slider__item');
const slideNumPos = document.querySelector('.slider__slide-num-pos');
const slideNumAll = document.querySelector('.slider__slide-num-all');



function slideShow() {
	let shift = 0;
	let slider = document.querySelector('.slider__row');
	slideNumAll.textContent = amtSlid.length;

	arrowLeft.addEventListener('click', () => {
		slideNumPos.textContent = parseInt(slideNumPos.textContent ) - 1;
		shift += 40;
		if (shift > 0) {
			slideNumPos.textContent = amtSlid.length;
			shift = - ( 40 * (amtSlid.length - 1) );
		}
		slider.style.transform = `translateX(${shift}rem)`;
	});

	arrowRight.addEventListener('click', () => {
		slideNumPos.textContent = parseInt(slideNumPos.textContent ) + 1;
		shift -= 40;
		if (shift <= - (40 * (amtSlid.length))) {
			slideNumPos.textContent = 1;
			shift = 0
		}
		slider.style.transform = `translateX(${shift}rem)`;
	});
}


slideShow();