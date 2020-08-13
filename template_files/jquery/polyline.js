
$(document).ready(function(){
			
			pointPolygon = function(){
			
			if( Number(version_type) == 1 )
			{
			correct_region = 275+","+150+" "+375+","+250+" "+325+","+250;	
			
			$(".poly_crcle1").attr({"cx":275,"cy":150});
			$(".poly_crcle2").attr({"cx":375,"cy":250});
			$(".poly_crcle3").attr({"cx":325,"cy":250});
			$(".poly_crcle1,.poly_crcle2,.poly_crcle3").css("display","inline-block");
			
			document.querySelector(".poly_txt1").innerHTML = "A("+polygon_cordinates[0]+","+polygon_cordinates[1]+")";
			document.querySelector(".poly_txt2").innerHTML = "B("+polygon_cordinates[2]+","+polygon_cordinates[3]+")";
			document.querySelector(".poly_txt3").innerHTML = "C("+polygon_cordinates[4]+","+polygon_cordinates[5]+")";
			
			$(".poly_txt1,.poly_txt2,.poly_txt3").css("display","inline-block");
			$(".poly_txt1").attr({"x":Number(275)+15, "y":Number(150)});
			$(".poly_txt2").attr({"x":Number(375), "y":Number(250)-15});
			$(".poly_txt3").attr({"x":Number(325)-55, "y":Number(250)+25});
			
			
			}
			else if( Number(version_type) == 2 )
			{
			correct_region = 250+","+200+" "+300+","+250+" "+250+","+250;
			
			$(".poly_crcle1").attr({"cx":250,"cy":200});
			$(".poly_crcle2").attr({"cx":300,"cy":250});
			$(".poly_crcle3").attr({"cx":250,"cy":250});
			$(".poly_crcle1,.poly_crcle2,.poly_crcle3").css("display","inline-block");
			
			document.querySelector(".poly_txt1").innerHTML = "A("+polygon_cordinates[0]+","+polygon_cordinates[1]+")";
			document.querySelector(".poly_txt2").innerHTML = "B("+polygon_cordinates[2]+","+polygon_cordinates[3]+")";
			document.querySelector(".poly_txt3").innerHTML = "C("+polygon_cordinates[4]+","+polygon_cordinates[5]+")";
			
			$(".poly_txt1,.poly_txt2,.poly_txt3").css("display","inline-block");
			$(".poly_txt1").attr({"x":Number(250)+10, "y":Number(200)-10});
			$(".poly_txt2").attr({"x":Number(300)+30, "y":Number(250)+25});
			$(".poly_txt3").attr({"x":Number(250)-60, "y":Number(250)+25});
			
			
			}
			else if( Number(version_type) == 3 )
			{
			correct_region = 250+","+150+" "+270+","+162+" "+300+","+250+" "+250+","+250;	
			
			$(".poly_crcle1").attr({"cx":250,"cy":150});
			$(".poly_crcle2").attr({"cx":270,"cy":162});
			$(".poly_crcle3").attr({"cx":300,"cy":250});
			$(".poly_crcle4").attr({"cx":250,"cy":250});
			$(".poly_crcle1,.poly_crcle2,.poly_crcle3,.poly_crcle4").css("display","inline-block");
			
			
			document.querySelector(".poly_txt1").innerHTML = "A("+polygon_cordinates[0]+","+polygon_cordinates[1]+")";
			document.querySelector(".poly_txt2").innerHTML = "B("+polygon_cordinates[2]+","+polygon_cordinates[3]+")";
			document.querySelector(".poly_txt3").innerHTML = "C("+polygon_cordinates[4]+","+polygon_cordinates[5]+")";
			document.querySelector(".poly_txt4").innerHTML = "D("+polygon_cordinates[6]+","+polygon_cordinates[7]+")";
			
			$(".poly_txt1,.poly_txt2,.poly_txt3,.poly_txt4").css("display","inline-block");
			$(".poly_txt1").attr({"x":Number(250)-60, "y":Number(150)+15});
			$(".poly_txt2").attr({"x":Number(270)+5, "y":Number(162)-15});
			$(".poly_txt3").attr({"x":Number(300)+15, "y":Number(250)+25});
			$(".poly_txt4").attr({"x":Number(250)-60, "y":Number(250)+25});
			
			}
			else if( Number(version_type) == 4 )
			{
			correct_region = 250+","+200+" "+450+","+250+" "+250+","+250;
			
			$(".poly_crcle1").attr({"cx":250,"cy":200});
			$(".poly_crcle2").attr({"cx":450,"cy":250});
			$(".poly_crcle3").attr({"cx":250,"cy":250});
			$(".poly_crcle1,.poly_crcle2,.poly_crcle3").css("display","inline-block");
			
			document.querySelector(".poly_txt1").innerHTML = "A("+polygon_cordinates[0]+","+polygon_cordinates[1]+")";
			document.querySelector(".poly_txt2").innerHTML = "B("+polygon_cordinates[2]+","+polygon_cordinates[3]+")";
			document.querySelector(".poly_txt3").innerHTML = "C("+polygon_cordinates[4]+","+polygon_cordinates[5]+")";
			
			$(".poly_txt1,.poly_txt2,.poly_txt3").css("display","inline-block");
			$(".poly_txt1").attr({"x":Number(250)+5, "y":Number(200)-10});
			$(".poly_txt2").attr({"x":Number(450)-60, "y":Number(250)+25});
			$(".poly_txt3").attr({"x":Number(250)-60, "y":Number(250)+25});
			
			}
			}
	
	
polylinedraw1 = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly1 = document.createElementNS(NS, "polyline")
			$(poly1).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#00A9FF",
			"fill-opacity":".2"
			
			});
			
			$(poly1).addClass('poly1')
			$(svg).append(poly1)
			document.querySelector(".svg1").prepend(svg);
			
			$(".poly1").attr("onClick","polyClick1()");
}


