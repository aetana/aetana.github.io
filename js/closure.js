
console.log("*************** 1. Closure reveal *****************")

var reveal = function(){
    let counter = 0;
    return {
        add: function(){ return counter += 1;},
        reset: function () { return (counter = 0);},
    };
}();


console.log(reveal);

console.log("*************** 5. Revealing Module Pattern *****************")

let employee = function (){
    let name;
    let age;
    let salary;
    let getName = function(){
        return name;
    }
    let getAge = function(){
        return age;
    }
    let getSalary = function(){
        return salary;
    }

    return {
        setName: function(n){name = n;},
        setAge: function(a){age = a;},
        setSalary: function(s){ salary = s;},
        increaseSalary: function(percentage){salary += getSalary() * percentage ;},
        incrementAge: function(){age = getAge() + 1;}
    };
}();

console.log(employee)

console.log("*************** 6. Revealing Module Pattern extension*****************")

let employeeA = function (){
    let name;
    let age;
    let salary;
    let addressField;
    let getName = function(){
        return name;
    }
    let getAge = function(){
        return age;
    }
    let getSalary = function(){
        return salary;
    }

    return {
        address: addressField,
        setName: function(n){name = n;},
        setAge: function(a){age = a;},
        setSalary: function(s){ salary = s;},
        increaseSalary: function(percentage){salary += getSalary() * percentage;},
        incrementAge: function(){age = getAge() + 1;},
        setAddress: function(address){ addressField = address;},
        getAddress: function(){return addressField;}

    };
}();

console.log(employeeA)





/*
console.log("*************** W1D3 Class Example *****************")

let obj0 = {
	func1 : function(){
		//console.log(this.x);
		//console.log(hey);
	}
}

obj0.func1();
console.log(obj0.tedy);
console.log(hey);
*/

