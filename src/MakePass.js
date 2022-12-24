import React from "react";
function make_pswd(max, min,spaceObj, numObj, specialObj, lettersObj, alphabetsObj){
	var number=['1','2','3','4','5','6','7','8','9','0'];
	var special_char=['!','@','#','$','%','&','*'];
	var space=[' '];
	var letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var alpha=['A','B', 'C','D','E','F','G','H','I','J','K','L','M','N', 'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var final_data=[];



	var final_length=0;//working...
	if (max==min) {final_length=max;}
	else{
	 final_length=random(max, min);}
//	console.log("test for len:"+final_length);
	
	let numbersUser=Boolean(numObj);
	let specialUser=Boolean(specialObj);
	let lettersUser=Boolean(lettersObj);
	let alphabetsUser=Boolean(alphabetsObj);
	let spaceUser=Boolean(spaceObj); //value converted from type object to bool value



	//adding selection to final_data array
	if(numbersUser===true){
		console.log("num is true");
	for(var i=0; i< number.length; i++){
		console.log("num"+number[i]);
		final_data.push(number[i]);
		//console.log(final_data[i]);
		}
	}
	if(specialUser==true){
	for(var i=0; i< special_char.length; i++){
		console.log(special_char[i]);
		final_data.push(special_char[i]);
		//console.log(final_data[i]);
		}
	}
	if(lettersUser==true){
	for(var i=0; i< letter.length; i++){
		console.log("letter"+letter[i]);
		final_data.push(letter[i]);
		//console.log(final_data[i]);
		}
	}
	if(alphabetsUser==true){
	for(var i=0; i< alpha.length; i++){
		console.log("alpha"+alpha[i]);
		final_data.push(alpha[i]);
		//console.log(final_data[i]);
		}
	}
	if(spaceUser==true)
		final_data.push(space[0]);

	//checking final array
	//for(var i=0; i< final_data.length; i++){
	//	console.log(i+"---"+final_data[i]);
	//}
console.log("final>>"+final_data);
}


function random( max,min){//this function is working...
	min=Math.ceil(min);max=Math.floor(max);
	return Math.floor(Math.random()*(max-min)+min);
	}
function MakePass(props){
	
	function make(){
	var len_of_pass=random(props.max, props.min);
		//window.alert(len_of_pass);
	}
return(
<div>

<p>test for makePass</p>
<p>Max length: {props.max} Min length: {props.min}</p>



	<p> Including Space? {props.space.toString()}</p>
	<p> Including Numbers? {props.num.toString()}</p>
	<p> Including Special Characters? {props.spc_char.toString()}</p>
	<p> Including Letters? {props.letters.toString()}</p>
	<p> Including Alphabets? {props.alphabets.toString()}</p>
	
<button type="button" onChange={make_pswd(props.max, props.min, props.space, props.num, props.spc_char, props.letters, props.alphabets)}> TEst</button>
	</div>
);
}

export default MakePass;
