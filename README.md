EPBM Bot
=========

Heavily based on Herdian Nugraha's autoepbm and Lu William Hanugra's renewed version of it.

A small js code for automatic form filling in Evaluasi Penyelenggaraan Proses Belajar Mengajar (EPBM).

More information:
http://code.cs.ipb.ac.id/herdian_nugraha12u/autoepbm
https://github.com/williamhanugra/epbm-hack

How to use ?
------------

* Login into EPBM, https://simak.ipb.ac.id/EPBMOnline/EPBM.
* Choose course.
* Open javascript console, Chrome (ctrl+shift+j), Firefox (ctrl+shift+k)
* Copy this code 

```
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

```
* and paste to console
* count number of *dosen*/lecturers
* rate them ! (1,2,3)
* type `hackEPBM(jumlah_dosen, kesan)`
* e.g `hackEPBM(4, 3)`
* Submit and Enjoy

| Kesan         | Random-Choose                         |
| :------------:|:-------------------------------------:|
| 1             | Sangat Tidak Setuju atau Tidak Setuju |
| 2             | Tidak Setuju atau Setuju              |
| 3             | Setuju atau Sangat Setuju             |

Disclaimer
==========

Any actions and or activities related to the material contained within this repository is solely your responsibility. The misusage of the information in this repository can result in criminal charges brought against the persons in question. The authors will not be held responsible in the event any criminal charges be brought against any individuals misusing the information in this repository to break the law.
