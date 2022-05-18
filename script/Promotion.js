/** Promotion Page - Start **/

var Question=["Are you a food mania?","Are you willing to work with trainers?","Do you prefer to work in group?"];
var imageSrcArray=["images/Promotion/foodMania.jpg","images/Promotion/groupWork.jpg","images/Promotion/trainer.jpg"];
var promotionCodes=["promo_009898","promo_007878","promo_003838","promo_001818"]; //Promotion codes


var promationAnswer= document.getElementsByClassName("promationAnswer") // radioBox
var finalDislplay=document.getElementById("PromotionQuestion");  // the final display for user
var promotionDisplay=document.getElementById("PromotionDisplay");   // Yes,No part 

var promotionImage=document.getElementById("promotionImage"); //image display

var Intendation=document.getElementsByClassName("Intendation")[0];

var index=0;
var totalGrade=0;



promotionDisplay.innerHTML=Question[index];




promationAnswer[0].onchange= function(){goNextQuestion();calculateTotalScoreInYes();displayNextQuestionAndResult();};
promationAnswer[1].onchange= function(){ goNextQuestion();calculateTotalScoreInNo(); displayNextQuestionAndResult();};


function calculateTotalScoreInYes(){
    if (index!=3){ totalGrade++;}
}
function calculateTotalScoreInNo(){
    if (index==3){totalGrade++;}
}



// Every time uer click Yes or No, another question will display (also change the img)
function goNextQuestion(){

    if (index<2){
        index++;
        // promotionDisplay.innerHTML=Question[index];
        setTimeout(function(){finalDislplay.reset()},100);
        promotionImage.src=imageSrcArray[index];
    }
    else if (index==2){
        index++;
    }
    // else {
    //     finalDislplay.innerHTML=" Your total score is: "+totalGrade;
    // }
}

function displayNextQuestionAndResult(){
    if (index==3){
        if (totalGrade==3){
            finalDislplay.innerHTML="Congratulations, you got the Promotion Code which provides 30% off discount<br>#"+promotionCodes[0]+
            '<br>Please <a href="https://api.whatsapp.com/send/?phone=12369656056&text&app_absent=0">click here</a> to contact us';
            Intendation.style.visibility="hidden";
        }
        else if (totalGrade==2){
            finalDislplay.innerHTML="Congratulations, you got the Promotion Code which provides 25% off discount<br>#"+promotionCodes[1]+
            '<br>Please <a href="https://api.whatsapp.com/send/?phone=12369656056&text&app_absent=0">click here</a> to contact us';
            Intendation.style.visibility="hidden";
        }
        else if (totalGrade==1){
            finalDislplay.innerHTML="Congratulations, you got the Promotion Code which provides 20% off discount<br>#"+promotionCodes[2]+
            '<br>Please <a href="https://api.whatsapp.com/send/?phone=12369656056&text&app_absent=0">click here</a> to contact us';
            Intendation.style.visibility="hidden";
        }
        else if (totalGrade==0){
            finalDislplay.innerHTML="Congratulations, you got the Promotion Code which provides 15% off discount<br>#"+promotionCodes[3]+
            '<br>Please <a href="https://api.whatsapp.com/send/?phone=12369656056&text&app_absent=0">click here</a> to contact us';
            Intendation.style.visibility="hidden";
        }
    }
    else{
        promotionDisplay.innerHTML=Question[index];
    }
}

/** Promotion Page - End **/





