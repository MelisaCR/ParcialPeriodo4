var parte1=document.getElementById('parte1');
var parte2=document.getElementById('parte2');
var parte3=document.getElementById('parte3');
var arbol=document.getElementById('aniarbol');
var manzana=document.getElementById('animanzana');
var pelota=document.getElementById('anipelota');
var entranimg=document.getElementById('imagenn');
var b2=document.getElementById('b2');
var flecha11=document.getElementById('flecha1');
	var flecha22=document.getElementById('flecha2');
	var flecha33=document.getElementById('flecha3');


var iniciar=function() {
	var anibienvenida=document.getElementById('ani1').play();
	var musiquita1=document.getElementById('mus1').play();
	setTimeout(ocultarp1,10000);
}

var ocultarp1=function(){
	parte1.style.display="none";
	parte2.style.display="block";
	var entran=document.getElementById('entran').play();
	var musiquita1=document.getElementById('mus1').play();
	setTimeout(mostrarf,9500);
}

var mostrarf=function(){
	flecha11.style.display="block";
	flecha22.style.display="block";
	flecha33.style.display="block";
}

var fin=function(){
	parte2.style.display="none";
	parte3.style.display="block";
	var anichao=document.getElementById('ani3').play();	
	var musiquita3=document.getElementById('mus2').play();
}

var personaje1=function(){
	pelota.style.display="block";
	entran.style.display="none";
	b2.style.display="none";
	arbol.style.display="none";
	manzana.style.display="none";
	entranimg.style.display="none";
	flecha11.style.display="none";
	flecha22.style.display="none";
	flecha33.style.display="none";
	var ball=document.getElementById('anipelota').play();
	var carlo=document.getElementById('carlota').play();
	setTimeout(imagen,4000);
}


var personaje2=function(){
	entran.style.display="none";
	arbol.style.display="block";
	entranimg.style.display="none";
	b2.style.display="none";
	pelota.style.display="none";
	manzana.style.display="none";
	flecha11.style.display="none";
	flecha22.style.display="none";
	flecha33.style.display="none";
	var tree=document.getElementById('aniarbol').play();
	var abe=document.getElementById('abelardo').play();
	setTimeout(imagen,4000);
}

var personaje3=function(){
	
	entran.style.display="none";
	pelota.style.display="none";
	arbol.style.display="none";
	manzana.style.display="block";
	entranimg.style.display="none";
	b2.style.display="none";
	flecha11.style.display="none";
	flecha22.style.display="none";
	flecha33.style.display="none";
	var apple=document.getElementById('animanzana').play();
	var anita=document.getElementById('ana').play();
	setTimeout(imagen,4000);	
}

var imagen=function(){
	arbol.style.display="none";
	pelota.style.display="none";
	manzana.style.display="none";
	entran.style.display="none";
	entranimg.style.display="block";
	b2.style.display="block";
	flecha11.style.display="block";
	flecha22.style.display="block";
	flecha33.style.display="block";
}