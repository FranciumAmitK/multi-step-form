$(document).ready(function(){
	
	$("#login").click(function(){
		var form = $("#myform");
		form.validate({
	
            rules: {
                
				
                uname:{
				 required: true,
					maxlength: "10",
				},
				password:{
				 required: true,
					maxlength:"12",
								
											
                   },	
			
		}
		
			     
   		 });
		
		if(form.valid()==true){
			alert("Succesfull login");
		}
		
		
});
	$("#menu").click(function(){
		$(" #home").fadeToggle("slow");
	});
	$("#menu").click(function(){
		$(" #contact").fadeToggle("slow");
	});
});