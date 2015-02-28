var config = false;

function configurar(){

	if (!config){
		document.getElementById("modelo").style.display = "none";
		document.getElementById("config").style.display = "block";
		setTimeout('start()', 2000)
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

function showText(text){
	var vet = text.split("."); var text2="";
	for (var i in vet) {
 		text2 += vet[i] + ".</p><p>";
	}
	text2 = "<p>"+ text2 +"</p>";
	document.getElementById("info").innerHTML = text2;
}



/// Camera start -------------------------------------


var video = document.querySelector("#vid");
var canvas;
var ctx;
var localMediaStream = null;

var onCameraFail = function (e) {
   console.log('Camera did not work.', e);
};



function snapshot() {
	canvas = document.querySelector('#canvas');	    
	ctx = canvas.getContext('2d');
   if (localMediaStream) {
	  ctx.drawImage(video, 0, 0);
   }
}


function snapshot2() {
   canvas = document.querySelector('#canvas2');
	ctx = canvas.getContext('2d');		   
   if (localMediaStream) {
	  ctx.drawImage(video, 0, 0);
   }
}

function start(){			
	setTimeout("snapshot()",800);
	setInterval("snapshot2()",50);
	setInterval("cut()",75);					

	

	video = document.querySelector("#vid");

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia({video:true}, function (stream) {
	   video.src = window.URL.createObjectURL(stream);
	   localMediaStream = stream;
	}, onCameraFail);
}

function cut(){
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	var imgData=ctx.getImageData(0,0,c.width,c.height);

	var c2=document.getElementById("canvas2");
	var ctx2=c2.getContext("2d");
	var imgData2=ctx2.getImageData(0,0,c2.width,c2.height);

	var c3=document.getElementById("canvas3");
	var ctx3=c3.getContext("2d");
	var 	count = 1;
	// captura somente a diferença
	for (var i=0;i<imgData.data.length;i+=4)
	{
		imgData2.data[i+3]=0;

		//RED
		soma1 = imgData.data[i];
		soma2 = imgData2.data[i];
		if (soma1 < 124) soma1 = 255 - soma1;
		if (soma2 < 124) soma2 = 255 - soma2;				
		if ( (soma1/soma2 > 1.23)  |  (soma2/soma1 > 1.23)  ) imgData2.data[i+3]=255;

		//GREEN
		soma1 = imgData.data[i + 1];
		soma2 = imgData2.data[i + 1];
		if (soma1 < 124) soma1 = 255 - soma1;
		if (soma2 < 124) soma2 = 255 - soma2;		
	    if ( (soma1/soma2 > 1.23)  |  (soma2/soma1 > 1.23)  ) imgData2.data[i+3]=255;
			    
		//BLUE
		soma1 = imgData.data[i + 2];
		soma2 = imgData2.data[i + 2];
		if (soma1 < 124) soma1 = 255 - soma1;
		if (soma2 < 124) soma2 = 255 - soma2;	
	    if ( (soma1/soma2 > 1.23)  |  (soma2/soma1 > 1.23)  ) imgData2.data[i+3]=255;

		//Opacity
		soma1 = imgData.data[i + 3];
		soma2 = imgData2.data[i + 3];
		if (soma1 < 124) soma1 = 255 - soma1;
		if (soma2 < 124) soma2 = 255 - soma2;				
		if ( (soma1/soma2 > 1.23)  |  (soma2/soma1 > 1.23)  ) imgData2.data[i+3]=255;

		if ( i > 4*c.width*10 ){
			if ( 
					imgData2.data[i+3 - 4*c.width*1 ] == 0 &
					imgData2.data[i+3 - 4*1 ] == 0 & count%2 == 0
				){
					imgData2.data[i+3] = 0;
					imgData2.data[i+1] = 255;
					count = count%4;
			}
			count++;
		}

	}
	ctx3.putImageData(imgData2,0,0);	
}



















