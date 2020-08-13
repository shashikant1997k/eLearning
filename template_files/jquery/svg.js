
$(document).ready(function(){
	
	$(".solutionMainSteps,.middle1,.Graph_main_div").show();
	$(".Step1,.solutionText").hide();
	
	window.startAnim = true;
	window.solutionClicked = 0;

	var count=0;
	var cn;
	
	window.count=0;
	var cn;
	window.CoOrdinateX1=0;
	window.CoOrdinateX2=0;
	window.CoOrdinateX3=0;
	window.CoOrdinateY1=0;
	window.CoOrdinateY2=0;
	window.CoOrdinateY3=0;
	
	window.CoOrdinateX_1=0;
	window.CoOrdinateX_2=0;
	window.CoOrdinateX_3=0;
	window.CoOrdinateY_1=0;
	window.CoOrdinateY_2=0;
	window.CoOrdinateY_3=0;
	
	
	
	
	window.CoOrdinateX3_1=0;
	window.CoOrdinateX3_2=0;
	window.CoOrdinateX3_3=0;
	window.CoOrdinateY3_1=0;
	window.CoOrdinateY3_2=0;
	window.CoOrdinateY3_3=0;
	
	
	window.CoOrdinateX4_1=0;
	window.CoOrdinateX4_2=0;
	window.CoOrdinateX4_3=0;
	window.CoOrdinateY4_1=0;
	window.CoOrdinateY4_2=0;
	window.CoOrdinateY4_3=0;
	
	var res=0;
	var res1=0;
	var res2=0;
	var res3=0;
	
	var res01=0;
	var res11=0;
	var res21=0;
	var res31=0;
	
	var x1_res = 0;
	var y1_res = 0;
	
	var res4=0;
	var res5=0;
	var res6=0;
	var res7=0;
	
	var res41=0;
	var res51=0;
	var res61=0;
	var res71=0;
	
	var x2_res = 0;
	var y2_res = 0;
	
	var x_2_res = 0;
	var y_2_res = 0;
	
	
	
	var x3_2_res = 0;
	var y3_2_res = 0;
	
	var x3_3_res = 0;
	var y3_3_res = 0;
	
	
	var x4_2_res = 0;
	var y4_2_res = 0;
	
	var x4_3_res = 0;
	var y4_3_res = 0;
	
	var res_0=0;
	var res_1=0;
	var res_2=0;
	var res_3=0;
	
	var res_01=0;
	var res_11=0;
	var res_21=0;
	var res_31=0;
	
	var res_4=0;
	var res_5=0;
	var res_6=0;
	var res_7=0;
	
	var res_41=0;
	var res_51=0;
	var res_61=0;
	var res_71=0;
	
	
	var cord1=0;
	var cord2=0;

	var x1_new=0;
	var x2_new=0;
	var y1_new=0;
	var y2_new=0;
	var x_1_new=0;
	var x_2_new=0;
	var y_1_new=0;
	var y_2_new=0;
	
	var point=0;
	var leftVal=1;
	var rightVal=1;
	
	var point2=0;
	var leftVal2=1;
	var rightVal2=1;
	
	var leftVal3=1;
	var rightVal3=1;
	
	var leftVal4=1;
	var rightVal4=1;
	
	var LineCheck1=0;
	var LineCheck2=0;
	var LineCheck_1=0;
	var LineCheck_2=0;
	var line2Draw = 0;
	var line3Draw = 0;
	var line4Draw = 0;
	window.checkRight = 0;
	window.checkIntersectRight = 0;
	window.check=1;
	window.check1=0;
	window.solClick = 0;
	
	window.x11 = 0;
	window.y11 = 0;
	window.x21 = 0;
	window.y21 = 0;	
	window.x31 = 0;
	window.y31 = 0;
	
	window.x1_1 = 0;
	window.y1_1 = 0;
	window.x2_1 = 0;
	window.y2_1 = 0;	
	window.x3_1 = 0;
	window.y3_1 = 0;
	
	
	
	window.x1_2 = 0;
	window.y1_2 = 0;
	window.x2_2 = 0;
	window.y2_2 = 0;	
	window.x3_2 = 0;
	window.y3_2 = 0;
	
	window.x1_3 = 0;
	window.y1_3 = 0;
	window.x2_3 = 0;
	window.y2_3 = 0;	
	window.x3_3 = 0;
	window.y3_3 = 0;
	
	window.line1_Shade = null;
	window.line2_Shade = null;
	window.line3_Shade = null;
	window.line4_Shade = null;
	
	
	
	$(".crcl").css("opacity" , "0");
	
	$(".crcl").hover(function(){
		$(".crcl").css("cursor" , "pointer");
	});
	
	$(".crcl").click(function(){
		$(".howTo_div").hide();
	})
	
	ReturnClass = function(className){
		cn = String(className).split('$');	
		
	}
	
/*	$(".chk1").click(function(){
		check = 1;
		$(".howTo_div").hide();
	});
	$(".chk2").click(function(){
		check = 2;
		$(".howTo_div").hide();
	});*/
	
	
	
/////////////For mouseover show Co-ordinates/////////////////////////////////
if (String(navigator.userAgent).indexOf("Mobile") == -1){
	ReturnClass1 = function(className1){
		cn11 = String(className1).split('$');
		cn1 = cn11[0];
		cn2 = cn11[1];
		Co_Ordinates = "<b>"+cn1+",</b><b>"+cn2+"</b>"
		$(".ShowCoOrdinates").html(Co_Ordinates);
	}
	
	$(".crcl").mouseover(function(e){
		$(".ShowCoOrdinates").show();
		$(".ShowCoOrdinates").offset({left:e.pageX-35,top:e.pageY+10});	
	})
	
	$(".crcl").mouseout(function(){
		$(".ShowCoOrdinates").hide();
	})
}

else{
	ReturnClass1 = function(className1){
		cn11 = String(className1).split('$');
		cn1 = cn11[0];
		cn2 = cn11[1];
	}
}

///////////////////////////////mouseover end/////////////////////////////////////////	

/////////////////////for mouse click /////////////////////////////////////////////////

	$(".crcl").click(function(){
		$(this).css("opacity" , "1");
		count++;
		if(count == 1){
			$(this).addClass('crcl1');
			Ordnt = String(cn).split("@");
			CoOrdinateX1 = Ordnt[0];
			CoOrdinateY1 = Ordnt[1];
			
			x11 = cn1;
			y11 = cn2;
			
		}
		
		if(count == 2){
			$(this).addClass('crcl2');
			Ordnt = String(cn).split("@");
			CoOrdinateX2 = Ordnt[0];
			CoOrdinateY2 = Ordnt[1];
			if(CoOrdinateX1 == CoOrdinateX2 && CoOrdinateY1 == CoOrdinateY2){
				count=0;
				CoOrdinateX1=0;
				CoOrdinateY1=0;
				CoOrdinateX2=0;
				CoOrdinateY2=0;
				$(this).css("opacity" , "0");
				
			}
			x21 = cn1;
			y21 = cn2;	
		}
		
		if(count == 3){
		  
		  $(this).addClass('crcl3');
		  Ordnt = String(cn).split("@");
		  CoOrdinateX3 = Ordnt[0];
		  CoOrdinateY3 = Ordnt[1];
		  
		  x31 = cn1;
		  y31 = cn2;
		  
		  if(CoOrdinateX2 == CoOrdinateX3 && CoOrdinateY2 == CoOrdinateY3){
				count=1;
				CoOrdinateX3=0;
				CoOrdinateY3=0;
				CoOrdinateX2=0;
				CoOrdinateY2=0;
				$(this).css("opacity" , "0");
				
		  }
		  
		  else if(CoOrdinateX1 == CoOrdinateX3 && CoOrdinateY1 == CoOrdinateY3){
				count=1;
				CoOrdinateX1 = CoOrdinateX2;
				CoOrdinateY1 = CoOrdinateY2;
				CoOrdinateX3=0;
				CoOrdinateY3=0;
				
				$(this).css("opacity" , "0");
		  }
		 
		}
		  
		if(count == 3){
			crd1 = CoOrdinateX1+"1.1"+CoOrdinateY1;
			crd2 = CoOrdinateX2+"1.1"+CoOrdinateY2;
			crd3 = CoOrdinateX3+"1.1"+CoOrdinateY3;
			
			
			
			var arr1 = [crd1,crd2,crd3];
			
			arr2 = arr1.sort(function(a,b){
				return a-b;
			});
			
			
			var cr1 = arr1[0].split(1.1);	
		    var cr2 = arr1[1].split(1.1);
		    var cr3 = arr1[2].split(1.1);
			
			
			
			CoOrdinateX1 = cr1[0];
			CoOrdinateY1 = cr1[1];
			
			CoOrdinateX2 = cr2[0];
			CoOrdinateY2 = cr2[1];
			
			CoOrdinateX3 = cr3[0];
			CoOrdinateY3 = cr3[1];
			
			result_array1 = solutionDraw(CoOrdinateX1,CoOrdinateY1, CoOrdinateX2, CoOrdinateY2, CoOrdinateX3, CoOrdinateY3);
			CoOrdinateX1 = result_array1[0];
			CoOrdinateY1 = result_array1[1];
			CoOrdinateX2 = result_array1[2];
			CoOrdinateY2 = result_array1[3];
			CoOrdinateX3 = result_array1[4];
			CoOrdinateY3 = result_array1[5];
			x2_res = result_array1[6];
			y2_res = result_array1[7];
			x3_res = result_array1[8];
			y3_res = result_array1[9];
			
			$(".final_line").attr({"x1":CoOrdinateX2,"y1": CoOrdinateY2,"x2": x2_res,"y2": y2_res});
		  $(".final_line2").attr({"x1":CoOrdinateX2,"y1": CoOrdinateY2,"x2": x3_res,"y2": y3_res});
		  $(".final_line,.final_line2").show();
		  	
			if(solClick == 1){
				check = 2;
				check1 = 2;
			}
			//alert(check)
		    if(check == 2){
			    $(".final_line,.final_line2").css("stroke-dasharray","8");
		     }
			 
			
		
			if((rightVal2 != 2 || leftVal2 != 2) && count == 3){
				$(".crcl").css("pointer-events", "none");
				
			}
			
			$(".crcl1,.crcl2,.crcl3").css("opacity" , "0");
		}
		
		
		if(count == 4){
			$(this).css("opacity" , "1");
			$(this).addClass('crcl4');
			Ordnt = String(cn).split("@");
			CoOrdinateX_1 = Ordnt[0];
			CoOrdinateY_1 = Ordnt[1];
			
			x1_1 = cn1;
			y1_1 = cn2;
		}
		
		if(count == 5){
			$(this).css("opacity" , "1");
			$(this).addClass('crcl5');
			Ordnt = String(cn).split("@");
			CoOrdinateX_2 = Ordnt[0];
			CoOrdinateY_2 = Ordnt[1];
			
			if(CoOrdinateX_1 == CoOrdinateX_2 && CoOrdinateY_1 == CoOrdinateY_2){
				count=3;
				CoOrdinateX_1=0;
				CoOrdinateY_1=0;
				CoOrdinateX_2=0;
				CoOrdinateY_2=0;
				$(this).css("opacity" , "0");
			}
			x2_1 = cn1;
			y2_1 = cn2;
		}
		
		if(count == 6){
		  $(this).css("opacity" , "1");
		  $(this).addClass('crcl6');
		  Ordnt = String(cn).split("@");
		  CoOrdinateX_3 = Ordnt[0];
		  CoOrdinateY_3 = Ordnt[1];
		  
		  x3_1 = cn1;
		  y3_1 = cn2;
		  
		  if(CoOrdinateX_2 == CoOrdinateX_3 && CoOrdinateY_2 == CoOrdinateY_3){
				count=4;
				CoOrdinateX_3=0;
				CoOrdinateY_3=0;
				CoOrdinateX_2=0;
				CoOrdinateY_2=0;
				$(this).css("opacity" , "0");
		  }
		   else if(CoOrdinateX_1 == CoOrdinateX_3 && CoOrdinateY_1 == CoOrdinateY_3){
				count=4;
				CoOrdinateX_1 = CoOrdinateX_2;
				CoOrdinateY_1 = CoOrdinateY_2;
				CoOrdinateX_3=0;
				CoOrdinateY_3=0;
				$(this).css("opacity" , "0");
		  }
		  
		   line2Draw  = 1; 
		}
		
		
		if(count == 6){
			crd_1 = CoOrdinateX_1.concat(1.1).concat(CoOrdinateY_1);
			crd_2 = CoOrdinateX_2.concat(1.1).concat(CoOrdinateY_2);
			crd_3 = CoOrdinateX_3.concat(1.1).concat(CoOrdinateY_3);
			var arr_1 = [crd_1,crd_2,crd_3];
			
			arr_2 = arr_1.sort(function(a,b){
				return a-b;
			});
			
			var cr_1 = arr_1[0].split(1.1);
		    var cr_2 = arr_1[1].split(1.1);
		    var cr_3 = arr_1[2].split(1.1);
			
			CoOrdinateX_1 = cr_1[0];
			CoOrdinateY_1 = cr_1[1];
			
			CoOrdinateX_2 = cr_2[0];
			CoOrdinateY_2 = cr_2[1];
			
			CoOrdinateX_3 = cr_3[0];
			CoOrdinateY_3 = cr_3[1];
			
			
			result_array2 = solutionDraw(CoOrdinateX_1,CoOrdinateY_1, CoOrdinateX_2, CoOrdinateY_2, CoOrdinateX_3, CoOrdinateY_3);
			
			 $(".crcl").css("pointer-events", "none");
			
			CoOrdinateX_1 = result_array2[0];
			CoOrdinateY_1 = result_array2[1];
			CoOrdinateX_2 = result_array2[2];
			CoOrdinateY_2 = result_array2[3];
			CoOrdinateX_3 = result_array2[4];
			CoOrdinateY_3 = result_array2[5];
			x_2_res = result_array2[6];
			y_2_res = result_array2[7];
			x_3_res = result_array2[8];
			y_3_res = result_array2[9];
			
			 $(".final_line3").attr({"x1":CoOrdinateX_2,"y1": CoOrdinateY_2,"x2": x_2_res,"y2": y_2_res});
		  $(".final_line4").attr({"x1":CoOrdinateX_2,"y1": CoOrdinateY_2,"x2": x_3_res,"y2": y_3_res});
		  $(".final_line3,.final_line4").show();
		 
		  
		 if(check == 2){
			    $(".final_line3,.final_line4").css("stroke-dasharray","8");
		     }
			 
			 
		/*if((rightVal3 != 2 || leftVal3 != 2) && count == 6){
				$(".crcl").css("pointer-events", "none");
				
			}	*/ 
			
			$(".crcl4,.crcl5,.crcl6").css("opacity" , "0");
			
		}
		
		
		
		
		
		
		
		if(count == 7){
			$(this).css("opacity" , "1");
			$(this).addClass('crcl7');
			Ordnt = String(cn).split("@");
			CoOrdinateX3_1 = Ordnt[0];
			CoOrdinateY3_1 = Ordnt[1];
			
			x1_2 = cn1;
			y1_2 = cn2;
		}
		
		if(count == 8){
			$(this).css("opacity" , "1");
			$(this).addClass('crcl8');
			Ordnt = String(cn).split("@");
			CoOrdinateX3_2 = Ordnt[0];
			CoOrdinateY3_2 = Ordnt[1];
			
			if(CoOrdinateX3_1 == CoOrdinateX3_2 && CoOrdinateY3_1 == CoOrdinateY3_2){
				count=6;
				CoOrdinateX3_1=0;
				CoOrdinateY3_1=0;
				CoOrdinateX3_2=0;
				CoOrdinateY3_2=0;
				$(this).css("opacity" , "0");
			}
			x2_2 = cn1;
			y2_2 = cn2;
		}
		
		if(count == 9){
		  $(this).css("opacity" , "1");
		  $(this).addClass('crcl9');
		  Ordnt = String(cn).split("@");
		  CoOrdinateX3_3 = Ordnt[0];
		  CoOrdinateY3_3 = Ordnt[1];
		  
		  x3_2 = cn1;
		  y3_2 = cn2;
		  
		  if(CoOrdinateX3_2 == CoOrdinateX3_3 && CoOrdinateY3_2 == CoOrdinateY3_3){
				count=7;
				CoOrdinateX3_3=0;
				CoOrdinateY3_3=0;
				CoOrdinateX3_2=0;
				CoOrdinateY3_2=0;
				$(this).css("opacity" , "0");
		  }
		   else if(CoOrdinateX3_1 == CoOrdinateX3_3 && CoOrdinateY3_1 == CoOrdinateY3_3){
				count=7;
				CoOrdinateX3_1 = CoOrdinateX3_2;
				CoOrdinateY3_1 = CoOrdinateY3_2;
				CoOrdinateX3_3=0;
				CoOrdinateY3_3=0;
				$(this).css("opacity" , "0");
		  }
		  
		  line3Draw = 1;
		}
		
		
		if(count == 9){
			crd_1 = CoOrdinateX3_1.concat(1.1).concat(CoOrdinateY3_1);
			crd_2 = CoOrdinateX3_2.concat(1.1).concat(CoOrdinateY3_2);
			crd_3 = CoOrdinateX3_3.concat(1.1).concat(CoOrdinateY3_3);
			var arr_1 = [crd_1,crd_2,crd_3];
			
			arr_2 = arr_1.sort(function(a,b){
				return a-b;
			});
			
			var cr_1 = arr_1[0].split(1.1);
		    var cr_2 = arr_1[1].split(1.1);
		    var cr_3 = arr_1[2].split(1.1);
			
			CoOrdinateX3_1 = cr_1[0];
			CoOrdinateY3_1 = cr_1[1];
			
			CoOrdinateX3_2 = cr_2[0];
			CoOrdinateY3_2 = cr_2[1];
			
			CoOrdinateX3_3 = cr_3[0];
			CoOrdinateY3_3 = cr_3[1];
			
			
			result_array3 = solutionDraw(CoOrdinateX3_1,CoOrdinateY3_1, CoOrdinateX3_2, CoOrdinateY3_2, CoOrdinateX3_3, CoOrdinateY3_3);
			CoOrdinateX3_1 = result_array3[0];
			CoOrdinateY3_1 = result_array3[1];
			CoOrdinateX3_2 = result_array3[2];
			CoOrdinateY3_2 = result_array3[3];
			CoOrdinateX3_3 = result_array3[4];
			CoOrdinateY3_3 = result_array3[5];
			x3_2_res = result_array3[6];
			y3_2_res = result_array3[7];
			x3_3_res = result_array3[8];
			y3_3_res = result_array3[9];
			
			$(".final_line5").attr({"x1":CoOrdinateX3_2,"y1": CoOrdinateY3_2,"x2": x3_2_res,"y2": y3_2_res});
		  $(".final_line6").attr({"x1":CoOrdinateX3_2,"y1": CoOrdinateY3_2,"x2": x3_3_res,"y2": y3_3_res});
		  $(".final_line5,.final_line6").show();
		  	
			if((rightVal4 != 2 || leftVal4 != 2) && count == 9){
				$(".crcl").css("pointer-events", "none");
				
			}	
			
			$(".crcl7,.crcl8,.crcl9").css("opacity" , "0");
			
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		if(count == 10){
			$(this).css("opacity" , "1");
			$(this).addClass('crcl10');
			Ordnt = String(cn).split("@");
			CoOrdinateX4_1 = Ordnt[0];
			CoOrdinateY4_1 = Ordnt[1];
			
			x1_3 = cn1;
			y1_3 = cn2;
		}
		
		if(count == 11){
			$(this).css("opacity" , "1");
			$(this).addClass('crcl11');
			Ordnt = String(cn).split("@");
			CoOrdinateX4_2 = Ordnt[0];
			CoOrdinateY4_2 = Ordnt[1];
			
			if(CoOrdinateX4_1 == CoOrdinateX4_2 && CoOrdinateY4_1 == CoOrdinateY4_2){
				count=9;
				CoOrdinateX4_1=0;
				CoOrdinateY4_1=0;
				CoOrdinateX4_2=0;
				CoOrdinateY4_2=0;
				$(this).css("opacity" , "0");
			}
			x2_3 = cn1;
			y2_3 = cn2;
		}
		
		if(count == 12){
		  $(this).css("opacity" , "1");
		  $(this).addClass('crcl12');
		  Ordnt = String(cn).split("@");
		  CoOrdinateX4_3 = Ordnt[0];
		  CoOrdinateY4_3 = Ordnt[1];
		  
		  x3_3 = cn1;
		  y3_3 = cn2;
		  
		  if(CoOrdinateX4_2 == CoOrdinateX4_3 && CoOrdinateY4_2 == CoOrdinateY4_3){
				count=10;
				CoOrdinateX4_3=0;
				CoOrdinateY4_3=0;
				CoOrdinateX4_2=0;
				CoOrdinateY4_2=0;
				$(this).css("opacity" , "0");
		  }
		   else if(CoOrdinateX4_1 == CoOrdinateX4_3 && CoOrdinateY4_1 == CoOrdinateY4_3){
				count=10;
				CoOrdinateX4_1 = CoOrdinateX4_2;
				CoOrdinateY4_1 = CoOrdinateY4_2;
				CoOrdinateX4_3=0;
				CoOrdinateY4_3=0;
				$(this).css("opacity" , "0");
		  }
		  
		  line4Draw = 1;
		}
		
		
		if(count == 12){
			crd_1 = CoOrdinateX4_1.concat(1.1).concat(CoOrdinateY4_1);
			crd_2 = CoOrdinateX4_2.concat(1.1).concat(CoOrdinateY4_2);
			crd_3 = CoOrdinateX4_3.concat(1.1).concat(CoOrdinateY4_3);
			var arr_1 = [crd_1,crd_2,crd_3];
			
			arr_2 = arr_1.sort(function(a,b){
				return a-b;
			});
			
			var cr_1 = arr_1[0].split(1.1);
		    var cr_2 = arr_1[1].split(1.1);
		    var cr_3 = arr_1[2].split(1.1);
			
			CoOrdinateX4_1 = cr_1[0];
			CoOrdinateY4_1 = cr_1[1];
			
			CoOrdinateX4_2 = cr_2[0];
			CoOrdinateY4_2 = cr_2[1];
			
			CoOrdinateX4_3 = cr_3[0];
			CoOrdinateY4_3 = cr_3[1];
			
			
			result_array4 = solutionDraw(CoOrdinateX4_1,CoOrdinateY4_1, CoOrdinateX4_2, CoOrdinateY4_2, CoOrdinateX4_3, CoOrdinateY4_3);
			CoOrdinateX4_1 = result_array4[0];
			CoOrdinateY4_1 = result_array4[1];
			CoOrdinateX4_2 = result_array4[2];
			CoOrdinateY4_2 = result_array4[3];
			CoOrdinateX4_3 = result_array4[4];
			CoOrdinateY4_3 = result_array4[5];
			x4_2_res = result_array4[6];
			y4_2_res = result_array4[7];
			x4_3_res = result_array4[8];
			y4_3_res = result_array4[9];
			
			$(".final_line7").attr({"x1":CoOrdinateX4_2,"y1": CoOrdinateY4_2,"x2": x4_2_res,"y2": y4_2_res});
		  $(".final_line8").attr({"x1":CoOrdinateX4_2,"y1": CoOrdinateY4_2,"x2": x4_3_res,"y2": y4_3_res});
		  $(".final_line7,.final_line8").show();
		  	
			$(".crcl").css("pointer-events", "none");
			
			LineIntersectPoint = Line1IntersectLine2(x2_res,y2_res,x3_res,y3_res,x_2_res,y_2_res,x_3_res,y_3_res); 
			
			pointX = LineIntersectPoint[0];
			pointY = LineIntersectPoint[1];
			
			$(".crcl10,.crcl11,.crcl12").css("opacity" , "0");
			
		}
		
		
		
		
		
		
	});

/////////////////////for mouse click end/////////////////////////////////////////////////

/////////////////////Draw and Shade Line for Solution ////////////////////////////////////////////////////

	window.solutionDraw = function(CoOrdinateX1,CoOrdinateY1, CoOrdinateX2, CoOrdinateY2, CoOrdinateX3, CoOrdinateY3){
		
		//alert(CoOrdinateX1+"1.1"+CoOrdinateY1)
		cord1 = CoOrdinateX1+"1.1"+CoOrdinateY1;
		cord2 = CoOrdinateX2+"1.1"+CoOrdinateY2;
		cord3 = CoOrdinateX3+"1.1"+CoOrdinateY3;
		
		
		var arr11 = [cord1,cord2,cord3];
		
		arr21 = arr11.sort(function(a,b){
			return a-b;
		});
		
		
		
		var cor1 = arr11[0].split(1.1);	
		var cor2 = arr11[1].split(1.1);
		var cor3 = arr11[2].split(1.1);
		
		CoOrdinateX1 = cor1[0];
		CoOrdinateY1 = cor1[1];
		
		CoOrdinateX2 = cor2[0];
		CoOrdinateY2 = cor2[1];
		
		CoOrdinateX3 = cor3[0];
		CoOrdinateY3 = cor3[1];
		  
		  
		  
		  differenceX1 = CoOrdinateX2 - CoOrdinateX1;
		  differenceY1 = CoOrdinateY2 - CoOrdinateY1;
		  
		  differenceX2 = CoOrdinateX3 - CoOrdinateX2
		  differenceY2 = CoOrdinateY3 - CoOrdinateY2
		  
		
		  
		  x1_new = CoOrdinateX1 - (differenceX1)*15
		  y1_new = CoOrdinateY1 - (differenceY1)*15
		  
		 
		  
		  x3_new = Number(CoOrdinateX3) + (differenceX2)*15
		  y3_new = Number(CoOrdinateY3) + (differenceY2)*15
		  
		  LineCheck1 = differenceY1 / differenceX1;
		  LineCheck2 = differenceY2 / differenceX2;
		  
		
		  
 /////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	
	 function lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,bX1,bY1,bX2,bY2){
				
		var Va=((bX2-bX1)*(y1_new-bY1) - (bY2-bY1) * (x1_new-bX1) )/ ( (bY2-bY1)*(CoOrdinateX2-x1_new) - (bX2-bX1)*(CoOrdinateY2-y1_new))
		var Vb=((CoOrdinateX2-x1_new)*(y1_new-bY1) - (CoOrdinateY2-y1_new)*(x1_new-bX1))/( (bY2-bY1)*(CoOrdinateX2-x1_new) - (bX2-bX1)*(CoOrdinateY2-y1_new))			
					//alert(Va+" == "+Vb)
				
		if(Va>0 && Va<1 && Vb>0 && Vb<1)
		{
		
			var ma=(CoOrdinateY2-y1_new)/(CoOrdinateX2-x1_new)
			var mb=(bY2-bY1)/(bX2-bX1)
			if(CoOrdinateX2!=x1_new&&bX2!=bX1) 
			{
				var x=(x1_new*ma-y1_new-bX1*mb+bY1)/(ma-mb)
				var y=ma*(x-x1_new)+y1_new
			}
			else if(CoOrdinateX2==x1_new)
			{
				var x=x1_new
				var y=mb*(x-bX1)+bY1
			}
			else if(bX2==bX1)
			{
				var x=bX1
				var y=ma*(x-x1_new)+y1_new
			}
			return [x,y]
		}
		
		else{
			return 0;
		}
	}
	
	 res = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,50,50,50,450);  // Left line
	
	 res1 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,50,50,450,50);  // Top Line
	
	 res2 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,450,50,450,450); // Right Line
	
	 res3 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,50,450,450,450); // Bottom Line
	
	 res01 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,30,50,60,50);  // Top Left corner line
			
	 res11 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,430,50,460,50);  // Top right corner Line
	
	 res21 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,30,450,60,450); //Bottom Left corner Line
	
	 res31 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,430,450,460,450); // Bottom Right corner Line
	 
	 

	
	if(res != 0){
		 x2_res = parseInt(res[0]);
		 y2_res = parseInt(res[1]);
		 
		 
	}
	else if(res1 != 0){
		 x2_res = parseInt(res1[0]);
		 y2_res = parseInt(res1[1]);
	}
	else if(res2 != 0){
		 x2_res = parseInt(res2[0]);
		 y2_res = parseInt(res2[1]);
	}
	else if(res3 != 0){
		 x2_res = parseInt(res3[0]);
		 y2_res = parseInt(res3[1]);
	}
	
	/*///////////////for Corner side///////////////////*/
			
			else if(res01 != 0){
				 x2_res = parseInt(res01[0]);
				 y2_res = parseInt(res01[1]);
			}
			else if(res11 != 0){
				 x2_res = parseInt(res11[0]);
				 y2_res = parseInt(res11[1]);
			}
			else if(res21 != 0){
				 x2_res = parseInt(res21[0]);
				 y2_res = parseInt(res21[1]);
			}
			else if(res31 != 0){
				 x2_res = parseInt(res31[0]);
				 y2_res = parseInt(res31[1]);
			}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function lineIntersect2(x3_new,y3_new,CoOrdinateX2,CoOrdinateY2,CX1,CY1,CX2,CY2){
				
		var Va=((CX2-CX1)*(y3_new-CY1) - (CY2-CY1) * (x3_new-CX1) ) / ( (CY2-CY1)*(CoOrdinateX2-x3_new) - (CX2-CX1)*(CoOrdinateY2-y3_new))

		var Vb=((CoOrdinateX2-x3_new)*(y3_new-CY1) - (CoOrdinateY2-y3_new)*(x3_new-CX1))/( (CY2-CY1)*(CoOrdinateX2-x3_new) - (CX2-CX1)*(CoOrdinateY2-y3_new))				
		if(Va>0 && Va<1 && Vb>0 && Vb<1)
		{
		
			var ma=(CoOrdinateY2-y3_new)/(CoOrdinateX2-x3_new)
			var mb=(CY2-CY1)/(CX2-CX1)
			if(CoOrdinateX2!=x3_new&&CX2!=CX1) 
			{
				var x=(x3_new*ma-y3_new-CX1*mb+CY1)/(ma-mb)
				var y=ma*(x-x3_new)+y3_new
			}
			else if(CoOrdinateX2==x3_new)
			{
				var x=x3_new
				var y=mb*(x-CX1)+CY1
			}
			else if(CX2==CX1)
			{
				var x=CX1
				var y=ma*(x-x3_new)+y3_new
			}
			return [x,y]
		}
		
		else{
			return 0;
		}
	}	  

	 res4 = lineIntersect2(x3_new,y3_new,CoOrdinateX2,CoOrdinateY2,50,50,50,450);  // Left line
    
	 res5 = lineIntersect2(x3_new,y3_new,CoOrdinateX2,CoOrdinateY2,50,50,450,50);  // Top Line
	
	 res6 = lineIntersect2(x3_new,y3_new,CoOrdinateX2,CoOrdinateY2,450,50,450,450); // Right Line
	
	 res7 = lineIntersect2(x3_new,y3_new,CoOrdinateX2,CoOrdinateY2,50,450,450,450); // Bottom Line
	
	 res41 = lineIntersect2(x3_new,y3_new,CoOrdinateX2,CoOrdinateY2,30,50,60,50);  // Top Left corner line
			
	 res51 = lineIntersect2(x3_new,y3_new,CoOrdinateX2,CoOrdinateY2,430,50,460,50);  // Top right corner Line
	
	 res61 = lineIntersect2(x3_new,y3_new,CoOrdinateX2,CoOrdinateY2,30,450,60,450); //Bottom Left corner Line
	
	 res71 = lineIntersect2(x3_new,y3_new,CoOrdinateX2,CoOrdinateY2,430,450,460,450); // Bottom Right corner Line
	
	if(res4 != 0){
		 x3_res = parseInt(res4[0]);
		 y3_res = parseInt(res4[1]);
	}
	else if(res5 != 0){
		 x3_res = parseInt(res5[0]);
		 y3_res = parseInt(res5[1]);
	}
	else if(res6 != 0){
		 x3_res = parseInt(res6[0]);
		 y3_res = parseInt(res6[1]);
	}
	else if(res7 != 0){
		 x3_res = parseInt(res7[0]);
		 y3_res = parseInt(res7[1]);
	}
	
	
	
	/*/////////////////for Corner side///////////////////*/
			
			else if(res41 != 0){
				 x3_res = parseInt(res41[0]);
				 y3_res = parseInt(res41[1]);
			}
			else if(res51 != 0){
				 x3_res = parseInt(res51[0]);
				 y3_res = parseInt(res51[1]);
			}
			else if(res61 != 0){
				 x3_res = parseInt(res61[0]);
				 y3_res = parseInt(res61[1]);
			}
			else if(res71 != 0){
				 x3_res = parseInt(res71[0]);
				 y3_res = parseInt(res71[1]);
			}
			
			
			
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		  result = [CoOrdinateX1,CoOrdinateY1, CoOrdinateX2, CoOrdinateY2, CoOrdinateX3, CoOrdinateY3, x2_res, y2_res, x3_res, y3_res]
		  
		return result;
		
	}
	
	
	  Line1IntersectLine2 = function(x1_res,y1_res,x2_res,y2_res,CX1,CY1,CX2,CY2){
				
				var Va=((CX2-CX1)*(y1_res-CY1) - (CY2-CY1) * (x1_res-CX1) )/ ( (CY2-CY1)*(x2_res-x1_res) - (CX2-CX1)*(y2_res-y1_res))
				var Vb=((x2_res-x1_res)*(y1_res-CY1) - (y2_res-y1_res)*(x1_res-CX1))/( (CY2-CY1)*(x2_res-x1_res) - (CX2-CX1)*(y2_res-y1_res))			
							//alert(Va+" == "+Vb)
						
				if(Va>0 && Va<1 && Vb>0 && Vb<1)
				{
				
					var ma=(y2_res-y1_res)/(x2_res-x1_res)
					var mb=(CY2-CY1)/(CX2-CX1)
					if(x2_res!=x1_res&&CX2!=CX1) 
					{
						var x=(x1_res*ma-y1_res-CX1*mb+CY1)/(ma-mb)
						var y=ma*(x-x1_res)+y1_res
					}
					else if(x2_res==x1_res)
					{
						var x=x1_res
						var y=mb*(x-CX1)+CY1
					}
					else if(CX2==CX1)
					{
						var x=CX1
						var y=ma*(x-x1_res)+y1_res
					}
					return [x,y]
				}
				
				else{
					return 0;
				}
			}
			
		
			
	
	
	
