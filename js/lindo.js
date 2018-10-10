window.onload = function() {
	document.body.style.backgroundColor = "#f0f8ff";
	document.body.style.margin = "0px";
	document.body.style.color = "#111";
	document.body.style.fontFamily = "monospace";	
	document.getElementsByTagName("h1")[0].style.color = "#f9f9f9";
	document.getElementsByTagName("h1")[0].style.backgroundColor = "#222";
	document.getElementsByTagName("h1")[0].style.paddingLeft = "10px";

	y = document.getElementsByTagName("span");		
	for (i = 0; i < y.length; i++) {
		y[i].style.marginLeft = "40px";		
	}	
};