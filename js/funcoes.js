var config = false;
var camera = false;

function toggleConfig(){

	if (!config){
		document.getElementById("modelo").style.display = "none";
		document.getElementById("config").style.display = "block";
		setTimeout('start()', 2000)
		document.getElementById("canvas3").style.display = "block";
		config = true;
		camera = true;
	} else {
		document.getElementById("modelo").style.display = "block";
		document.getElementById("config").style.display = "none";
		config = false;
	}
}

function toggleCamera(){
	var canvas = document.getElementById("canvas3");
	if (camera) {
		canvas.style.display = "none"; 
		camera = false;
	} else {
		canvas.style.display = "block"; camera = true;
	}
	//canvas.toggle(); //JQuery function
}

//var canvas = document.getElementsByClassName('x3dom-canvas')[0];
//canvas.width  = window.innerWidth;
//canvas.height = window.innerHeight;

function switcher(opcao, nomeSwitcher){
	document.getElementById(nomeSwitcher).whichChoice = opcao;
}

function showText(text, arq){
	var vet = text.split(".");
	var text2="";
	for (var i in vet) {
 		text2 += vet[i] + ".</p><p>";
	}
	text2 = "<p>"+ text2 +"</p>";

	var info = document.getElementById("info");
	if(text2 != info.innerHTML){
		info.innerHTML = text2;
		playAudio(arq);
	}
	//elem.style.cursor = "help";
}

function playAudio(arq){
	var audioSrc = document.getElementById("audio");
	var audioControl = document.getElementById("audioControl");
	audioSrc.src = "audio/" + arq;
	audioControl.load();
	setTimeout(function(){ audioControl.play() }, 1000);
}

function fullscreen (element) {
	if(element.requestFullscreen) {
		element.requestFullscreen();
	} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if(element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if(element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}

