 var BMI_Weight = document.getElementById("BMI_Weight");
 var BMI_Height = document.getElementById("BMI_Height");
 var BMI_display = document.getElementById("BMI_display");
 var BMI_gender = document.getElementById("BMI_gender");
 var img_BMI_1 = document.getElementById("img_BMI_1");
 
 function calBMI(){
 	let BMI_result = 0;
 	let weight = BMI_Weight.value;
 	let height = BMI_Height.value;
 	if(weight == null){
 		weight = 0;
 	}
 	if(height == null || height == 0){
 		alert("Please input height.");
 	}
 	else{
 		BMI_result = weight/(height/100*height/100);
 		BMI_display.innerHTML = "Your BMI is "+BMI_result.toFixed(2)+".";
 	}
 	if(BMI_result != 0){
	 	if(BMI_gender.checked == true){
	 		if(BMI_result>0 && BMI_result<18.5){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Male_1.jpg";
	 		}
	 		else if(BMI_result>=18.5 && BMI_result<25.0){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Male_2.jpg";
	 		}
	 		else if(BMI_result>=25.0 && BMI_result<30){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Male_3.jpg";
	 		}
	 		else if(BMI_result>=30 && BMI_result<35){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Male_4.jpg";
	 		}
	 		else if(BMI_result>=35){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Male_5.jpg";
	 		}
	 	}
	 	else{
	 		if(BMI_result>0 && BMI_result<18.5){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Female_1.jpg";
	 		}
	 		else if(BMI_result>=18.5 && BMI_result<25.0){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Female_2.jpg";
	 		}
	 		else if(BMI_result>=25.0 && BMI_result<30){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Female_3.jpg";
	 		}
	 		else if(BMI_result>=30 && BMI_result<35){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Female_4.jpg";
	 		}
	 		else if(BMI_result>=35){
	 			img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Female_5.jpg";
	 		}
	 	}
 	}
 }
 
 let btn_submit = document.getElementById("BMI_submit");
 btn_submit.onclick = function(){calBMI()};
 

 function displayBMIImage(){

 	if(BMI_gender.checked == true){
 		BMI_display.innerHTML = ""; 
 		img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Male.jpg";
 		img_BMI_1.alt = "BMI Result Male";
 	}
 	else{
 		BMI_display.innerHTML = ""; 
 		img_BMI_1.src = ".\\images\\importantOfHealth\\bMICalculator\\Female.jpg";
 		img_BMI_1.alt = "BMI Result Female";
 	}
 }
 
 BMI_gender.onchange = function(){displayBMIImage()};
