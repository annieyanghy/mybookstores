

// Paris

$('#paris_p').mouseover(function(){
    $('#paris_p .loc').css('display', 'inline').delay(800).fadeIn(200);
        $('#paris_p .p_title').css('display', 'inline').delay(800).fadeIn(200);
        $('#paris_p .loc').css('opacity', '1').delay(800).fadeIn(100);
        $('#paris_p .p_title').css('opacity', '1').delay(800).fadeIn(100);
        $('#san_p').removeClass('point');  
        $('#venice_p').removeClass('point');   
 
    });


$('#paris_p').mouseleave(function(){
    $('#paris_p .loc').css('display', 'none').delay(500).fadeOut(100);
    $('#paris_p .p_title').css('display', 'none').delay(500).fadeOut(100);
    $('#paris_p .loc').css('opacity', '0').delay(800).fadeIn(100);
    $('#paris_p .p_title').css('opacity', '0').delay(800).fadeIn(100);
    $('#san_p').addClass('point');   
    $('#venice_p').addClass('point');   

});

// Santorini
$('#san_p').mouseover(function(){
    $('#san_p .loc').css('display', 'inline').delay(800).fadeIn(200);
    $('#san_p .p_title').css('display', 'inline').delay(800).fadeIn(200);
    $('#san_p .loc').css('opacity', '1');
    $('#san_p .p_title').css('opacity', '1');
    $('#venice_p').removeClass('point');   

});

$('#san_p').mouseleave(function(){
    $('#san_p .loc').css('display', 'none').delay(800).fadeOut(100);
    $('#san_p .p_title').css('display', 'none').delay(800).fadeOut(100);  
    $('#san_p .loc').css('opacity', '0');
    $('#san_p .p_title').css('opacity', '0');
    $('#venice_p').addClass('point');   

})




// Taipei
$('#tw_p').mouseover(function(){
    $(' #tw_p .loc').css('display', 'inline').delay(800).fadeIn(200);
    $('#tw_p .p_title').css('display', 'inline').delay(800).fadeIn(200);
    $('#tw_p .loc').css('opacity', '1');
    $('#tw_p .p_title').css('opacity', '1');
});

$('#tw_p').mouseleave(function(){
    $('#tw_p .loc').css('display', 'none').delay(800).fadeOut(100);
    $('#tw_p .p_title').css('display', 'none').delay(800).fadeOut(100);  
    $('#tw_p .loc').css('opacity', '0');
    $('#tw_p .p_title').css('opacity', '0');
})

// Venice
$('#venice_p').mouseover(function(){
    $(' #venice_p .loc').css('display', 'inline').delay(800).fadeIn(200);
    $('#venice_p .p_title').css('display', 'inline').delay(800).fadeIn(200);
    $('#venice_p .loc').css('opacity', '1');
    $('#venice_p .p_title').css('opacity', '1');
});

$('#venice_p').mouseleave(function(){
    $('#venice_p .loc').css('display', 'none').delay(800).fadeOut(100);
    $('#venice_p .p_title').css('display', 'none').delay(800).fadeOut(100);  
    $('#venice_p .loc').css('opacity', '0');
    $('#venice_p .p_title').css('opacity', '0');
})


// Tokyo
$('#tokyo_p').mouseover(function(){
    $(' #tokyo_p .loc').css('display', 'inline').delay(800).fadeIn(200);
    $('#tokyo_p .p_title').css('display', 'inline').delay(800).fadeIn(200);
    $('#tokyo_p .loc').css('opacity', '1');
    $('#tokyo_p .p_title').css('opacity', '1');
});

$('#tokyo_p').mouseleave(function(){
    $('#tokyo_p .loc').css('display', 'none').delay(800).fadeOut(100);
    $('#tokyo_p .p_title').css('display', 'none').delay(800).fadeOut(100);  
    $('#tokyo_p .loc').css('opacity', '0');
    $('#tokyo_p .p_title').css('opacity', '0');
})


// London
$('#london_p').mouseover(function(){
    $(' #london_p .loc').css('display', 'inline').delay(800).fadeIn(200);
    $('#london_p .p_title').css('display', 'inline').delay(800).fadeIn(200);
    $('#london_p .loc').css('opacity', '1');
    $('#london_p .p_title').css('opacity', '1');
});

$('#london_p').mouseleave(function(){
    $('#london_p .loc').css('display', 'none').delay(800).fadeOut(100);
    $('#london_p .p_title').css('display', 'none').delay(800).fadeOut(100);  
    $('#london_p .loc').css('opacity', '0');
    $('#london_p .p_title').css('opacity', '0');
})






// $(document).ready(function(){
//     tippy('#tw_p', {
//     content: 'Taipei, Taiwan',
//       theme: 'light',
//       size: 'big',
//       arrow: true
//     })
// });


// Form
$('#form').on('submit', function(){
    if ($('#name').val().length ===0){
       $('#nameerrormsg').css('visibility','visible');
       $('#nameerrormsg').fadeIn("slow");
       console.log('name error')
       return false;
    }

})

$('#form').on('submit', function(e){
if ($('#bookstore').val().length ===0){
    $('#addrerrormsg').css('visibility','visible');
    $('#addrerrormsg').fadeIn("slow");
    console.log(e)
    return false;
 }})

 $(document).ready(function(){
 $('.form_button').click(function(e){
    $('#addrerrormsg').fadeIn("slow");
    $('#nameerrormsg').fadeIn("slow");
    console.log(e);
    });
 })

//  Filter button
$('.filter_button').click(function(e){
    $(this).addClass('active_button');
    $('.default').removeClass('active_button');

    console.log(e);
  
})

$('.filter_button').mouseout(function(e){
    $(this).removeClass('active_button');
    console.log(e);
})



//  Flip card
// $(document).ready(function(){
//     $('.card').mouseenter(function(e){
//         $('#flipcard').addClass('flip');
//         console.log(e);
//     });
//     $('.card').mouseout(function(event){
//         $('#flipcard').removeClass('flip');
//         console.log(event);
//     });
// })
   
   



// $('.card').mouseover(function(e){
//     $(this).data('mouseover', true);
//     console.log(e);
//   });

//   $('.card').mouseleave(function(e){
//     $(this).data('mouseleave', true);
//     console.log(e);
//   });

  

// if ($('.card').data('mouseover')){
//     $('#flipcard').addClass('flip');
// }

  


// if ($('.card').data('mouseleave')){
//     $('#flipcard').removeClass('flip');
// }





// $('.card').click(function(e){
//     $(this).data('clicked', true);
//     console.log(e);
//   });

// if( $('.card').data('clicked')) {
//     $('#flipcard').addClass('flip');
//     console.log('ee');
//     //clicked element, do-some-stuff
// } else {
//     $('#flipcard').removeClass('flip');
//     //run function2



// Slides
// $(".slideshow").hide();

// setInterval(function() {
//   $('.slideshow')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('.slideshow');
// }, 3000);

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {

  
//   if (n > $("slides").length) {slideIndex = 1}
//   if (n < 1) {slideIndex = $("slides").length}
  
//     $("slides").attr('display','none');  
  
//   $("slides").attr('display','block');  
// }