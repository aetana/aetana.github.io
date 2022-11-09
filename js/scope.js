x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c){   	// 8 9 10
	console.log(x);		        // x = not inital
	console.log(a);		        // a = 8
	var f = function(a, b, c){  //a = 8 b = 9 c = 10
		b = a;
		console.log(b);	        // b = 8
		b = c;
		var x = 5;
		
	}
	f(a, b, c);		//
	console.log(b);		//b = 10 x 9
	var x = 10;
}
c(8, 9, 10);
console.log(b);	//b = undefi
console.log(x);	//x = 1