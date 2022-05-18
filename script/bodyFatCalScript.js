/** Body Fat Calculator.html Page - Start **/

//var sexBFP= document.getElementsByClassName("sexBFP");//radio button
var MaleBFP=document.getElementById("MaleBFP");
var FemaleBFP=document.getElementById("FemaleBFP");

var ageBFP=document.getElementById("ageBFP");
var heightBFP=document.getElementById("heightBFP");
var weightBFP=document.getElementById("weightBFP");
var neckBFP=document.getElementById("neckBFP");
var waistBFP=document.getElementById("waistBFP");
var hipBFP=document.getElementById("hipBFP");//textBox

var getBFP=document.getElementById("getBFP");// button

var DisplayBFP=document.getElementById("DisplayBFP");//final display

var BDFtableData=document.getElementsByClassName("bodyFatTableData"); //these are table data

getBFP.onclick=function(){calculateBFP()};




function calculateBFP(){


    // if (!MaleBFP.checked&&!FemaleBFP.checked){
    //     alert("Please check at least one option of gender");
    //     return;
    // }
    if(MaleBFP.checked){
        MansBFPCalculation();
    }
    else if (FemaleBFP.checked){
        WomenssBFPCalculation();
    } else{
        alert("Please check at least one option of gender");
        return;
    }
}




function MansBFPCalculation(){
    let BFP;

    BFP=495/((1.0324 - 0.19077*Math.log10(waistBFP.value*1 -neckBFP.value*1 ))+ 0.15456*Math.log10(heightBFP.value))-450;
    displayBFP(BFP,"Man");

}

function WomenssBFPCalculation(){
    let BFP;
    

    BFP=495/(1.29579 - 0.35004 * Math.log10(waistBFP.value*1  + hipBFP.value*1  - neckBFP.value*1 ) + 0.221 * Math.log10(heightBFP.value)) -450
    displayBFP(BFP,"Woman");
}


function displayBFP(BFP, gender){

    // make sure the table is in default color before changing the specific cell color.
    for(a of BDFtableData){
        a.style.backgroundColor = "whitesmoke" ;
    }


    // male part of display
    if (BFP>=25&& gender==="Man"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[14].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<25&&BFP>=18&& gender==="Man"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[11].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<18&&BFP>=14&& gender==="Man"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[8].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<14&&BFP>=6&& gender==="Man"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[5].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<6&&BFP>=2&& gender==="Man"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[2].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<2&& gender==="Man"||isNaN(BFP)){
        DisplayBFP.innerHTML="Your body fat percentage is not possible, please recheck your input carefully";
        return;
    }

    // Female part of display
    if (BFP>=32&& gender==="Woman"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[13].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<32&&BFP>=25&& gender==="Woman"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[10].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<25&&BFP>=21&& gender==="Woman"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[7].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<21&&BFP>=14&& gender==="Woman"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[4].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<14&&BFP>=10&& gender==="Woman"){
        DisplayBFP.innerHTML="Your body fat percentage is "+BFP.toFixed(2)+"%";
        BDFtableData[1].style.backgroundColor = "#F9560A" ;
        return;
    }
    if (BFP<10&& gender==="Woman"||isNaN(BFP)){
        DisplayBFP.innerHTML="Your body fat percentage is not possible, please recheck your input carefully";
        return;
    }
}






/** Body Fat Calculator.html Page - End **/

/************************************************************************************************* */