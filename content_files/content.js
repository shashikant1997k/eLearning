$(document).ready(function(){
						  	
						   var sb=-10000;
							var autorunVar = 0
							var animCount=0;
                       $(".disable_div").hide();
					    $(".howTo_div").css("right",25+"px" );
						$(".howTo_div").css("top",3+"%");	
						if(checkMobile)
						{
							var port = window.matchMedia("(orientation:portrait)")	
							if(port.matches){
							 $(".howTo_div").css("right",50+"%" );
							 $(".howTo_div").css("top",4+"%");	
							 $(".howTo_div").css("width",0.78*($(".solutionMainSteps").width()-$(".Graph_main_div").width()));
							 $(".remark").css("left","35%");
							 $(".Step1_5").css({"margin-left":"2%","width":"98%"});
							 $(".prompt_New,.remark,.Wrng,.Wrt").css("font-size","80%");
							}else{
								$(".howTo_div").css("top",8+"%");
								$(".prompt_New").css("left","20%");
								$(".prompt_New,.remark,.Wrng,.Wrt").css("font-size","80%");
							}
						}
							
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt,.blankMessage,.ReducePromt").hide();
							
 							$(".solutionMainSteps,.solutionText,.howTo_div").hide();	
							 $(".incorrect,.correct").show();
							 
							if(checkMobile){
							$(".howTo_div").hide();	
							}
							else if(checkMobile == false)
							 {
							$(".howTo_div").show();		 
							 }
							 
							 
							 $(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").css("visibility","hidden");
							
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				 $(".newSet").click(function(){
						
						 sb=-10000;///set this as initial value..
						 
						 animCount=1
						if(animCount==1){	
						  $(".Graph_main_div").removeClass('graph_anim');
						  $(".Graph_main_div").removeClass('extraclass');
						  animCount=0
						}
						
						if(checkMobile == false){
						$(".howTo_div").css("right",25+"px" );	
						$(".howTo_div").show();	
							
						}
						else if(checkMobile)
						{
						$(".howTo_div").hide();		
						}
 					$(".solutionMainSteps,.solutionText").hide();
	
					$(".input1").val('');
					$(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt").hide();
 					$(".prompt,.promptComma").hide();
			        $(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					$(".input1").focus();
					$(".poly_crcle1,.poly_crcle2,.poly_crcle3,.poly_crcle4").hide();
					
					$('input[name="selector"]').prop('checked',false);
					
					$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").css("visibility","hidden");
					$(".Radio_Table tbody tr:first-child td").removeClass("blink_class");
					$(".input").removeClass("input_blink_class");
				});


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////////////////////////////////
				
				
				  $(".done1").click(function(){ 
											 
					$(".Procedure_banner").hide();				   
					
					$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
					$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
					$(".Procedure").css({'color':'black','box-shadow':'none'});
					$(".input1").focus();
													        
				});
						 
						 $(".newSet").click(function(){ 
													 
									check_click=0;
									howVar = 1;
									var mql4 = window.matchMedia("(orientation:portrait)")
									if(mql4.matches){ 
									window.check_click=1;				 
									window.sol_click=0;		
									$(".Enter_ans").css("color","#C00");
									$(".AllImages,.image_Arrow").show();
									$(".howTo_div").css("right",50+"%" );
									}					 
													 
													 
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1,.input2").val('');
									
									$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
									
									$(".Step1,.solutionText").hide();
									
									 
									reset();
									
									
								
						});
						    $(".solution").click(function(){ 
														  
									var mql5 = window.matchMedia("(orientation:portrait)")
									if(mql5.matches){
									$(".Enter_ans").css("color","#000");
									sol_click=1;
									$(".AllImages,.image_Arrow").hide();
									}					  
														  
														  
									$(".input1").focus();
								
									$(".Procedure_banner").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
										$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").css("visibility","hidden");		        
														});
							
							 $(".Procedure").click(function(){ 
															
															$(".input1").focus();
															 autorunVar = 1; 
															 sb=-1;
															 
									$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
									$(".solutionMainSteps,.solutionText").hide();
 									$(".autorun").css('opacity','.4');
									$(".autorun").css('disable','true');
									$(".autorun").css('cursor','default');
									$(".autorun").attr('disabled',true);
 				        		    $(".Procedure").css('color','red');
									$(".Procedure").css({'color':'red','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.solution").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure_banner").fadeIn();	
							
						});
							  
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

						   $(".Cross_PB").click(function(){
														 
								$(".Procedure_banner").hide();	
								$(".input1").focus();
								
							});	
							 
	 					   $(".Cross_BM").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								
							});	

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	
				randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				                                          }	
				
					var range_startX1 = 1000;
					var range_finX1 = 9999;
					var range_startX2 = 1000000;
					var range_finX2 = 9999999;
					var range_startX3 = 100000;
					var range_finX3 = 999999;
					var range_startX4 = 1000;
					var range_finX4 = 9999;
					var array_Range = 600;
					
					///////////////////////////////////////////////////
					
					var next_val = 0;
				
					var array_Range = 100;
					
					var R1_Arr = new Array();
					var R2_Arr = new Array();
					var R3_Arr = new Array();
					var R4_Arr = new Array();
					
					var R5_Arr = new Array();
					var R11_Arr = new Array();
					var R1_indexArr = new Array();
					
					Q1_Arr = new Array();
					Q2_Arr = new Array();
					Q3_Arr = new Array();
					Q4_Arr = new Array();	
					Q5_Arr = new Array();	
					Q6_Arr = new Array();
					Q7_Arr = new Array();	
				
					var temp_str;
					var ta1;
					var ta2;
					var ta3;
					var ta4;
					var ta5;
					var ta6;
					var ta7;
					var ta8;
					var q1_txt;
					var counter = 0;
					var wt_id1;
					
					window.polygon_cordinates = new Array();;
		
				
				quesGeneration = function(){
					//var R1_Arr = new Array();
	for (var i = 0; i<array_Range; i++) {
	
	
	Zx = ["4", "3", "3", "5"];
	Zy = ["1", "5", "2", "3"];
	
	ques_X1 = ["1", "1", "1", "1"];
	ques_Y1 = ["1", "3", "2", "2"];
	
	ques_X2 = ["2", "1", "3", "1"];
	ques_Y2 = ["1", "1", "1", "4"];
	
	ques_RHS1 = ["5", "6", "8", "8"];
	ques_RHS2 = ["6", "2", "6", "8"];
	
	
	//////////////////////////////////////////////////////////
	
	x1 = [0,0,0,0];
	y1 = [5,2,4,4];
	x2 = [5,6,8,8];
	y2 = [0,0,0,0];
	x3 = [2,3,2,2];
	y3 = [3,1,3,3];
	
	
	x_1 = [0, 0, 0, 0];
	y_1 = [6, 2, 6, 2];
	x_2 = [3, 2, 2, 8];
	y_2 = [0, 0, 0, 0];
	x_3 = [2, 1, 1, 4];
	y_3 = [2, 1, 3, 1];
	
	
	x3_1 = [0, 0, 0, 0];
	y3_1 = [-1, -1, -3, 1];
	x3_2 = [0, 0, 0, 0];
	y3_2 = [2, 2, 2, 3];
	x3_3 = [0, 0, 0, 0];
	y3_3 = [3, 1, 1, 5];
	
	
	x4_1 = [-1, -1, -3, 1];
	y4_1 = [0, 0, 0, 0];
	x4_2 = [2, 2, 2, 3];
	y4_2 = [0, 0, 0, 0];
	x4_3 = [3, 1, 1, 5];
	y4_3 = [0, 0, 0, 0];
	
	version_type = [1 ,2, 3, 4];
	
	
	
	///////////////////////////////////////////////////////////////
	j = Math.floor(Math.random() * x_1.length);
	//j = 0;
	
if(true){
	
	Q1_Arr.push(x1[j]+"@"+y1[j]+"@"+x2[j]+"@"+y2[j]+"@"+x3[j]+"@"+y3[j]+"@"+x_1[j]+"@"+y_1[j]+"@"+x_2[j]+"@"+y_2[j]+"@"+x_3[j]+"@"+y_3[j]
		+"@"+x3_1[j]+"@"+y3_1[j]+"@"+x3_2[j]+"@"+y3_2[j]+"@"+x3_3[j]+"@"+y3_3[j]+"@"+x4_1[j]+"@"+y4_1[j]+"@"+x4_2[j]+"@"+y4_2[j]+"@"+x4_3[j]+"@"+y4_3[j]																															    +"@"+Zx[j]+"@"+Zy[j]+"@"+ques_X1[j]+"@"+ques_Y1[j]+"@"+ques_X2[j]+"@"+ques_Y2[j]+"@"+ques_RHS1[j]+"@"+ques_RHS2[j]+"@"+version_type[j]);
	
}
		
	}
	Q2_Arr = Remove_Duplicate_Entry(String(Q1_Arr));	
				//alert(Q2_Arr+"   Q3_Arr");
				//alert(String(Q3_Arr).length+"   Q3_Arr");
				
				};
					
			/*/////////////////////////R1_Arr////////////////////////////////*/
		
			nextQuesGeneration = function(){
				$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
				$(".Step1,.Step1_1,.Step1_2,.solutionText").hide();
				howVar = 1;
				abc = 0;
					next_val++;
					
				if (next_val>=((Q2_Arr.length)-1)) {
					next_val = 1;
				}
				temp1 = String(Q2_Arr[next_val]).split("@");
				
					
				val1 = temp1[0];
				val2 = temp1[1];
				val3 = temp1[2];
				val4 = temp1[3];
				val5 = temp1[4];
				val6 = temp1[5];
				val7 = temp1[6];
				val8 = temp1[7];
				val9 = temp1[8];
				val10 = temp1[9];
				val11 = temp1[10];
				val12 = temp1[11];
				
				
				
				val13 = temp1[12];
				val14 = temp1[13];
				val15 = temp1[14];
				val16 = temp1[15];
				val17 = temp1[16];
				val18 = temp1[17];
				val19 = temp1[18];
				val20 = temp1[19];
				val21 = temp1[20];
				val22 = temp1[21];
				val23 = temp1[22];
				val24 = temp1[23];
				
				
				
				Zx = temp1[24];
				Zy = temp1[25];
				ques_X1 = temp1[26];
				ques_Y1 = temp1[27];
				
				ques_X2 = temp1[28];
				ques_Y2 = temp1[29];
				ques_RHS1 = temp1[30];
				ques_RHS2 = temp1[31];
				window.version_type = temp1[32];
				
				
				//alert(val13+" = "+val14+" = "+val15);
				//alert(val17+" = "+val18+" = "+val19);
				
				
				/*-------------------------  Line Shade Regions with (0, 0) test points   -------------------------*/
				
				line1_Shade_ans = "left";
				line2_Shade_ans = "left";
				line3_Shade_ans = "right";
				line4_Shade_ans = "right";
				
				/*-------------------------Line Shade Regions with (0, 0) test points ends------------------------*/
				
				is_Bounded = true;
				
				$(".forth_row").hide();
				
				if(version_type == 1)
				{
				
				polygon_cordinates = [1,4,5,0,3,0];
				condition4 = 0;
				
				max_cord_X = 5;
				max_cord_Y = 0;
				}
				else if(version_type == 2)
				{
				
				polygon_cordinates = [0,2,2,0,0,0];
				condition4 = 0;
				
				max_cord_X = 0;
				max_cord_Y = 2;
				
				}
				else if(version_type == 3)
				{
					
				polygon_cordinates = [0,4,0.8,3.6,2,0,0,0]
				condition4 = Zx*polygon_cordinates[6] + Zy*polygon_cordinates[7];
				
				max_cord_X = 4/5;
				max_cord_Y = 18/5;
				
				$(".poly_coordX4").html(polygon_cordinates[6]);
				$(".poly_coordY4").html(polygon_cordinates[7]);
				$(".condition4").html(condition4);
				$(".forth_row").show();
				}
				else if(version_type == 4)
				{
				polygon_cordinates = [0,2,8,0,0,0];
				condition4 = 0;
				
				max_cord_X = 8;
				max_cord_Y = 0;
					
				}
				
				condition1 = Zx*polygon_cordinates[0] + Zy*polygon_cordinates[1];
				condition2 = Zx*polygon_cordinates[2] + Zy*polygon_cordinates[3];
				condition3 = Zx*polygon_cordinates[4] + Zy*polygon_cordinates[5];
				
				polygon_cord_array = ([condition1,condition2,condition3,condition4]).sort(function(a,b){return a-b;});
				
				maximum_value = pround((polygon_cord_array[3]),-1);
				$(".maximum_value").html(maximum_value);
				
				
				$(".max_cord_X").html(max_cord_X);
				$(".max_cord_Y").html(max_cord_Y);
				
				poly_coordX1 = polygon_cordinates[0];
				poly_coordY1 = polygon_cordinates[1];
				poly_coordX2 = polygon_cordinates[2];
				poly_coordY2 = polygon_cordinates[3];
				poly_coordX3 = polygon_cordinates[4];
				poly_coordY3 = polygon_cordinates[5];
				
				
				$(".poly_coordX1").html(poly_coordX1);
				$(".poly_coordY1").html(poly_coordY1);
				$(".poly_coordX2").html(poly_coordX2);
				$(".poly_coordY2").html(poly_coordY2);
				$(".poly_coordX3").html(poly_coordX3);
				$(".poly_coordY3").html(poly_coordY3);
				
				
				$(".condition1").html(condition1);
				$(".condition2").html(pround(condition2,-1));
				$(".condition3").html(condition3);
				
				
				$(".val1").html(val1);
				$(".val2").html(val2);
				$(".val3").html(val3);
				$(".val4").html(val4);
				$(".val5").html(val5);
				$(".val6").html(val6);
				$(".val7").html(val7);
				$(".val8").html(val8);
				$(".val9").html(val9);
				$(".val10").html(val10);
				$(".val11").html(val11);
				$(".val12").html(val12);
				$(".val13").html(val13);
				$(".val14").html(val14);
				$(".val15").html(val15);
				$(".val16").html(val16);
				$(".val17").html(val17);
				$(".val18").html(val18);
				$(".val19").html(val19);
				$(".val20").html(val20);
				$(".val21").html(val21);
				$(".val22").html(val22);
				$(".val23").html(val23);
				$(".val24").html(val24);
				
				
			
				if(Zx == 1){
					$(".Zx").html("");
				}
				else{
					$(".Zx").html(Zx);
				}
				
				if(Zy == 1){
					$(".Zy").html("");
				}
				else{
					$(".Zy").html(Zy);
				}
				
				if(ques_X1 == 1){
					$(".ques_X1").html("");
				}
				else{
					$(".ques_X1").html(ques_X1);
				}
				
				
				if(ques_Y1 == 1){
					$(".ques_Y1").html("");
				}
				else{
					$(".ques_Y1").html(ques_Y1);
				}
				
				
				if(ques_X2 == 1){
					$(".ques_X2").html("");
				}
				else{
					$(".ques_X2").html(ques_X2);
				}
				
				
				if(ques_Y2 == 1){
					$(".ques_Y2").html("");
				}
				else{
					$(".ques_Y2").html(ques_Y2);
				}
				
				
			$(".ques_RHS1").html(ques_RHS1);
			$(".ques_RHS2").html(ques_RHS2);
				
				
				
////////////////////////////////////////for solution work///////////////////////////////////////////////
				
				if(val1 < 0){
					X1 = val1.split("-").join("–");
				}
				else{
					X1 = val1;
				}
				
				if(val2 < 0){
					Y1 = val2.split("-").join("–");
				}
				else{
					Y1 = val2;
				}
				
				if(val3 < 0){
					X2 = val3.split("-").join("–");
				}
				else{
					X2 = val3;
				}
				
				if(val4 < 0){
					Y2 = val4.split("-").join("–");
				}
				else{
					Y2 = val4;
				}
				
				if(val5 < 0){
					X3 = val5.split("-").join("–");
				}
				else{
					X3 = val5;
				}
				
				if(val6 < 0){
					Y3 = val6.split("-").join("–");
				}
				else{
					Y3 = val6;
				}
				
				if(val7 < 0){
					X_1 = val7.split("-").join("–");
				}
				else{
					X_1 = val7;
				}
				
				if(val8 < 0){
					Y_1 = val8.split("-").join("–");
				}
				else{
					Y_1 = val8;
				}
				
				if(val9 < 0){
					X_2 = val9.split("-").join("–");
				}
				else{
					X_2 = val9;
				}
				
				if(val10 < 0){
					Y_2 = val10.split("-").join("–");
				}
				else{
					Y_2 = val10;
				}
				
				if(val11 < 0){
					X_3 = val11.split("-").join("–");
				}
				else{
					X_3 = val11;
				}
				
				if(val12 < 0){
					Y_3 = val12.split("-").join("–");
				}
				else{
					Y_3 = val12;
				}
				
				
				$(".X1").html(X1);
				$(".X2").html(X2);
				$(".X3").html(X3);
				$(".Y1").html(Y1);
				$(".Y2").html(Y2);
				$(".Y3").html(Y3);
				$(".X_1").html(X_1);
				$(".X_2").html(X_2);
				$(".X_3").html(X_3);
				$(".Y_1").html(Y_1);
				$(".Y_2").html(Y_2);
				$(".Y_3").html(Y_3);
				
				
				
				
	///////////////////////////////////////////////////////////////////////////////////////
		
		numX1 = CoOrdinateX(val1);
		numY1 = CoOrdinateY(val2);
		numX2 = CoOrdinateX(val3);
		numY2 = CoOrdinateY(val4);	
		numX3 = CoOrdinateX(val5);
		numY3 = CoOrdinateY(val6);	
		
		numX_1 = CoOrdinateX(val7);
		numY_1 = CoOrdinateY(val8);
		numX_2 = CoOrdinateX(val9);
		numY_2 = CoOrdinateY(val10);	
		numX_3 = CoOrdinateX(val11);
		numY_3 = CoOrdinateY(val12);	
		
		
		numX3_1 = CoOrdinateX(val13);
		numY3_1 = CoOrdinateY(val14);
		numX3_2 = CoOrdinateX(val15);
		numY3_2 = CoOrdinateY(val16);	
		numX3_3 = CoOrdinateX(val17);
		numY3_3 = CoOrdinateY(val18);	
		
		
		numX4_1 = CoOrdinateX(val19);
		numY4_1 = CoOrdinateY(val20);
		numX4_2 = CoOrdinateX(val21);
		numY4_2 = CoOrdinateY(val22);	
		numX4_3 = CoOrdinateX(val23);
		numY4_3 = CoOrdinateY(val24);	
		
		//alert(val1+" = "+val2+" = "+val3+" = "+val4+" = "+val5+" = "+val6)
		
		
		window.radio_Response1 = null;
		window.radio_tick1 = 0;
		
		
		if (next_val>500){
			next_val = 0;
		}


}
			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			quesGeneration();
			nextQuesGeneration();  ///// Calling question..
			
			
			radioReturn = function(radio_Response, radio_tick)
			{
				if(String(radio_Response) == String(is_Bounded))
				{
				radio_Response1 = true;
				
				}
				else
				{
				radio_Response1 = false;	
				}
				radio_tick1 = radio_tick;
			
			}
			
			
				doneButton = function(){
					
					var k1_text = trimspaces_new(document.getElementById("inputText").value);
					
					ent_ans = Number(k1_text);
					
					/*if($(".txt1").css("display") != "none"){
							$(".Done_con").show();
						    doneConHeight = $(".Done_con").height();
							$(".Done_con").css("padding",doneConHeight/2+"px");
					 }
					
					else{*/
					
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.prompt_New").hide();
					$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").css("visibility","hidden");
					 $(".howTo_div").hide();
					ansX1=numX1;
					ansX2=numX2;
					ansX3=numX3;
					ansY1=numY1;
					ansY2=numY2;
					ansY3=numY3;
					
					ansX_1=numX_1;
					ansX_2=numX_2;
					ansX_3=numX_3;
					ansY_1=numY_1;
					ansY_2=numY_2;
					ansY_3=numY_3;
					
					
					ansX3_1=numX3_1;
					ansX3_2=numX3_2;
					ansX3_3=numX3_3;
					ansY3_1=numY3_1;
					ansY3_2=numY3_2;
					ansY3_3=numY3_3;
					
					
					ansX4_1=numX4_1;
					ansX4_2=numX4_2;
					ansX4_3=numX4_3;
					ansY4_1=numY4_1;
					ansY4_2=numY4_2;
					ansY4_3=numY4_3;
					
					
					//alert(val13+" = "+val14+" = "+val15);
					//alert(val17+" = "+val18+" = "+val19);
					
					
					eq1 = (Number(ques_X1)*Number(val1)) + (Number(ques_Y1)*Number(val2))
					eq2 = (Number(ques_X1)*Number(val3)) + (Number(ques_Y1)*Number(val4))
					eq3 = (Number(ques_X1)*Number(val5)) + (Number(ques_Y1)*Number(val6))
					
					Sol_eq1 = (Number(ques_X1)*Number(x11)) + (Number(ques_Y1)*Number(y11))
					Sol_eq2 = (Number(ques_X1)*Number(x21)) + (Number(ques_Y1)*Number(y21))
					Sol_eq3 = (Number(ques_X1)*Number(x31)) + (Number(ques_Y1)*Number(y31))
					
					eq4 = (Number(ques_X2)*Number(val7)) + (Number(ques_Y2)*Number(val8))
					eq5 = (Number(ques_X2)*Number(val9)) + (Number(ques_Y2)*Number(val10))
					eq6 = (Number(ques_X2)*Number(val11)) + (Number(ques_Y2)*Number(val12))
					
					Sol_eq4 = (Number(ques_X2)*Number(x1_1)) + (Number(ques_Y2)*Number(y1_1))
					Sol_eq5 = (Number(ques_X2)*Number(x2_1)) + (Number(ques_Y2)*Number(y2_1))
					Sol_eq6 = (Number(ques_X2)*Number(x3_1)) + (Number(ques_Y2)*Number(y3_1))
					
					
					/*arr1 = [eq1,eq2,eq3]
					arr2 = [Sol_eq1,Sol_eq2,Sol_eq3];
					
					resArr = arr1.sort(function(a,b){
					return a-b;
					})
					resArr2 = arr2.sort(function(a,b){
					return a-b;
					})
					*/
					
					res = ((eq1 == Sol_eq1) && (eq2 == Sol_eq2) && (eq3 == Sol_eq3))
					res2 = ((eq4 == Sol_eq4) && (eq5 == Sol_eq5) && (eq6 == Sol_eq6))
					
					res3 = ((x1_2 == 0) && (x2_2 == 0) && (x3_2 == 0))
					res4 = ((y1_3 == 0) && (y2_3 == 0) && (y3_3 == 0))
					
					line_shade_result = ((line1_Shade == line1_Shade_ans) && (line2_Shade == line2_Shade_ans) && 
										 (line3_Shade == line3_Shade_ans) && (line4_Shade == line4_Shade_ans))
					
					
					
					finalAns1 = ((CoOrdinateX1 == ansX1) && (CoOrdinateY1 == ansY1) && (CoOrdinateX2 == ansX2) && (CoOrdinateY2 == ansY2) && (CoOrdinateX3 == ansX3) && (CoOrdinateY3 == ansY3) && (CoOrdinateX_1 == ansX_1) && (CoOrdinateY_1 == ansY_1) && (CoOrdinateX_2 == ansX_2) && (CoOrdinateY_2 == ansY_2) && (CoOrdinateX_3 == ansX_3) && (CoOrdinateY_3 == ansY_3));
					
					finalAns2 = ((CoOrdinateX1 == ansX3) && (CoOrdinateY1 == ansY3) && (CoOrdinateX2 == ansX2) && (CoOrdinateY2 == ansY2) && (CoOrdinateX3 == ansX1) && (CoOrdinateY3 == ansY1) && (CoOrdinateX_1 == ansX_3) && (CoOrdinateY_1 == ansY_3) && (CoOrdinateX_2 == ansX_2) && (CoOrdinateY_2 == ansY_2) && (CoOrdinateX_3 == ansX_1) && (CoOrdinateY_3 == ansY_1));
					
					finalAns3 = ((CoOrdinateX1 == ansX1) && (CoOrdinateY1 == ansY1) && (CoOrdinateX2 == ansX2) && (CoOrdinateY2 == ansY2) && (CoOrdinateX3 == ansX3) && (CoOrdinateY3 == ansY3) && (CoOrdinateX_1 == ansX_3) && (CoOrdinateY_1 == ansY_3) && (CoOrdinateX_2 == ansX_2) && (CoOrdinateY_2 == ansY_2) && (CoOrdinateX_3 == ansX_1) && (CoOrdinateY_3 == ansY_1));
					
					finalAns4 = ((CoOrdinateX1 == ansX3) && (CoOrdinateY1 == ansY3) && (CoOrdinateX2 == ansX2) && (CoOrdinateY2 == ansY2) && (CoOrdinateX3 == ansX1) && (CoOrdinateY3 == ansY1) && (CoOrdinateX_1 == ansX_1) && (CoOrdinateY_1 == ansY_1) && (CoOrdinateX_2 == ansX_2) && (CoOrdinateY_2 == ansY_2) && (CoOrdinateX_3 == ansX_3) && (CoOrdinateY_3 == ansY_3));
						
//////////////////////////////////////////////////////////////////////////
					//alert(finalAns1+"  "+finalAns2+"  "+finalAns3+"  "+finalAns4)
					//alert(checkLeft == 1 && checkIntersectLeft == 1 && check == 2)
				//	alert(res +"&&"+ res2 +"&&"+ res3 +"&&"+ res4 +"&&"+ line_shade_result)
				
				/*alert(ent_ans == maximum_value)
				alert(res && res2 && res3 && res4)
				alert(line_shade_result)
				alert(checkIntersectRight)*/
				//alert(radio_Response1)
				
				
					if(line4_Shade == null) {
							$(".blank").html("Plot the ");
							$(".blank1").html("graph");
							$(".prompt_New").hide();
							$(".blankMessage_New").show().delay(2500).hide(0);	
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").css("visibility","hidden");
						}
					else if(radio_Response1 == null) {
						
							$(".Radio_Table tbody tr:first-child td").addClass("blink_class");
							setTimeout(function(){
							$(".Radio_Table tbody tr:first-child td").removeClass("blink_class");					
												},3000)
						
							$(".blank").html("Choose the ");
							$(".blank1").html("option");
							$(".prompt_New").hide();
							$(".blankMessage_New").show().delay(2500).hide(0);	
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").css("visibility","hidden");
						}
					else if(k1_text == "") {
						
						
						$(".input").addClass("input_blink_class");
						
							setTimeout(function(){
												$(".input1").focus();
							$(".input").removeClass("input_blink_class");	
							
												},3000)
						
							$(".blank").html("Enter the ");
							$(".blank1").html("value");
							$(".prompt_New").hide();
							$(".blankMessage_New").show().delay(2500).hide(0);	
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2,.Wrng3,.Wrt3,.Wrng4,.Wrt4").css("visibility","hidden");
						}
						
						else 
						{
							
						score1 = 0;
						score2 = 0;
						score3 = 0;
						
						if(radio_Response1)
						{
						score1 = 1;	
						}
						else
						{
						score1 = 0;	
						}
						
						if(ent_ans == maximum_value)
						{
						score2 = 1;	
						}
						else
						{
						score2 = 0;	
						}
						
						
						if((res && res2 && res3 && res4) && (line_shade_result && checkIntersectRight == 1))
						{
						score3 = 1;	
						}
						else
						{
						score3 = 0;	
						}
						
						
						if (score1 == 1) {
							$(".Wrt"+radio_tick1).css('visibility','visible');
							$(".Wrng"+radio_tick1).css('visibility','hidden');
						} else {
							$(".Wrng"+radio_tick1).css('visibility','visible');
							$(".Wrt"+radio_tick1).css('visibility','hidden');
						}
						if (score2 == 1) {
							$(".Wrt3").css('visibility','visible');
							$(".Wrng3").css('visibility','hidden');
						} else {
							$(".Wrng3").css('visibility','visible');
							$(".Wrt3").css('visibility','hidden');
						}
						
						if (score3 == 1) {
							$(".Wrt4").css('visibility','visible');
							$(".Wrng4").css('visibility','hidden');
						} else {
							$(".Wrng4").css('visibility','visible');
							$(".Wrt4").css('visibility','hidden');
						}
						
						finalScore = Number(score1+score2+score3)/3;
						
						
				
							if (finalScore == 1){
								$(".remark,.correct").show();
								$(".prompt_New").hide();
							}
							else if(finalScore > 0 && finalScore < 1)
							{
							$(".prompt_New").hide();
							$(".incomplete_New").show().delay(2500).hide(0);		
							}
							else{		
							$(".prompt_New").hide();
								$(".remark,.incorrect").show();
							}
						
						}
						
					//}
				 }
				 

			var timeArr = [1800, 2000, 400, 700, 1000, 1500, 2000, 2400, 2700, 3000, 3500, 4000, 4500, 5500, 6000, 6500, 7500, 8000, 8500, 9500];
			
			resetTimeOut = function() {
				reset();
				
				$(".solutionText").hide();
				$(".Step1").css({"display":"none"});
				$(".howTo").hide(); 
				$(".howTo_div").show();
				clearTimeout(timeout01)
				clearTimeout(timeout02)
				clearTimeout(timeout03)
				clearTimeout(timeout1)
				clearTimeout(timeout2)
				clearTimeout(timeout3)
				clearTimeout(timeout4)
				clearTimeout(timeout5)
				clearTimeout(timeout6)
				clearTimeout(timeout7)
				clearTimeout(timeout8)
				clearTimeout(timeout9)
				clearTimeout(timeout10)
				clearTimeout(timeout11)
				clearTimeout(timeout12)
				clearTimeout(timeout13)
				clearTimeout(timeout14)
				clearTimeout(timeout15)
				clearTimeout(timeout16)
				clearTimeout(timeout17)
				clearTimeout(timeout18)
			}
					
					
					
			 showSolution = function(){
				console.log(timeArr) 
				solutionClicked++;

				startAnim = true;
				if(solutionClicked > 1){
					timeArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				} else {
					timeArr = [1800, 2000, 400, 700, 1000, 1500, 2000, 2400, 2700, 3000, 3500, 4000, 4500, 5500, 6000, 6500, 7500, 8000, 8500, 9500];
				}

				
				
				$(".howTo_div").hide();
				animCount++;
				
				
				if(animCount==1){
					
					// reset(); 
				  
				  $(".disable_div").show();
				  timeout01 = setTimeout(function(){
					   $(".Graph_main_div").addClass('graph_anim');	
					   $(".solutionText").hide();

					   if(!startAnim){ 
							resetTimeOut();
						}
					   
				  });
				 
				  timeout02 = setTimeout(function(){
					
					 sb=0;
					 autorunVar = 1  ////0 when in teacher mode
					 howVar = 2;
					 solClick = 1;
				     $(".blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
					 $(".solutionMainSteps,.solutionText").hide();
 					 $(".solutionMainSteps,.solutionText,.Step1,.Step2").show().css({"display":"inline-block"});
					 $(".howTo").show(); 
					 $(".howTo_div").hide();
					 $(".crcl").css("pointer-events", "none");
					 //$(".left,.right,.radBtn,.handCursor").css("pointer-events", "none");
					 $('input[name="selector"]').prop('checked',false); 
					 if(!startAnim){ 
						resetTimeOut();
					}

					sol();
				  },timeArr[0]);
				 
				  timeout03 = setTimeout(function(){
					
					   $(".disable_div").hide();
					   	right_howtodiv  = ($(".solutionMainSteps").width()+($(".Graph_main_div").width()-($(".Btn_td1").width())*2))/2;
	                    $(".howTo_div").css("right",right_howtodiv+"px" );
						if(checkMobile)
						{
							var port = window.matchMedia("(orientation:portrait)")	
							if(port.matches){
								$(".howTo_div").css("right",50+"%" );
							}
						}
						if(!startAnim){ 
							resetTimeOut();
						}
				  },timeArr[1]);
				 
				} else{
					$(".Graph_main_div").removeClass('graph_anim').addClass('extraclass');
					$(".solutionMainSteps,.solutionText,.Step1").show().css({"display":"inline-block"});
					sol1();
				}
					 
			}
			
			function sol(){
				if(CoOrdinateX1 > 0){
					$(".crcl").css("opacity" , "0");
					$(".crcl1,.crcl2,.crcl3").css("opacity" , "0");
					$(".final_line,.final_line2,.crcle1,.crcle2,.crcle3").css("display","none");
					$(".crcl4,.crcl5,.crcl6").css("opacity" , "0");
					$(".final_line3,.final_line4,.crcle4,.crcle5,.crcle6").css("display","none");
					$(".poly1,.poly2,.poly3,.poly4,.poly5,.poly6").css("display","none");
				}
					
				CoOrdinateX1=numX1;
				CoOrdinateX2=numX2;
				CoOrdinateX3=numX3;
				CoOrdinateY1=numY1;
				CoOrdinateY2=numY2;
				CoOrdinateY3=numY3;
				
				CoOrdinateX_1=numX_1;
				CoOrdinateX_2=numX_2;
				CoOrdinateX_3=numX_3;
				CoOrdinateY_1=numY_1;
				CoOrdinateY_2=numY_2;
				CoOrdinateY_3=numY_3;
				
				CoOrdinateX3_1=numX3_1;
				CoOrdinateX3_2=numX3_2;
				CoOrdinateX3_3=numX3_3;
				CoOrdinateY3_1=numY3_1;
				CoOrdinateY3_2=numY3_2;
				CoOrdinateY3_3=numY3_3;
				
				CoOrdinateX4_1=numX4_1;
				CoOrdinateX4_2=numX4_2;
				CoOrdinateX4_3=numX4_3;
				CoOrdinateY4_1=numY4_1;
				CoOrdinateY4_2=numY4_2;
				CoOrdinateY4_3=numY4_3;
				
				x11 = val1;
				y11 = val2;
				x21 = val3;
				y21 = val4;	
				x31 = val5;
				y31 = val6;
				
				x1_1 = val7;
				y1_1 = val8;
				x2_1 = val9;
				y2_1 = val10;	
				x3_1 = val11;
				y3_1 = val12;
				
				x1_2 = val13;
				y1_2 = val14;
				x2_2 = val15;
				y2_2 = val16;	
				x3_2 = val17;
				y3_2 = val18;
				
				x1_3 = val19;
				y1_3 = val20;
				x2_3 = val21;
				y2_3 = val22;	
				x3_3 = val23;
				y3_3 = val24;
				
				
				
				line1_Shade = line1_Shade_ans;
				line2_Shade = line2_Shade_ans;
				line3_Shade = line3_Shade_ans;
				line4_Shade = line4_Shade_ans;
				
				checkIntersectRight = 1;
				
				//radio_Response1 = is_Bounded;
				
					
				timeout1 = setTimeout(function() {
					/*-------------------------New Code-----------------*/
					result_arrayA = solutionDraw(CoOrdinateX1, CoOrdinateY1, CoOrdinateX2, CoOrdinateY2, CoOrdinateX3, CoOrdinateY3);
					CoOrdinateX1 = result_arrayA[0];
					CoOrdinateY1 = result_arrayA[1];
					CoOrdinateX2 = result_arrayA[2];
					CoOrdinateY2 = result_arrayA[3];
					CoOrdinateX3 = result_arrayA[4];
					CoOrdinateY3 = result_arrayA[5];
					x2_resA = result_arrayA[6];
					y2_resA = result_arrayA[7];
					x3_resA = result_arrayA[8];
					y3_resA = result_arrayA[9];
			
			
					$(".crcle1").attr({
						"cx": CoOrdinateX1,
						"cy": CoOrdinateY1
					});
					$(".crcle2").attr({
						"cx": CoOrdinateX2,
						"cy": CoOrdinateY2
					});
					$(".crcle3").attr({
						"cx": CoOrdinateX3,
						"cy": CoOrdinateY3
					});
			
					document.querySelector(".txt1").innerHTML = "A(" + val1 + "," + val2 + ")";
					document.querySelector(".txt2").innerHTML = "B(" + val3 + "," + val4 + ")";
					document.querySelector(".txt3").innerHTML = "C(" + val5 + "," + val6 + ")";
			
					$(".crcle1,.txt1").css("display", "inline-block");
					$(".txt1").attr({
						"x": Number(CoOrdinateX1) - 5,
						"y": Number(CoOrdinateY1) + 25
					});
					$(".txt2").attr({
						"x": Number(CoOrdinateX2) - 5,
						"y": Number(CoOrdinateY2) + 25
					});
					$(".txt3").attr({
						"x": Number(CoOrdinateX3) - 5,
						"y": Number(CoOrdinateY3) + 25
					});

					if(!startAnim){ 
						resetTimeOut();
					}
			
					/*-------------------------New Code Ends-----------------*/
				}, timeArr[2])
			
			
				timeout2 = setTimeout(function() {
					$(".crcle2,.txt2").css("display", "inline-block");
					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[3])
			
				timeout3 = setTimeout(function() {
					$(".crcle3,.txt3").css("display", "inline-block");
					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[4])
			
				timeout4 = setTimeout(function() {
					line_1_points = ShadeLeft(CoOrdinateX1, CoOrdinateY1, CoOrdinateX2, CoOrdinateY2, CoOrdinateX3, CoOrdinateY3, x2_resA, y2_resA, x3_resA, y3_resA)
			
			
					$(".final_line").attr({
						"x1": CoOrdinateX2,
						"y1": CoOrdinateY2,
						"x2": x2_resA,
						"y2": y2_resA
					});
					$(".final_line2").attr({
						"x1": CoOrdinateX2,
						"y1": CoOrdinateY2,
						"x2": x3_resA,
						"y2": y3_resA
					});
					$(".final_line,.final_line2").show();
			
			
					$(".crcle1,.crcle2,.crcle3").css("display", "none");
					$(".txt1,.txt2,.txt3").css("display", "none");

					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[5])
			
				timeout5 = setTimeout(function() {
					polylinedraw2(line_1_points);
					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[6])
			
				timeout6 = setTimeout(function() {
					/*-------------------------New Code-----------------*/
					result_arrayB = solutionDraw(CoOrdinateX_1, CoOrdinateY_1, CoOrdinateX_2, CoOrdinateY_2, CoOrdinateX_3, CoOrdinateY_3);
					CoOrdinateX_1 = result_arrayB[0];
					CoOrdinateY_1 = result_arrayB[1];
					CoOrdinateX_2 = result_arrayB[2];
					CoOrdinateY_2 = result_arrayB[3];
					CoOrdinateX_3 = result_arrayB[4];
					CoOrdinateY_3 = result_arrayB[5];
					x2_resB = result_arrayB[6];
					y2_resB = result_arrayB[7];
					x3_resB = result_arrayB[8];
					y3_resB = result_arrayB[9];
			
			
			
					$(".crcle4").attr({
						"cx": CoOrdinateX_1,
						"cy": CoOrdinateY_1
					});
					$(".crcle5").attr({
						"cx": CoOrdinateX_2,
						"cy": CoOrdinateY_2
					});
					$(".crcle6").attr({
						"cx": CoOrdinateX_3,
						"cy": CoOrdinateY_3
					});
			
					document.querySelector(".txt4").innerHTML = "X(" + val7 + "," + val8 + ")";
					document.querySelector(".txt5").innerHTML = "Y(" + val9 + "," + val10 + ")";
					document.querySelector(".txt6").innerHTML = "Z(" + val11 + "," + val12 + ")";
			
					$(".crcle4,.txt4").css("display", "inline-block");
					$(".txt4").attr({
						"x": Number(CoOrdinateX_1) - 5,
						"y": Number(CoOrdinateY_1) + 25
					});
					$(".txt5").attr({
						"x": Number(CoOrdinateX_2) - 5,
						"y": Number(CoOrdinateY_2) + 25
					});
					$(".txt6").attr({
						"x": Number(CoOrdinateX_3) - 5,
						"y": Number(CoOrdinateY_3) + 25
					});
					if(!startAnim){ 
						resetTimeOut();
					}
					/*-------------------------New Code Ends-----------------*/
			
				}, timeArr[7])
			
				timeout7 = setTimeout(function() {
					$(".crcle5,.txt5").css("display", "inline-block");
					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[8])
			
				timeout8 = setTimeout(function() {
					$(".crcle6,.txt6").css("display", "inline-block");
					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[9])
		
				timeout9 = setTimeout(function() {
			
					line_2_points = ShadeLeft(CoOrdinateX_1, CoOrdinateY_1, CoOrdinateX_2, CoOrdinateY_2, CoOrdinateX_3, CoOrdinateY_3, x2_resB, y2_resB, x3_resB, y3_resB)
			
			
					$(".final_line3").attr({
						"x1": CoOrdinateX_2,
						"y1": CoOrdinateY_2,
						"x2": x2_resB,
						"y2": y2_resB
					});
					$(".final_line4").attr({
						"x1": CoOrdinateX_2,
						"y1": CoOrdinateY_2,
						"x2": x3_resB,
						"y2": y3_resB
					});
					$(".final_line3,.final_line4").show();
			
			
					$(".crcle4,.crcle5,.crcle6").css("display", "none");
					$(".txt4,.txt5,.txt6").css("display", "none");

					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[10])
			
			
				timeout10 = setTimeout(function() {
					polylinedraw4(line_2_points);
					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[11])
			
				timeout11 = setTimeout(function() {
					document.querySelector(".txt7").innerHTML = "x ≥ 0";
					$(".txt7").css("display", "inline-block");
					$(".txt7").attr({
						"x": Number(275),
						"y": Number(425)
					});
					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[12])
			
			
				timeout12 = setTimeout(function() {
					/*-------------------------New Code-----------------*/
					result_arrayC = solutionDraw(CoOrdinateX3_1, CoOrdinateY3_1, CoOrdinateX3_2, CoOrdinateY3_2, CoOrdinateX3_3, CoOrdinateY3_3);
					CoOrdinateX3_1 = result_arrayC[0];
					CoOrdinateY3_1 = result_arrayC[1];
					CoOrdinateX3_2 = result_arrayC[2];
					CoOrdinateY3_2 = result_arrayC[3];
					CoOrdinateX3_3 = result_arrayC[4];
					CoOrdinateY3_3 = result_arrayC[5];
					x2_resC = result_arrayC[6];
					y2_resC = result_arrayC[7];
					x3_resC = result_arrayC[8];
					y3_resC = result_arrayC[9];
			
					$(".final_line5").attr({
						"x1": CoOrdinateX3_2,
						"y1": CoOrdinateY3_2,
						"x2": x2_resC,
						"y2": y2_resC
					});
					$(".final_line6").attr({
						"x1": CoOrdinateX3_2,
						"y1": CoOrdinateY3_2,
						"x2": x3_resC,
						"y2": y3_resC
					});
					$(".final_line5,.final_line6").show();
					if(!startAnim){ 
						resetTimeOut();
					}
			
					/*-------------------------New Code Ends-----------------*/
			
				}, timeArr[13])
			
				timeout13 = setTimeout(function() {
					line_3_points = ShadeRight(CoOrdinateX3_1, CoOrdinateY3_1, CoOrdinateX3_2, CoOrdinateY3_2, CoOrdinateX3_3, CoOrdinateY3_3, x2_resC, y2_resC, x3_resC, y3_resC)
					polylinedraw5(line_3_points);
			
					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[14])
			
				timeout14 = setTimeout(function() {
			
					document.querySelector(".txt8").innerHTML = "y ≥ 0";
					$(".txt8").css("display", "inline-block");
					$(".txt8").attr({
						"x": Number(75),
						"y": Number(225)
					});

					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[15])
			
			
				timeout15 = setTimeout(function() {
					/*-------------------------New Code-----------------*/
					result_arrayD = solutionDraw(CoOrdinateX4_1, CoOrdinateY4_1, CoOrdinateX4_2, CoOrdinateY4_2, CoOrdinateX4_3, CoOrdinateY4_3);
					CoOrdinateX4_1 = result_arrayD[0];
					CoOrdinateY4_1 = result_arrayD[1];
					CoOrdinateX4_2 = result_arrayD[2];
					CoOrdinateY4_2 = result_arrayD[3];
					CoOrdinateX4_3 = result_arrayD[4];
					CoOrdinateY4_3 = result_arrayD[5];
					x2_resD = result_arrayD[6];
					y2_resD = result_arrayD[7];
					x3_resD = result_arrayD[8];
					y3_resD = result_arrayD[9];
			
					$(".final_line7").attr({
						"x1": CoOrdinateX4_2,
						"y1": CoOrdinateY4_2,
						"x2": x2_resD,
						"y2": y2_resD
					});
					$(".final_line8").attr({
						"x1": CoOrdinateX4_2,
						"y1": CoOrdinateY4_2,
						"x2": x3_resD,
						"y2": y3_resD
					});
					$(".final_line7,.final_line8").show();
			
			
					if(!startAnim){ 
						resetTimeOut();
					}
			
					/*-------------------------New Code Ends-----------------*/
			
			
				}, timeArr[16])
			
				timeout16 = setTimeout(function() {
					line_4_points = ShadeRight(CoOrdinateX4_1, CoOrdinateY4_1, CoOrdinateX4_2, CoOrdinateY4_2, CoOrdinateX4_3, CoOrdinateY4_3, x2_resD, y2_resD, x3_resD, y3_resD)
			
					polylinedraw7(line_4_points);
					if(!startAnim){ 
						resetTimeOut();
					}
			
				}, timeArr[17])
				
			
				timeout17 = setTimeout(function(){
					$(".txt7,.txt8").css("display","none");			
					pointPolygon();
					if(!startAnim){ 
						resetTimeOut();
					}
				}, timeArr[18])
				
				
				timeout18 = setTimeout(function(){
					polylinedraw9(correct_region);
					if(!startAnim){ 
						resetTimeOut();
					}				
				}, timeArr[19])
						
				check1=2;
				check = 1;
				//InterSectionAreaRightForSol();
				$(".left,.right").css("pointer-events", "none");
				
			}
			
				
			
			
			
					
				
/////////////////////////////////////////////////////////////////////////////////////////////	

/*/////////////////////////////////////////////////////////////////////////*/
	
}); //////end of Main/////////


