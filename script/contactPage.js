var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var PhoneNumberInput=document.getElementById("PhoneNumberInput");// textbox input

var addressInput=document.getElementById("addressInput");// textarea input

var selectRegion= document.getElementById("selectRegion");
var optionItem= document.getElementsByClassName("optionItem"); //selectionItems 


var contactPageSubmit=document.getElementById("contactPageSubmit");

var regName=/(\D|\s)+/;
var regEmail=/^(\w|\d)+@(\w|\d)+/;
// var regPhoneNumber=/^\d{10}$/;
var regPhoneNumberUSA=/^\d{10}$/;
var regPhoneNumberHongKong=/^\d{8}$/;
var regPhoneNumberTaiwan=/^\d{9}$/;
var regPhoneNumberMacau= /^\d{8}$/;





contactPageSubmit.onclick=function(){UserInputValidation(), WriteToFile(this.form)};
/*selectRegion.onchange= function(){DisplayContryCode();};*/



function  UserInputValidation(){
	try{
		if (!regName.test(nameInput.value)) throw "User name is not valid or empty";
		if (!regEmail.test(emailInput.value)) throw	"User email is not valid or empty";
		if (addressInput.value=="") throw "Your address is not valid or empty";
		if ((optionItem[0].selected)&&(!regPhoneNumberUSA.test(PhoneNumberInput.value))) throw "Phone number should be 10 digits in Canada";
		if ((optionItem[1].selected)&&(!regPhoneNumberUSA.test(PhoneNumberInput.value))) throw "Phone number should be 10 digits in the USA";
		if ((optionItem[2].selected)&&(!regPhoneNumberHongKong.test(PhoneNumberInput.value))) throw "Phone number should be 8 digits in Hong Kong";
		if ((optionItem[3].selected)&&(!regPhoneNumberTaiwan.test(PhoneNumberInput.value))) throw "Phone number should be 9 digits in Taiwan";
		if ((optionItem[4].selected)&&(!regPhoneNumberMacau.test(PhoneNumberInput.value))) throw "Phone number should be 8 digits in Macau";
	}
	catch(err){
		alert(err);
	}	
}


/*function DisplayContryCode(){
    var x =selectRegion.value;
    PhoneNumberInput.value = x;
}

*/
