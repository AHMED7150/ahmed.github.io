 function myValidation(){
		       var name = document.forms['contactform']['name'].value;
			   var email = document.forms['contactform']['email'].value;
			   var phone = document.forms['contactform']['phone'].value;
			   var message = document.forms['contactform']['message'].value;
			   var error =[];
			   
			   if(name =='' || name.lenght<3){
			      error[0]="Name must be at least 3 letter";
				  document.getElementById('name-error').innerHTML =error[0];
			   }else{
			       document.getElementById('name-error').innerHTML ='';
			   }
			   
			    if(email =='' || email.lenght<10){
			      error[1]="Please enter a valid email";
				  document.getElementById('email-error').innerHTML =error[1];
			   }else{
			       document.getElementById('email-error').innerHTML ='';
			   }
			   
			    if(phone =='' || phone.lenght<11){
			      error[2]="Please enter a valid phone number";
				  document.getElementById('phone-error').innerHTML =error[2];
			   }else{
			       document.getElementById('phone-error').innerHTML ='';
			   }
			   
			    if(message =='' || message.lenght<50){
			      error[3]="Message must be at least 50 letters";
				  document.getElementById('message-error').innerHTML =error[3];
			   }else{
			       document.getElementById('message-error').innerHTML ='';
			   }
			   if(error.length >0){
			      return false;
			   }
			   
		  }
function myfocus(x){
	
		      x.style.background ='#ffffffd9';
}



/* === jquery start === */


$(document).ready(function(){
	
	/* === Menubar active start === */
	$('#main-menu').on('click','li',function(){
		$('#main-menu li.active').removeClass('active');
		$(this).addClass('active');
	});
	
	/* === Menubar part start === */
	
	$('#mobile-icon').click(function(){
		$('#main-menu ul').slideToggle(1000);
	});
	$(window).resize(function(){
		if($(window).width() > 576){
			$('#main-menu ul').show();
		}else{
			$('#main-menu ul').hide();
		}
	});
	
	/* === Upper Button Scroll start === */
	
	$(window).scroll(function(){
		
		var x = $(window).scrollTop();
		if(x >1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},3000);
	});
	
});