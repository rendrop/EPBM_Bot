function hackEPBM(jumlah_dosen, kesan){
    mi = kesan
    ma = kesan + 1
    for(i=1;i<=16;i++){
        choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
        formattedNumber = (6 + i) 
        if(i==16){
            formattedNumber = ("22")
			}
		if(i<=3){
			formattedNumber = ("0" + (6 + i))
			}
        target = "#JawabanMK_19"+formattedNumber+choose
        $(target).click();
    }
    // isi form dosen
    for(i=1;i<=jumlah_dosen;i++){
        for(j=1;j<=14;j++){
            formattedNumber = ("197" + (j + 1))
		if(j>=9){
			formattedNumber = ("198" + (j - 9))
			}
        if(j==9){
            formattedNumber = ("1980")
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
