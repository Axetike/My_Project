"use strict"


/*Выбор часового пояса*/
let select = document.querySelector(".time-zone__list");
let value = select.value;


select.addEventListener('change', function() {
	currentTime();
})



/*Изменение времени в реальном времени*/
let offset;
function currentTime() {
	value = select.value;
	function timeZone() {
		let today = new Date();  
		let localoffset = -(today.getTimezoneOffset()/60);
		let destoffset = value;
		return offset = destoffset-localoffset;	
	}
	timeZone();
	const date1 = new Date( new Date().getTime() + offset * 3600 * 1000)
	
	let h = date1.getHours();
	let m = date1.getMinutes();
	let s = date1.getSeconds();
	
	h = updateTime(h);
	m = updateTime(m);
    s = updateTime(s);
	
	document.querySelector('.hours').innerHTML = h;
	document.querySelector('.minutes').innerHTML = m;
	document.querySelector('.seconds').innerHTML = s;
	
	let v = setInterval(function () { currentTime() }, 1000);

	function updateTime(k) {
	  if (k < 10) {
	    return "0" + k;
	  }
	  else {
	    return k;
	  }
	}

}


currentTime();








