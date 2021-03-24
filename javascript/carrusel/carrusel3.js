let indice3 = 1;
muestraSlides3(indice3);

function avanzaSlide3(b){
   muestraSlides3(indice3+=b);

}
function posicionSlide3(b){
   muestraSlides3(indice3=b);
}


function muestraSlides3(b){
let i;
let slides3 = document.getElementsByClassName('miSlider3');
let barras3 = document.getElementsByClassName('barra3');
if(b > slides3.length){
   indice3 = 1;
}
if(b < 1){
   indice3 = slides3.length();
}
for(i = 0; i < slides3.length; i++){
   slides3[i].style.display = 'none';
}
for(i = 0; i < barras3.length;i++){
   barras3[i].className=barras3[i].className.replace(" active3", "");
}
slides3[indice3-1].style.display = 'block';
barras3[indice3-1].className += ' active3';
}
