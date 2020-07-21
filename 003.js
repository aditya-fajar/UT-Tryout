function max(numbers){
	// console.log("Angka terbesar: " + Math.max.apply(null,numbers));
	console.log("Nilai maksimal: " + Math.max(...numbers));
}

function min(numbers){
	// console.log("Angka terbesar: " + Math.min.apply(null,numbers));
	console.log("Nilai minimal: " + Math.min(...numbers));
}

function average(numbers) {
	var sum = 0;
	for(var i = 0; i < numbers.length; i++){
    	sum += parseInt(numbers[i]);
	}
	var average = sum/numbers.length;
	console.log("Nilai rata-rata: " + average);
}

//set random 10 angka dari angka 1-100
var deretAngka = [];
randomNumber(1,100,10);

function randomNumber(min,max,jumlahData){
	for(var z = 0; z < jumlahData; z++){
		deretAngka.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
}

//set manual angka
// var deretAngka = [1,2,3,4,5,6,7,8,9,10];

console.log(deretAngka);
max(deretAngka);
min(deretAngka);
average(deretAngka);