////////////////////////////////mouse click end//////////////////////////////////////////////////////////////


	
	ShadeRight = function(CoOrdinateX1, CoOrdinateY1, CoOrdinateX2, CoOrdinateY2, CoOrdinateX3, CoOrdinateY3, x2_res, y2_res, x3_res, y3_res){
		  
		  
		  
		  
		
		 if((y2_res == 50 && x3_res == 450) || (x2_res == 450 && y3_res == 50)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+50
		  }
		  else if((x2_res == 450 && y2_res == 50 && y3_res == 450 && x3_res == 50)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+450
		  }
		   else if((x3_res == 450 && y3_res == 50 && y2_res == 450 && x2_res == 50)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+450
		  }
		  else if(x2_res == 450 && y3_res == 50){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+50
		  }
		  else if((x2_res == 50 && x3_res == 450)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+50+" "+50+","+50
			
		  }
		  else if((x2_res == 450 && x3_res == 50)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+50+","+50+" "+450+","+50
			
		  }
		  
		  else if((x2_res == 50 && y3_res == 450)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+450+" "+450+","+50+" "+50+","+50
		  }
		   else if((x3_res == 50 && y2_res == 450)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+50+","+50+" "+450+","+50+" "+450+","+450
			
		  }
		   else if((y2_res == 50 && x3_res == 50 )){
		  	point = x3_res+","+y3_res+" "+CoOrdinateX3+","+CoOrdinateY3+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX1+","+CoOrdinateY1+" "+x2_res+","+y2_res+" "+450+","+50+" "+450+","+450+" "+50+","+450
			
		  }
		  else if((x2_res == 50 && y3_res == 50 )){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+50+" "+450+","+450+" "+50+","+450
		  } 
		   
		 else if((x2_res == 450 && y3_res == 450 && y2_res > 50 && x3_res > 50)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+450
		  } 
		  else if((y2_res == 450 && x2_res > 50 && x3_res == 450 && y3_res > 50)){
		  	point = x3_res+","+y3_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x2_res+","+y2_res+" "+450+","+450
			
		  }
		  
		  else if((parseInt(y2_res) == 50 && x2_res > 50 && x3_res > 50 && y3_res == 450)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+450+" "+450+","+50
			
		  }
		  else if((y2_res == 450 && x2_res > 50 && x3_res > 50 && parseInt(y3_res) == 50 )){
			  
		  	point = x3_res+","+y3_res+" "+CoOrdinateX3+","+CoOrdinateY3+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX1+","+CoOrdinateY1+" "+x2_res+","+y2_res+" "+450+","+450+" "+450+","+50
			
		  }
		  
		  return point;
		  
		  
	}
	
	polyClick1 = function(){
		checkIntersectRight = 0;
		doneButton();
	}
	
	
	ShadeLeft = function(CoOrdinateX1, CoOrdinateY1, CoOrdinateX2, CoOrdinateY2, CoOrdinateX3, CoOrdinateY3, x2_res, y2_res, x3_res, y3_res){
		    
			
			
			
		
		 if((y2_res == 50 && x3_res == 450)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+450+" "+50+","+450+" "+50+","+50
		  }
		  else if((y2_res == 50 && y3_res == 450 && x2_res == 450 && x3_res == 50)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+50+","+50
		  }
		  else if((y3_res == 50 && y2_res == 450 && x3_res == 450 && x2_res == 50)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+50+","+50
		  }
		  else if((x2_res == 450 && y3_res == 50)){
		  	point = x3_res+","+y3_res+" "+CoOrdinateX3+","+CoOrdinateY3+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX1+","+CoOrdinateY1+" "+x2_res+","+y2_res+" "+450+","+450+" "+50+","+450+" "+50+","+50
		  }
		  else if((x2_res == 50 && x3_res == 450)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+450+","+450+" "+50+","+450
		  }
		  else if((x2_res == 450 && x3_res == 50)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+50+","+450+" "+450+","+450
		  }
		  
		  else if((x2_res == 50 && y3_res == 450)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+50+","+450
		  }
		   else if((x3_res == 50 && y2_res == 450)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+50+","+450
		  }
		   else if((y2_res == 50 && x3_res == 50 )){
		  	point = x3_res+","+y3_res+" "+CoOrdinateX3+","+CoOrdinateY3+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX1+","+CoOrdinateY1+" "+x2_res+","+y2_res+" "+50+","+50
		  } 
		  else if((x2_res == 50 && y3_res == 50 )){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX2+","+CoOrdinateY2+" "+x3_res+","+y3_res+" "+50+","+50
		  } 
		   else if((x2_res == 450 && y3_res == 450 && y2_res > 50 && x3_res > 50)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+50+","+450+" "+50+","+50+" "+450+","+50
		  } 
		  else if((y2_res == 450 && x2_res > 50 && x3_res == 450 && y3_res > 50)){
		  	point = x3_res+","+y3_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x2_res+","+y2_res+" "+50+","+450+" "+50+","+50+" "+450+","+50
		  } 
		  else if((parseInt(y2_res) == 50 && x2_res > 50 && x3_res > 50 && y3_res == 450)){
		  	point = x2_res+","+y2_res+" "+CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+x3_res+","+y3_res+" "+50+","+450+" "+50+","+50
		  }
		  else if((y2_res == 450 && x2_res > 50 && x3_res > 50 && y3_res == 50 )){
		  	point = x3_res+","+y3_res+" "+CoOrdinateX3+","+CoOrdinateY3+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX1+","+CoOrdinateY1+" "+x2_res+","+y2_res+" "+50+","+450+" "+50+","+50
		  }
		  
		  return point;
	}
	
	polyClick2 = function(){
		checkIntersectRight = 0;
		doneButton();
	}
	
	
	
	
	
	polyClick3 = function(){
		checkIntersectRight = 0;
		doneButton();
	}
	
	
	polyClick4 = function(){
		checkIntersectRight = 0;
		doneButton();
	}
	
	
	
	
	

	InterSectionAreaLeft = function(){
		
		
		var NS = "http://www.w3.org/2000/svg";
		var svg = document.createElementNS(NS, "svg");
		svg.setAttribute("viewBox", "0 0 520 465");
			
/////////////////////////////////////////////////////////////////////////////////////////////////
	
		if((x2_res == 50 && y2_res > 50 && x_2_res > 50 && y_2_res == 50) || (x_2_res == 50 && y_2_res > 50 && x2_res > 50 && y2_res == 50)){
			point3 = pointX+","+pointY+" "+x2_res+","+y2_res+" "+50+","+50+" "+x_2_res+","+y_2_res
			
		}
		
		else if((x2_res > 50 && y2_res == 50 && x_2_res == 450 && y_2_res > 50) || (x_2_res > 50 && y_2_res == 50 && x2_res == 450 && y2_res > 50)){
			point3 = pointX+","+pointY+" "+x2_res+","+y2_res+" "+450+","+50+" "+x_2_res+","+y_2_res
		}
		
		
		else if((x2_res == 450 && y2_res > 50 && x_2_res > 50 && y_2_res == 450) || (x_2_res == 450 && y_2_res > 50 && x2_res > 50 && y2_res == 450)){
			point3 = pointX+","+pointY+" "+x2_res+","+y2_res+" "+450+","+450+" "+x_2_res+","+y_2_res
		}
		
		
		else if((x2_res > 50 && y2_res == 450 && x_2_res == 50 && y_2_res > 50) || (x_2_res > 50 && y_2_res == 450 && x2_res == 50 && y2_res > 50) ){
			point3 = pointX+","+pointY+" "+x2_res+","+y2_res+" "+50+","+450+" "+x_2_res+","+y_2_res
		}
		
		else if((x2_res >= 50 && y2_res == 50 && x_2_res >= 50 && y_2_res == 50) ||  (x_2_res >= 50 && y_2_res == 50 && x2_res >= 50 && y2_res == 50)){
			point3 = pointX+","+pointY+" "+x2_res+","+y2_res+" "+x_2_res+","+y_2_res
		}
		
		else if((x2_res == 450 && y2_res >= 50 && x_2_res == 450 && y_2_res >= 50) || (x_2_res == 450 && y_2_res >= 50 && x2_res == 450 && y2_res >= 50)){
			point3 = pointX+","+pointY+" "+x2_res+","+y2_res+" "+x_2_res+","+y_2_res
		}
		
		
		if((x2_res >= 50 && y2_res == 450 && x_2_res >= 50 && y_2_res == 450) || (x_2_res >= 50 && y_2_res == 450 && x2_res >= 50 && y2_res == 450)){
			point3 = pointX+","+pointY+" "+x2_res+","+y2_res+" "+x_2_res+","+y_2_res
		}
		
		
		
		else if((x2_res == 50 && y2_res >= 50 && x_2_res == 50 && y_2_res >= 50) || (x_2_res == 50 && y_2_res >= 50 && x2_res == 50 && y2_res >= 50)){
			point3 = pointX+","+pointY+" "+x2_res+","+y2_res+" "+x_2_res+","+y_2_res
		}
	
	

		var poly5 = document.createElementNS(NS, "polyline");
		$(poly5).attr({
			points: point3
		}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#00A9FF",
			"fill-opacity":"0"
		});
		
		$(poly5).addClass('poly5')
		$(svg).append(poly5)
		document.querySelector(".svg1").appendChild(svg);
		
		 $(".poly5").attr("onClick","polyClick5()");
	}
	
	
	polyClick5 = function(){
		//alert(point3)
		checkIntersectRight = 0;
		doneButton();
	}
	
	
	
	
	polyClick6 = function(){
		checkIntersectRight = 0;
		doneButton();
	}
	
	polyClick7 = function(){
		checkIntersectRight = 0;
		doneButton();
	}
	
	polyClick8 = function(){
		checkIntersectRight = 0;
		doneButton();
	}
	
	polyClick9 = function(){
		
		checkIntersectRight = 1;
		doneButton();
	}
	
	polyClick10 = function(){
		checkIntersectRight = 1;
		doneButton();
	}
	
