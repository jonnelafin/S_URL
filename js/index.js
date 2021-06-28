var cont = document.getElementById("cont");
var btn  = document.getElementById("btn");
var input = document.getElementById("url");
var title = document.getElementById("title");

function redirect(){
	if(window.location.href.includes("?")){
		let target = window.location.href.split("?")[1];
		let url = atob(target);
		console.log("redirecting to " + url + "..." );
		btn.outerHTML = "";
		input.outerHTML = "";
		window.location.href = url;
	}
}
redirect();

function shorten(url){
	return window.location.href + "?" + btoa(url);
}
function onBtnPress(){
	let url = input.value;
	let result = shorten(url);
//	alert(result);
//	cont.style.gridTemplate = '".  .     .    ." 1fr ".  title .    ." 6em ".  link  link ." 48px ".  btn     btn  ." 48px ".  .     .    ." 1fr / 1fr .5fr .5fr 1fr';
	btn.outerHTML = "<p class='btn' id='btn'>" + result + "</p>";
	input.outerHTML = "";
}
