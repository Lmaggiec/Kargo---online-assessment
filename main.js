//Read command line arguments and store them into an array
var intArray = process.argv.slice(2);
//Create an array with the string representation of digits and a string array for conversion
var digit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var stringArray = [];
//Traverse the int array to convert the numbers and store them into the string array
for(var i = 0; i < intArray.length ; i++){

	stringArray[i] = Convert(intArray[i], digit);

}
//Print the string array
stringArray.forEach(Print);

//This function will take the number need to be converted and map it with the digits in the 'digit' array
function Convert(intNum, dig) {

	var strNum = "";

	do{
		//intNum % 10 will get the remainder of intNum/10 which is the last digit of the number
		//dig[intNum % 10] map the digit with the string representation of that digit
		//This line add the converted digit to the begining of the string
		strNum = dig[intNum % 10] + strNum ;
		//Divide intNum by 10 each time to put the next digit need to be converted at the position of the last digit
		intNum = parseInt(intNum/10);

	}while(intNum > 0)
	
	return strNum;
}

//This fuction print the value of stringArray one by one
function Print(value, index, array) {
	//If it is the last string, print it with a new line after it
	if (index == array.length-1){

		console.log(value);

	}else{
		//Else, print it with a comma and a space after it
		process.stdout.write(value + ", ");

	}

}