////////////////////////////////mouse click end////////////////////////////////////////////////


///////////////////////////////////Reset///////////////////////////////////////////////////////

	window.reset = function(){
		count=0;
		check = 1;
		check1 = 0;
		CoOrdinateX1=0;
		CoOrdinateX2=0;
		CoOrdinateX3=0;
		CoOrdinateY1=0;
		CoOrdinateY2=0;
		CoOrdinateY3=0;
		
		CoOrdinateX_1=0;
		CoOrdinateX_2=0;
		CoOrdinateX_3=0;
		CoOrdinateY_1=0;
		CoOrdinateY_2=0;
		CoOrdinateY_3=0;
		
		
		CoOrdinateX3_1=0;
		CoOrdinateX3_2=0;
		CoOrdinateX3_3=0;
		CoOrdinateY3_1=0;
		CoOrdinateY3_2=0;
		CoOrdinateY3_3=0;
		
		
		CoOrdinateX4_1=0;
		CoOrdinateX4_2=0;
		CoOrdinateX4_3=0;
		CoOrdinateY4_1=0;
		CoOrdinateY4_2=0;
		CoOrdinateY4_3=0;
		
		x2_res = 0;
		y2_res = 0;
		x3_res = 0;
		y3_res = 0;
		
		x_2_res = 0;
		y_2_res = 0;
		x_3_res = 0;
		y_3_res = 0;
		
		x3_2_res = 0;
		y3_2_res = 0;
		x3_3_res = 0;
		y3_3_res = 0;
		
		x4_2_res = 0;
		y4_2_res = 0;
		x4_3_res = 0;
		y4_3_res = 0;
		
		
		
		line1_Shade = null;
		line2_Shade = null;
		line3_Shade = null;
		line4_Shade = null;
		
		
		checkRight = 0;
		point = 0;
		point2 = 0;
		point3 = 0;
		point4 = 0;
		point5 = 0;
		point6 = 0;
		point7 = 0;
		point8 = 0;
		point9 = 0;
		point10 = 0;
		line2Draw = 0;
		line3Draw = 0;
		line4Draw = 0;
		solClick = 0;

		startAnim = false;
		solutionClicked = 0;

		//$('input[name="selector"]').prop('checked',false); 
		//$(".radBtn1").prop('checked',true);
		$(".poly1,.poly2,.poly3,.poly4,.poly5,.poly6,.poly7,.poly8,.poly9,.poly10,.poly11,.poly12").css("display","none");
		$(".txt1,.txt2,.txt3,.txt4,.txt5,.txt6,.txt7,.txt8,.txt9,.txt10,.txt11,.txt12").css("display","none");
		$(".crcl").css("pointer-events", "auto");
		$(".done_btn").css({"pointer-events" : "auto"});
		$(".left,.right,.radBtn,.handCursor").css("pointer-events", "auto");
		$(".Done_con").hide();
		$(".crcl").hover(function(){
			$(".crcl").css("cursor" , "pointer");
		});
		
		$(".crcl").css("opacity" , "0");
		$(".crcl1,.crcl2,.crcl3").css("opacity" , "0");
		$(".final_line,.final_line2,.crcle1,.crcle2,.crcle3").css("display","none");
		$(".crcl4,.crcl5,.crcl6").css("opacity" , "0");
		$(".final_line3,.final_line4,.crcle4,.crcle5,.crcle6").css("display","none");
		
		$(".crcl7,.crcl8,.crcl9").css("opacity" , "0");
		$(".final_line5,.final_line6,.crcle7,.crcle8,.crcle9").css("display","none");
		$(".crcl10,.crcl11,.crcl12").css("opacity" , "0");
		$(".final_line7,.final_line8,.crcle10,.crcle11,.crcle12").css("display","none");
		
		$(".final_line,.final_line2,.final_line3,.final_line4,.final_line5,.final_line6,.final_line7,.final_line8").css("stroke-dasharray","0");
		
		$(".poly_crcle1,.poly_crcle2,.poly_crcle3,.poly_crcle4").hide();
		
		
		$(".correct,.incorrect").css("display","none");
		$(".poly_txt1,.poly_txt2,.poly_txt3,.poly_txt4").css("display","none");
		
		$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").css("visibility","hidden");
		
	
	}
	
	$(".reset").click(function(){
		reset();
	})
	
