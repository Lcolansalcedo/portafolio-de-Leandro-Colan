



$(document).ready(function(){
$('div.caja> div ').hide();

$('div.caja> h2').click(function(){


   $(this).next().slideToggle(300)
})




})

$(document).ready(function(){
   $('#conocimientos,#experiencia,#estudios').hide();

$('.click1').on('click',function(){

   $('#conocimientos').slideToggle();
});
$('.click2').on('click',function(){

   $('#experiencia').slideToggle();
});
$('.click3').on('click',function(){

   $('#estudios').slideToggle();
});

});
 
function mostrarContenido (mostrar){
   var estructura=document.getElementById(mostrar)
   estructura.style.display='block'
}
function ocultarContenido(ocultar){
   var estructura=document.getElementById(ocultar)
   estructura.style.display='none'

}


$(document).ready(main);
var contador=1;

function main(){
$('.menu_bar').click(function(){

if (contador==1){
    $('#botones').animate({
       left:'0'
    });
    contador=0;
}else{
    contador=1;
    $('#botones').animate({
        left:'-100%'

    });
}


});

 
}
