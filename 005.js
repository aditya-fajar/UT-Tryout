function leapyear(y1,y2)
{
	for(var i = y1; i <= y2; i++){
		if(i % 100 === 0 || i % 400 === 0 || i % 4 === 0){
			console.log(i + " adalah tahun kabisat");
		}else{
			console.log(i + ' bukan tahun kabisat');
		}
	}
}

leapyear(2000,2020);