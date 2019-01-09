function hackEPBM(jumlah_dosen, kesan){
	mi = kesan
	ma = kesan + 1
	for(i=1;i<=10;i++){
		choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
		formattedNumber = ("8" + i).slice(-2)
		if(i==10){
			formattedNumber = ("90")
		}
		target = "#JawabanMK_14"+formattedNumber+choose
		$(target).click();
	}
	// isi form dosen
	for(i=1;i<=jumlah_dosen;i++){
		for(j=1;j<=10;j++){
			formattedNumber = ("155" + j)
		if(j==10){
			formattedNumber = ("1560")
}
			choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
			target = "#JawabanDosen_"+i+j+formattedNumber+choose
			$(target).click();
			$("#Pernyataan").prop("checked", true)
		}
	}
}