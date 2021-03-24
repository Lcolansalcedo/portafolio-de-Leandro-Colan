let indice2 = 1;
muestraSlides2(indice2);

function avanzaSlide2(m){
   muestraSlides2(indice2+=m);

}
function posicionSlide2(m){
   muestraSlides2(indice2=m);
}


function muestraSlides2(m){
let i;
let slides2 = document.getElementsByClassName('miSlider2');
let barras2 = document.getElementsByClassName('barra2');
if(m > slides2.length){
   indice2= 1;
}
if(m < 1){
   indice2 = slides2.length();
}
for(i = 0; i < slides2.length; i++){
   slides2[i].style.display = 'none';
}
for(i = 0; i < barras2.length;i++){
   barras2[i].className=barras2[i].className.replace(" active2", "");
}
slides2[indice2-1].style.display = 'block';
barras2[indice2-1].className += ' active2';
}
