
$(document).ready(function() {
	$('form').
	
	  on('change', 'select', function(){

		  
		  //adds new drink form		  
		  $('form div:first').clone().insertAfter('form div:last');
	  	
	  	//updates number of drinks based on number of drink forms	  	
	  	$('#drinks').text($('select').length - 1);

	  	//update total cost of order
	  	var total_price = 0
	  	$('select').each(function(){
	  		var item_price = Number($(this).find(":selected").attr("data-price"))
	  		if(!isNaN(item_price)) {
	  			total_price += item_price
	  		}
	  	
	  	//The total cost of order
	  	$('#cost').text(total_price.toFixed(2)); 	
		  });
	  });

	  //Submit order
	$('#submit').click(function(data){
	  $.post('/shop',
	  	$('form').serialize(),
	  	function(data){
		    alert(data);
	    }
	  );
  });
});












