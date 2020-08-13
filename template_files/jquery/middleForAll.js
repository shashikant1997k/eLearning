// JavaScript Document

$(document).ready(function(){
		
		var contnr=$(".container").height();
	$(".solutionContainer").css("height",contnr+"px");
		
	
		middleFunction =  function(){
			$(".middle1").css("margin-top",0+"px");	
			$(".Graph_main_div").hide();
			$(".solutionMainSteps,.middle1,.Step1").show()
			$(".middle1").show().css("display","inline-block")
			 var hk=$(".Graph_main_div").height();
			 var hk1=$(".container").height();
			 var sol=$(".solutionText").height();
			 var mar = (hk1-(hk))/2;
			 var  check=hk+sol;
			 if(hk1  > check){
				
				 $(".middle1").css("margin-top",(mar+sol-5)+"px");
			 }
			 else
			 {
				 
				 $(".middle1").css("margin-top",sol-10+"px");
			 }
			 $(".Content00").hide();
			 
			 var mql = window.matchMedia("(orientation:portrait)")
			 if (mql.matches){ 
				$(".middle1").css("margin-top",sol+"px");
			 }
			
		}
		   
		  
		  middleFunction();
	
		
})
