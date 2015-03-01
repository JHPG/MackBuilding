var config = false;

function configurar(){

	if (!config){
		document.getElementById("modelo").style.display = "none";
		document.getElementById("config").style.display = "block";
		setTimeout('start()', 2000)
		document.getElementById("canvas3").style.display = "block";
		config = true;
	} else {
		document.getElementById("modelo").style.display = "block";
		document.getElementById("config").style.display = "none";
		config = false;
	}
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
	audioSrc.src = arq;
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

