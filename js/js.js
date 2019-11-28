// Paris

$('#paris_p').mouseover(function(){
    $('#paris_p .loc').css('display', 'inline').delay(800).fadeIn(200);
        $('#paris_p .p_title').css('display', 'inline').delay(800).fadeIn(200);
        $('#paris_p .loc').css('opacity', '1').delay(800).fadeIn(100);
        $('#paris_p .p_title').css('opacity', '1').delay(800).fadeIn(100);
        $('#san_p').removeClass('point');   
    });


$('#paris_p').mouseleave(function(){
    $('#paris_p .loc').css('display', 'none').delay(500).fadeOut(100);
    $('#paris_p .p_title').css('display', 'none').delay(500).fadeOut(100);
    $('#paris_p .loc').css('opacity', '0').delay(800).fadeIn(100);
    $('#paris_p .p_title').css('opacity', '0').delay(800).fadeIn(100);
    $('#san_p').addClass('point');   
});

// Santorini
$('#san_p').mouseover(function(){
    $('#san_p .loc').css('display', 'inline').delay(800).fadeIn(200);
    $('#san_p .p_title').css('display', 'inline').delay(800).fadeIn(200);
    $('#san_p .loc').css('opacity', '1');
    $('#san_p .p_title').css('opacity', '1');
});

$('#san_p').mouseleave(function(){
    $('#san_p .loc').css('display', 'none').delay(800).fadeOut(100);
    $('#san_p .p_title').css('display', 'none').delay(800).fadeOut(100);  
    $('#san_p .loc').css('opacity', '0');
    $('#san_p .p_title').css('opacity', '0');
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
