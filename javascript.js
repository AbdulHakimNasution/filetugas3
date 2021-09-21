function perkalian() {
	let x = document.getElementById("num1").value;
	let y = document.getElementById("num2").value;
	let z = x*y;

	alert(x+" x "+y+" = "+z)
}
function pembagian(){
	let x = document.getElementById("num1").value;
	let y = document.getElementById("num2").value;
	let z = x/y;

	alert(x+" : "+y+" = "+z)
}
function pertambahan() {
	let x = document.getElementById("num1").value;
	let y = document.getElementById("num2").value;
	let z = parseInt(x)+parseInt(y);

	alert( x+" + "+y+" = "+z)
}
function pengurangan() {
	let x = document.getElementById("num1").value;
	let y = document.getElementById("num2").value;
	let z = x-y;

	alert( x+" - "+y+" = "+z)
}
		