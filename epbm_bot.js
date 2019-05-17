function hackEPBM(jumlah_dosen, kesan){
	mi = kesan
	ma = kesan + 1
	for(i=1;i<=10;i++){
		choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
		formattedNumber = ("6" + i).slice(-2)
		if(i==10){
			formattedNumber = ("70")
		}
		target = "#JawabanMK_15"+formattedNumber+choose
		$(target).click();
	}
	// isi form dosen
	for(i=1;i<=jumlah_dosen;i++){
		for(j=1;j<=10;j++){
			formattedNumber = ("163" + j)
		if(j==10){
			formattedNumber = ("1640")
}
			choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
			target = "#JawabanDosen_"+i+j+formattedNumber+choose
			$(target).click();
			$("#Pernyataan").prop("checked", true);
			$("#mbuh").removeClass("alert alert-danger");
			$("#mbuh").addClass("alert alert-success");
		}
	}
}
