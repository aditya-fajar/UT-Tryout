var json_obj =	[
 					{ "id": 1, "name": "Udin", "age": 12 },
  					{ "id": 2, "name": "Reane", "age": 51 },
  					{ "id": 3, "name": "Budi", "age": 34 },
  					{ "id": 4, "name": "Agus", "age": 16 },
  					{ "id": 5, "name": "Sari", "age": 19 },
  					{ "id": 6, "name": "Ririn", "age": 20 },
  					{ "id": 7, "name": "Dessy", "age": 23 }
				]

function below21(json_obj){
	console.log("Daftar Orang Berusia Dibawah 21 Tahun:")
	for(data in json_obj){
		if(json_obj[data].age <= 21)
		console.log(json_obj[data].name + " " + json_obj[data].age + " tahun");
	}	
}

below21(json_obj);
