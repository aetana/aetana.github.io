console.log("***************1. Scope*****************")

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
	f(a, b, c);		    //
	console.log(b);		//b = 10 x 9
	var x = 10;
}
c(8, 9, 10);
console.log(b);	//b = undefi
console.log(x);	//x = 1


console.log("***************E. Scope*****************")

console.log(aman);
var aman;
console.log(aman);
aman = 5;
console.log(aman);

//console.log(m);

console.log("***************E. Scope*****************")
outer();
console.log(m);
function outer(){

    function inner(){
        m = 5;
    }
    inner();
}

console.log("***************4. Scope*****************")
var x = 9;
function myFunction(){
	return x * x;
}
console.log(myFunction()); // this will give as the square of the global variable 9*9 => 81
x = 5;
console.log(myFunction()); // the global variable 5 is assigned global variable x so the result will give as the square of the global variable 5*5 => 25 


console.log("***************5. Scope*****************")
var foo = 1;
function bar(){
	if(!foo){	//foo refers to the local hosted variable without !undefined is true
		var foo = 10; 
	}
	alert(foo);	//the output is 10 because the if condition is evaluated true statement in that block will assign 10 to foo 
}
bar();

