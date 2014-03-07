jQuery(document).ready(function () {
	$( "#complete" ).click(function() {
	  $( "#blackbg" ).fadeOut(400);
	  $( "#payment_window" ).fadeOut(400);
	  $( "#paymentContent" )
		 .html( "<h3 style='margin-left:30px;'>Your total bill owned for February is:<span style='color:#009344;font-size:36px;'> $0</span></h3>" );
	  $( "#paybillButton" )
		 .html( "<button type='button' class='btn btn-primary btn-lg btn-block' style='margin-top:15px; background-color:#4fb558; border-color:#009344;' id='payhistory'>View payment history</button>" );	  
	  });
	  
	  
	$( "#closebutton" ).click(function() {
	  $( "#blackbg" ).fadeOut(400)
	  $( "#payment_window" ).fadeOut(400)
	  });


	$( "#paybill" ).click(function() {
	  $( "#blackbg" ).fadeIn(400)
	  $( "#payment_window" ).fadeIn(400)
	  });
	  
	});


/*function hide_payment(){
	document.getElementById("blackbg").style.visibility="hidden";
	document.getElementById("payment_window").style.visibility="hidden";
}

//Show the introduction
function show_payment(){	
	document.getElementById("blackbg").style.visibility="visible";
	document.getElementById("payment_window").style.visibility="visible";
	
		
}*/