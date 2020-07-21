function oddEven(number){
	if(isNaN(number)){
		console.log(number + " bukan sebuah angka");
	}
	else{
		if(number%2 == 0){
			console.log(number + " adalah angka Genap");
		}
		else{
			console.log(number + " adalah angka Ganjil")
		}
	}	
}

oddEven(10) // output genap
oddEven(5) // output ganjil