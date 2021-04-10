function hackEPBM(jumlah_dosen, kesan){
	mi = kesan
	ma = kesan + 1
    
	// isi form matkul
	for(i=1;i<=10;i++){
		choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
		formattedNumber = (37 + i) 
		target = "#JawabanMK_22"+formattedNumber+choose
	$(target).click();
	}
	
	// isi form dosen
	for(i=1;i<=jumlah_dosen;i++){
		for(j=1;j<=11;j++){
			formattedNumber = ("22" + (47 + j))
			choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
			target = "#JawabanDosen_"+i+j+formattedNumber+choose
			$(target).click();
		}
	}
	$("#Pernyataan").prop("checked", true);
	$("#mbuh").removeClass("alert alert-danger");
	$("#mbuh").addClass("alert alert-success");
	
	// i = dosen ke
	// j = pertanyaan ke
	// formattedNumber = pattern
	
}