polylinedraw2 = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly2 = document.createElementNS(NS, "polyline")
			$(poly2).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#00A9FF",
			"fill-opacity":".2"
			
			});
			
			$(poly2).addClass('poly2')
			$(svg).append(poly2)
			document.querySelector(".svg1").prepend(svg);
			
			$(".poly2").attr("onClick","polyClick2()");
}


polylinedraw3 = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly3 = document.createElementNS(NS, "polyline")
			$(poly3).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#008000",
			"fill-opacity":".2"
			
			});
			
			$(poly3).addClass('poly3')
			$(svg).append(poly3)
			document.querySelector(".svg1").prepend(svg);
			
			$(".poly3").attr("onClick","polyClick3()");
}


polylinedraw4 = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly4 = document.createElementNS(NS, "polyline")
			$(poly4).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#008000",
			"fill-opacity":".2"
			
			});
			
			$(poly4).addClass('poly4')
			$(svg).append(poly4)
			document.querySelector(".svg1").prepend(svg);
			
			$(".poly4").attr("onClick","polyClick4()");
}



	
polylinedraw5 = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly5 = document.createElementNS(NS, "polyline")
			$(poly5).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#EE82EE",
			"fill-opacity":".2"
			
			});
			
			$(poly5).addClass('poly5')
			$(svg).append(poly5)
			document.querySelector(".svg1").prepend(svg);
			
			$(".poly5").attr("onClick","polyClick5()");
}


polylinedraw6 = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly6 = document.createElementNS(NS, "polyline")
			$(poly6).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#EE82EE",
			"fill-opacity":".2"
			
			});
			
			$(poly6).addClass('poly6')
			$(svg).append(poly6)
			document.querySelector(".svg1").prepend(svg);
			
			$(".poly6").attr("onClick","polyClick6()");
}


polylinedraw7 = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly7 = document.createElementNS(NS, "polyline")
			$(poly7).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#8B4513",
			"fill-opacity":".2"
			
			});
			
			$(poly7).addClass('poly7')
			$(svg).append(poly7)
			document.querySelector(".svg1").prepend(svg);
			
			$(".poly7").attr("onClick","polyClick7()");
}


polylinedraw8 = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly8 = document.createElementNS(NS, "polyline")
			$(poly8).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#8B4513",
			"fill-opacity":".2"
			
			});
			
			$(poly8).addClass('poly8')
			$(svg).append(poly8)
			document.querySelector(".svg1").prepend(svg);
			
			$(".poly8").attr("onClick","polyClick8()");
}


polylinedraw9 = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly9 = document.createElementNS(NS, "polygon")
			$(poly9).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#DC143C",
			"fill-opacity":"1"
			
			});
			
			$(poly9).addClass('poly9')
			$(svg).append(poly9)
			document.querySelector(".svg1").appendChild(svg);
			
			$(".poly9").attr("onClick","polyClick9()");
			
			
			
}


polylinedrawAns = function(point)
{
			var NS = "http://www.w3.org/2000/svg";
			var svg = document.createElementNS(NS, "svg");
			
			svg.setAttribute("viewBox", "0 0 520 465");
			
			var poly10 = document.createElementNS(NS, "polygon")
			$(poly10).attr({
			points: point
			}).css({
			"stroke": "transperant",
			"stroke-width": "1px",
			"fill":"#DC143C",
			"fill-opacity":"0"
			
			});
			
			$(poly10).addClass('poly10')
			$(svg).append(poly10)
			document.querySelector(".svg1").appendChild(svg);
			
			$(".poly10").attr("onClick","polyClick9()");
			
			
			
}


});