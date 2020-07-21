var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Masukkan angka> ');
rl.prompt();
angka = 0;

/*Saya agak bingung dengan maksud dari memasukkan angka tanpa batas pada soal ini, maka dari itu saya biki 2 versi, 
mohon untuk dicoba keduanya*/
//Versi 1
rl.on('line', function(line) {
  	number = line.trim().split('');
  	// console.log(number);
  	for (var i = 0; i <= number.length; i++){
  		if(number[i] != "=" && isNaN(number[i])){
  			continue;
  		}
		else if(number[i] == "="){
   			console.log('Total Jumlah: ' + angka);
        	process.exit(0);
    	}
  		else{
  			angka = angka + parseInt(number[i]);
  		}
  	}
  	rl.prompt();
}).on('close', function() {
    console.log('Program Berhenti');
    process.exit(0);
});


//Versi 2
// rl.on('line', function(line) {
//    	if(line.trim() != "=" && isNaN(line.trim())){
//    		console.log('Mohon masukkan angka');
//    	}
//    	else if(line.trim() == "="){
//    		console.log('Total Jumlah: ' + angka);
//         process.exit(0);
//    	}else if(line.trim() == ''){
//    		console.log(angka);
//    	}
//    	else{
// 		angka = angka + parseInt(line.trim());
// 		console.log(angka);
//    	}
// 	rl.prompt();
// }).on('close', function() {
//     console.log('Have a great day!');
//     process.exit(0);
// });