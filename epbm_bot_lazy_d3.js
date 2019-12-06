function hackEPBM(jumlah_dosen, kesan){
	mi = kesan
	ma = kesan + 1
	for(i=1;i<=10;i++){
		choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
		formattedNumber = ("5" + i).slice(-2)
		if(i==10){
			formattedNumber = ("60")
		}
		target = "#JawabanMK_16"+formattedNumber+choose
		$(target).click();
	}
	// isi form dosen
	for(i=1;i<=jumlah_dosen;i++){
		for(j=1;j<=10;j++){
			formattedNumber = ("170" + j)
		if(j==10){
			formattedNumber = ("1710")
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


hackEPBM(100,3);
$("save").click();
