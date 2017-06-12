$(document).ready(function(){	
	$("#menu").click(function(){
		$(" #home").fadeToggle("slow");
	});
	$("#menu").click(function(){
		$(" #contact").fadeToggle("slow");
	});
	/*
	$("#submit").click( function() { 
    location.href = "next.html";
    return false;
    });
	*/
	$("#next").click(function(){
		var form = $("#myform");
		form.validate({
	
            rules: {
                phonenumber:{
				 required:true,
				  maxlength: "10",
				  minlength:"10",
				  number: true,
				} ,
				
                email:{
				 required: true,
				},
				firstname:{
				 required: true,
					maxlength:"20",
					
					
				},
				lastname:{
				 required: true,
					maxlength:"20",
				},
				gender:{
				 required: true,
				},
				
				
				
				
											
            },	
		
			     
   		 });
		
		if(form.valid()==true){
			location.href = "next.html";
		}
		
		
});
});