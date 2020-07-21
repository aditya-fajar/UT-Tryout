function removeDupe(data){
	var unique = [...new Set(data)];
	return unique;	
}

var kota = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];

console.log(removeDupe(kota));