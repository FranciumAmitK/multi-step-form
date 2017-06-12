$(document).ready(function(){
	



$("#submit").click(function(){
		var form = $("#myform");
		form.validate({
	
            rules: {
                
				
                username:{
				 required: true,
					maxlength: "10",
				},
				password:{
				 required: true,
					maxlength:"12",
					
					
				},
				cnfpassword:{
				 required: true,
					maxlength:"12",
					equalTo:"#password",
				},
				
											
                   },	
			messaages:{
			cnfpassword:{
				equalTo: "Password Mismatch",
			
		}
		}
		
			     
   		 });
		
		if(form.valid()==true){
			alert("Succesfull login");
		}
		
		
});
	});