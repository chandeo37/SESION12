$(document).ready(function(){
    let account = 0;
    let textoHola = $('h1')
    //$('h1').css('color', 'red')
   // $('h1').css('font-size', '40pt')
   //cmabio del valor de un atributo css
   $('#change-color').click(function(){
    textoHola.css('color','blue')

    //cambio del contenido en texto
    textoHola.text('Hola Luis')
 
   })
   //cambiar a travez de un boton el color de 
   //texto con css
   $('#change-clases').click(function(){
    $('p').addClass('resaltar')
   })

   $('#change').click(function(){
    $('p').addClass('resaltar')
   })

   $('#remove').click(function() {
    $('p').removeClass('resaltar')
   })

   $('#toggle').click(function(){
    $('p').toggleClass('resaltar')
   })
   $('#create-list').click(function(){
    const alumnos = ['Luis', 'Enrique', 'Javier', 'Maria']
    let listItem = '<ul class="list-group">'
    alumnos.forEach(function(item){
        //console.log(item)
        listItem +=`<li class="list-group-item">${item}</li>`
        console.log(listItem)
    })
    listItem +='</ul>'
    $('#list-container').html(listItem)
   })

   $('#create-list-b').click(function(){
    account += 1
    let nuevoElemento =$(`<li class="list-group-item">item-${account}</li>`)
    nuevoElemento.click(function () {
        //console.log(`item-${}`)
    })
    $('#ul-container').append(nuevoElemento)
   })










})