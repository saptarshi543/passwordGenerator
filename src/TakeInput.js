import React from "react";
function copy(){
	//window.alert("Copied!!");
  navigator.clipboard.writeText(suggestion);
}
	var final_length=0;//working...
	var suggestion="";
	var number=['1','2','3','4','5','6','7','8','9','0'];
	var special_char=['!','@','#','$','%','&','*'];
	var letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var alpha=['A','B', 'C','D','E','F','G','H','I','J','K','L','M','N', 'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var final_data=[];

function validateFinalArray(max, min,numObj, specialObj, lettersObj, alphabetsObj){
	var i;


	if (max===min) {final_length=max;}
	else{
	 final_length=random(max, min);}
	//console.log("test for len:"+final_length);
	
	let numbersUser=Boolean(numObj);
	let specialUser=Boolean(specialObj);
	let lettersUser=Boolean(lettersObj);
	let alphabetsUser=Boolean(alphabetsObj);
	//value converted from type object to bool value



	//adding selection to final_data array
	if(numbersUser===true){
		console.log("num");
	for( i=0; i< number.length; i++){
		final_data.push(number[i]);
		}
	}
	if(specialUser===true){
	for(i=0; i< special_char.length; i++){
		final_data.push(special_char[i]);
		}
	}
	if(lettersUser===true){
	for(i=0; i< letter.length; i++){
		final_data.push(letter[i]);
		}
	}
	if(alphabetsUser===true){
	for(i=0; i< alpha.length; i++){
		final_data.push(alpha[i]);
		}
	}

//console.log("final>>"+final_data);
	//passing...
	var forCheck=makePswd(final_data, final_length);
	console.log(forCheck);
	suggestion=forCheck;


	// while(true){//checking if password is according to user's choice..
	// 	if(checkPswd(forCheck, numbersUser, specialUser, lettersUser, alphabetsUser)){
	// 		suggestion=forCheck;
	// 		console.log("BREAK");
	// 		break;
	// 	}
	// 	else{
	// 		forCheck=makePswd(final_data, final_length);
	// 	}
	// }
	var t=checkPswd(forCheck, numbersUser, specialUser, lettersUser, alphabetsUser);
console.log("check> "+t);
}

function checkPswd(pass, num, spc, letters, alphaBool){//working...
	//console.log(">>"+pass+"<<\n"+num+typeof(num));
	var isPresent=false;

	for(var i=0; i<pass.length; i++){
		//console.log(number+"\n"+special_char+"\n"+letter+"\n"+alpha);
		var tmp=pass.charAt(i);
				if(num==true && (tmp in number)){isPresent=true;}
				if(spc==true && (tmp in special_char)){ isPresent=true;}
				if(letters==true && (tmp in letter)){isPresent=true;}
				if(alphaBool==true && (tmp in alpha)){isPresent=true;}
				
		
	}
	console.log(pass+" "+((isPresent)? "OK": "NOt oK"));

	return isPresent;
}







function random( max,min){//this function is working...
	min=Math.ceil(min);max=Math.floor(max);
	return Math.floor(Math.random()*(max-min)+min);
	}


function makePswd(data, len){
	//console.log("from makePsw");
	//console.log(data+" >> "+len);
	//console.log("exiting makePswd");
	var j;
	var s="";
	for(j=0; j<len; j++){
		s+= data[random(0, data.length-1)].toString();
	}
	return s;
	// console.log(suggestion+" >> " + j);
}

















function TakeInput(props){
	
	//function make(){
	//var len_of_pass=random(props.max, props.min);
		//window.alert(len_of_pass);
	//}
	
	const margin={
		margin:'10px'
	};



	const styles={
		margin:'10px',
		backgroundColor:'#578FCA',
		borderRadius:'7px'
	};
	const hide={
		display:'none'
	};
	const suggest={
		margin:'3%',
		backgroundColor:'#20A167',
		borderRadius:'7px'
	}

return(
<div style={styles}>

<p>Please remember that this is still in beta...all the results may not be accurate</p>
<h2 style={margin}>Max length: {props.max} Min length: {props.min}</h2>


<div style={margin}>
	<h2> Including Numbers? {props.num.toString()}</h2>
	<h2> Including Special Characters? {props.spc_char.toString()}</h2>
	<h2> Including Letters? {props.letters.toString()}</h2>
	<h2> Including Alphabets? {props.alphabets.toString()}</h2>
<button style={hide} type="button" onChange={validateFinalArray(props.max, props.min, props.num, props.spc_char, props.letters, props.alphabets)}></button>

	<h2 style={suggest}>Suggestion: **{suggestion.toString()}** </h2>
	<button style={hide} type="button" onChange={ copy() }></button>

	<h2 style={suggest}>Suggestion is already copied to your clipboard!!</h2>
</div>	
	</div>
);
}

export default TakeInput;
