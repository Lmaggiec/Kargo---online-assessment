
var intArray = process.argv.slice(2);

var digit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

var stringArray = [];

for(var i = 0; i < intArray.length ; i++){

	stringArray[i] = Convert(intArray[i], digit);

}

stringArray.forEach(Print);

function Convert(intNum, dig) {

	var strNum = "";

	do{

		strNum = dig[intNum % 10] + strNum ;

		intNum = parseInt(intNum/10);

	}while(intNum > 0)
	
	return strNum;
}

function Print(value, index, array) {

	if (index == array.length-1){

		console.log(value);

	}else{

		process.stdout.write(value + ", ");

	}

}