/////////////////////////////////Reset end/////////////////////////////////////////////////////////////
		
	$(".right").click(function(){
		leftVal4=1;
		leftVal3=1;
		leftVal2=1;
		leftVal=1;
		
		if(count < 12){
			$(".crcl").css("pointer-events", "auto");
		}
		
		
		if(line2Draw == 1  && line3Draw == 1 && line4Draw == 1 && rightVal4 == 1){
			
			
					point4 = ShadeRight(CoOrdinateX4_1, CoOrdinateY4_1, CoOrdinateX4_2, CoOrdinateY4_2, CoOrdinateX4_3, CoOrdinateY4_3, x4_2_res, y4_2_res, x4_3_res, y4_3_res);
					
					if(point4 == 0){
					rightVal4=1;
					}
					else{
					rightVal4=2;
					}
					
					polylinedraw7(point4);
					line4_Shade = "right";
					$(".poly8").css("display","none");
				
					point5 = 0;
					$(".poly9").css("display","none");
					$(".poly9").removeAttr("onClick");
					
						pointPolygon();
						$(".poly_crcle1,.poly_crcle2,.poly_crcle3,.poly_crcle4").css("display","none");
						$(".poly_txt1,.poly_txt2,.poly_txt3,.poly_txt4").css("display","none");
						polylinedrawAns(correct_region);
					
		}
		
		else if(line2Draw == 1  && line3Draw == 1 && line4Draw != 1 && rightVal3 == 1){
			
			
					point3 = ShadeRight(CoOrdinateX3_1, CoOrdinateY3_1, CoOrdinateX3_2, CoOrdinateY3_2, CoOrdinateX3_3, CoOrdinateY3_3, x3_2_res, y3_2_res, x3_3_res, y3_3_res);
					
					if(point3 == 0){
					rightVal3=1;
					}
					else{
					rightVal3=2;
					}
					
					polylinedraw5(point3);
					line3_Shade = "right";
					$(".poly6").css("display","none");
					
		}
		
		else if(line2Draw == 1  && line3Draw != 1 && line4Draw != 1 && rightVal2 == 1){
			
					checkRight = 1;
					point2 = ShadeRight(CoOrdinateX_1, CoOrdinateY_1, CoOrdinateX_2, CoOrdinateY_2, CoOrdinateX_3, CoOrdinateY_3, x_2_res, y_2_res, x_3_res, y_3_res);
					
					if(point2 == 0){
					rightVal2 = 1;
					}
					else{
					rightVal2 = 2;
					}
					
					
					polylinedraw3(point2);
					line2_Shade = "right";
					
					$(".poly4").css("display","none");
					point3 = 0;
					$(".poly5").css("display","none");
					$(".poly5").removeAttr("onClick");
		}
		
		
		
		else if(rightVal == 1 && line2Draw != 1  && line3Draw != 1 && line4Draw != 1){
			point = ShadeRight(CoOrdinateX1, CoOrdinateY1, CoOrdinateX2, CoOrdinateY2, CoOrdinateX3, CoOrdinateY3, x2_res, y2_res, x3_res, y3_res);
			
			
			if(point == 0){
			rightVal = 1;
			}
			else{
			rightVal = 2;
			}
			
			polylinedraw1(point);
			line1_Shade = "right";
			
			$(".poly2").css("display","none");
			check = 1;
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	$(".left").click(function(){
		rightVal4=1;
		rightVal3=1;
		rightVal2=1;
		rightVal=1;
		
		if(count < 12){
			$(".crcl").css("pointer-events", "auto");
		}
		
		if(line2Draw == 1  && line3Draw == 1 && line4Draw == 1 && leftVal4 == 1){
			
			
					point4 = ShadeLeft(CoOrdinateX4_1, CoOrdinateY4_1, CoOrdinateX4_2, CoOrdinateY4_2, CoOrdinateX4_3, CoOrdinateY4_3, x4_2_res, y4_2_res, x4_3_res, y4_3_res);
					
					if(point4 == 0){
					leftVal4=1;
					}
					else{
					leftVal4=2;
					}
					
					polylinedraw8(point4);
					line4_Shade = "left";
					
					$(".poly7").css("display","none");
					InterSectionAreaLeft();
					point6 = 0;
					$(".poly10").css("display","none");
					$(".poly10").removeAttr("onClick");
						
		}
		
		else if(line2Draw == 1  && line3Draw == 1 && line4Draw != 1 && leftVal3 == 1){
			
			
					point3 = ShadeLeft(CoOrdinateX3_1, CoOrdinateY3_1, CoOrdinateX3_2, CoOrdinateY3_2, CoOrdinateX3_3, CoOrdinateY3_3, x3_2_res, y3_2_res, x3_3_res, y3_3_res);
					
					if(point3 == 0){
					leftVal3=1;
					}
					else{
					leftVal3=2;
					}
					
					polylinedraw6(point3);
					line3_Shade = "left";
					$(".poly5").css("display","none");
					
		}
		
		else if(line2Draw == 1  && line3Draw != 1 && line4Draw != 1 && leftVal2 == 1){
			
			
					point2 = ShadeLeft(CoOrdinateX_1, CoOrdinateY_1, CoOrdinateX_2, CoOrdinateY_2, CoOrdinateX_3, CoOrdinateY_3, x_2_res, y_2_res, x_3_res, y_3_res);
					
					if(point2 == 0){
					leftVal2=1;
					}
					else{
					leftVal2=2;
					}
					
					polylinedraw4(point2);
					line2_Shade = "left";
					$(".poly3").css("display","none");
					
		}
		else if(leftVal == 1 && line2Draw != 1  && line3Draw != 1 && line4Draw != 1){
						
						
						
						point = ShadeLeft(CoOrdinateX1, CoOrdinateY1, CoOrdinateX2, CoOrdinateY2, CoOrdinateX3, CoOrdinateY3, x2_res, y2_res, x3_res, y3_res);
						
						if(point == 0){
						leftVal=1;
						}
						else{
						leftVal=2;
						}
						
						polylinedraw2(point);
						line1_Shade = "left";
						
						$(".poly1").css("display","none");
		
		
		
		}	
		
		
	})


});