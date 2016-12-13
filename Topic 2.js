function validateAbbreviation(state){
	var statez = state.value;
	var statezz = statez.toLowerCase();
	var states = new Array ("wa", "or", "ca", "ak", "nv", "id", "ut", "az", "hi", "mt", "wy", "co", "nm", "nd", "sd", "ne", "ks", "ok", "tx", "mn", "ia", "mo", "ar", "la", "wi", "il", "ms", "mi", "ky", "tn", "al", "fl", "ga", "sc", "nc", "oh", "wv", "va", "pa", "ny", "vt", "me", "nh", "ma", "ri", "ct", "nj", "de", "md", "dc");
	for (var i = 0; i < states.length; i++){
		if (states[i] === statezz) {
			document.getElementById("stateError").innerHTML = "";
			break;
		}
		else{
			document.getElementById("stateError").innerHTML = "   Invalid state abbreviation";
		}
	}
}

//*******************************************************************************************************************************

function person(fName, lName, dob, address){
	this.firstName = fName;
	this.lastName = lName;
	this.birthDay = dob;
	this.address = address;
}

var mom = new person("Kim", "Robinson","10/20/1970", "21408 E Creosote Ln.");
var dad = new person("Evan", "Robinson","04/03/1965", "21408 E Creosote Ln.");
var sister = new person("Kylee","Nickerson","07/22/1987", "21605 E Camina Plata");
var me = new person("Casey", "Robinson", "01/10/1994","1921 S Yellowstone Ave.");

function loadmom(){
alert("Name: " + mom.firstName + " " + mom.lastName + "\nAddress: " + mom.address + "\nDate of Birth: " + mom.birthDay);
}

function loaddad(){
alert("Name: " + dad.firstName + " " + dad.lastName + "\nAddress: " + dad.address + "\nDate of Birth: " + dad.birthDay);
}

function loadsis(){
alert("Name: " + sister.firstName + " " + sister.lastName + "\nAddress: " + sister.address + "\nDate of Birth: " + sister.birthDay);
}

//*********************************************************************************************************************************

function loadJSON() {
  var xhttp;
	if (window.XMLHttpRequest) {
	    // code for modern browsers
	    xhttp = new XMLHttpRequest();
	    } else {
	    // code for IE6, IE5
	    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var json = JSON.parse(this.responseText);
     document.getElementById("num5").innerHTML = json.employees[1].firstName;

    }
  };
  xhttp.open("GET", "ajax_info.json", true);
  xhttp.send();
}

//**********************************************************************************************************************************
 
