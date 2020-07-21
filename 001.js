function grade(score){
	if(isNaN(score)){
		console.log("Inputan harus berupa angka");
	}
	else{
		if(score >= 90){
			console.log("A");
		}
		else if(score >= 80 && score < 90){
			console.log("B");
		}
		else if(score >= 70 && score < 80){
			console.log("C");
		}
		else if(score >= 60 && score < 70){
			console.log("D");
		}
		else{
			console.log("E");
		}	
	}
	
}

grade(10) // output E
grade(80) // output B
grade(90) // output A