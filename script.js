
const BOTON = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const PLUS = document.getElementById("plus");
const VOLUMEN = document.getElementById("volumen");
const FLUJO = document.getElementById("flujo");
const MANTENIMIENTO = document.getElementById("mantenimiento");
const INPUT = document.getElementById("peso");



BOTON.addEventListener("click", () =>{
	const PESO = parseInt(document.getElementById("peso").value);
	if (PESO > 30) {
		let volumen_plus = Math.round(calcular_volumen_plus(PESO));
		let volumen_plus_plus = Math.round(calcular_volumen_plus_plus(PESO));
		let flujo_plus = Math.round(volumen_plus / 24);
		let flujo_plus_plus = Math.round(volumen_plus_plus / 24);
		ERROR.style.display = "none";
		PLUS.style.display = "block";
		PLUS.innerHTML = "Por 1500cc" + " | " + "Por 2000cc";
		VOLUMEN.style.display = "block";
		FLUJO.style.display = "block";
		MANTENIMIENTO.style.display = "block";
		VOLUMEN.innerHTML = volumen_plus + " cc" + " | " + volumen_plus_plus + " cc";
		FLUJO.innerHTML = flujo_plus + " cc/hr" + " | " + flujo_plus_plus + " cc/hr";
		MANTENIMIENTO.innerHTML = "m+m/2 " + calcular_mantenimiento(flujo_plus) + " cc/hr" + " | " + "m+m/2 " + calcular_mantenimiento(flujo_plus_plus) + " cc/hr" ;
		
	} else if (PESO > 0) {
		let flujo = Math.round(holliday_segar(PESO) / 24);
		ERROR.style.display = "none";
		PLUS.style.display = "none";
		VOLUMEN.innerHTML = holliday_segar(PESO) + " cc";
		VOLUMEN.style.display = "block"
		FLUJO.innerHTML = flujo + " cc/hr";
		MANTENIMIENTO.innerHTML = "m+m/2 " + calcular_mantenimiento(flujo) + " cc/hr";
		FLUJO.style.display = "block";
		MANTENIMIENTO.style.display = "block";
		// console.log("Ha ingresado un peso de " + peso);
		// console.log("El flujo calculado es de " + flujo);
		// console.log("El mantenimiento calculado es " + calcular_mantenimiento(flujo));
	} else {
		ERROR.style.display = "block";
		FLUJO.style.display = "none";
		MANTENIMIENTO.style.display = "none";
	}	
});


function calcular_mantenimiento(flujo){
	return flujo * 1.5;
}

function holliday_segar(peso){
	if (peso >= 20){
		return ((peso - 20) * 20) + 1500;
	} else if (peso >= 10) {
		return ((peso - 10) * 50) + 1000;
	} else {
		return peso * 100;
	}
}

function calcular_volumen_plus(peso){
	let volumen = ((((peso * 4) + 7) / (peso + 90)) * 1500);
	return volumen;						
}

function calcular_volumen_plus_plus(peso) {
	let volumen = (((peso * 4) + 7) / (peso + 90)) * 2000;
	return volumen;
}