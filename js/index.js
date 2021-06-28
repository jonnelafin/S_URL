var cont = document.getElementById("cont");
var btn  = document.getElementById("btn");
var input = document.getElementById("url");
var title = document.getElementById("title");
var options = document.getElementById("options");
var useWordsCheck = document.getElementById("useWords");

function redirect(){
	if(window.location.href.includes("?")){
		let target = window.location.href.split("?")[1];
		homelink.href = window.location.href.split("?")[0];
		let url = atob(target);
		console.log("redirecting to " + url + "..." );
		btn.outerHTML = "";
		input.outerHTML = "";
		options.outerHTML = "";
		window.location.href = url;
	}
	else{
		homelink.href = window.location.href;
		input.placeholder = window.location.href;
	}
}

function mask(url, useWords = false){
	if(useWords){
		let sum = BigInt(1);
		for(let i in url){
			sum *= BigInt(url.charCodeAt(i) + i);
		}
		console.log(sum);
		let str = sum + "";
		let out = [];
		while(str.length > 4){
			let p = str.substr(0, 4);
			str = str.substr(4);
			console.log(p);
			out.push(wordlist[p].toLowerCase());
			console.log(wordlist[p])
		}
		return window.location.href + "?" + out.join("-").substr(1);
	}
	else{
		return window.location.href + "?" + btoa(url);
	}
}
function onBtnPress(){
	let url = input.value;
	let useWords = /*useWordsCheck.checked*/false;
	let result = mask(url, useWords);
//	alert(result);
//	cont.style.gridTemplate = '".  .     .    ." 1fr ".  title .    ." 6em ".  link  link ." 48px ".  btn     btn  ." 48px ".  .     .    ." 1fr / 1fr .5fr .5fr 1fr';
	btn.outerHTML = "<p class='btn' id='btn'>" + result + "</p>";
	input.outerHTML = "";
	options.outerHTML = "";
}

//purely out of laziness
var wordlist = 
`there
was
a
100000
word
wordlist
here`.split("\n");


redirect();