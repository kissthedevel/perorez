# perorez


//ex. gelocalization
my_position = function(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	if (lon <= 18.5 && lon >= 6.7) {
		PENPOSITION = 'it'
	} else if (lon <= 134.7 && lon >= 73.9) {
		PENPOSITION = 'zh'
	} else {
		PENPOSITION = 'zh'
	}
}

navigator.geolocation.getCurrentPosition(my_position)



//---Prevenire il tasto Back accidentale (solo su webapp)
window.onbeforeunload = function() { 
    return "Confermare uscita dal portale?"
}
