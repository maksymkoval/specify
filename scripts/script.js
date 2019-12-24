$(document).ready(function(){
$('.dropdown-item:first').hover(function(){
$('.dropdown-item:first img').attr('src','images/drop1-r.png');
})
$('.dropdown-item:nth-child(2)').hover(function(){
$('.dropdown-item:nth-child(2) img').attr('src','images/drop2-r.png');
})
$('.dropdown-item:nth-child(3)').hover(function(){
$('.dropdown-item:nth-child(3) img').attr('src','images/drop3-r.png');
})
$('.dropdown-item:first').mouseout(function(){
    $('.dropdown-item:first img').attr('src','images/drop1.png');
    })
    $('.dropdown-item:nth-child(2)').mouseout(function(){
    $('.dropdown-item:nth-child(2) img').attr('src','images/drop2.png');
    })
    $('.dropdown-item:nth-child(3)').mouseout(function(){
    $('.dropdown-item:nth-child(3) img').attr('src','images/drop3.png');
    })
   $('.fa-chevron-up').hide();
   $('.fa-chevron-down').hide();
   $('.menubtn').click(function(){ 
    $('.btns').toggleClass('btns-active');
    
    // $('.container1').css('color','white')
   });

var emailInput;
$("#email-input,#email-input2").on("change", function() {
  emailInput = $(this).val();
});
$("#subscribe-button, #subscribe-button2 ").on("click", function(e) {
  e.preventDefault();
  if (validateEmail(emailInput) && $('.o-email-handler__input').val()!=='' ) {
    $('.emailgood').css('display','block')
    $('.error').css('display','none')
  } else {
    $('.o-email-handler').css('border','1px solid red');
        $('.error').css('display','block')
        $('.emailgood').css('display','none')
        
    return false;
  }
});


function validateEmail(email) {
  var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  return $.trim(email).match(pattern) ? true : false;
}
$(window).resize(function(){

    if ($(window).width() <= 620) {  

       $('.m-button').html('Sing Up');
    }else{
        $('.m-button').html('Get earle access');
    }
});
$('.dynamic1').hover(function(){
$('.dynamic1 img').attr('src','images/drop1.png');
$('.img1').css('display','block');
$('.img2').css('display','none');
$('.img3').css('display','none');
})
$('.dynamic2').hover(function(){
$('.dynamic2 img').attr('src','images/drop2.png');
$('.img1').css('display','none');
$('.img2').css('display','block');
$('.img3').css('display','none');
})
$('.dynamic3').hover(function(){
$('.dynamic3 img').attr('src','images/drop3.png');
$('.img1').css('display','none');
$('.img2').css('display','none');
$('.img3').css('display','block');
})
$('.dynamic1').mouseout(function(){
    $('.dynamic1 img').attr('src','images/drop1-r.png');
    })
    $('.dynamic2').mouseout(function(){
    $('.dynamic2 img').attr('src','images/drop2-r.png');
    })
    $('.dynamic3').mouseout(function(){
    $('.dynamic3 img').attr('src','images/drop3-r.png');
    })

});