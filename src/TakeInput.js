import React from "react";

let suggestion="";

function Driver( max, min, numObj, specialObj, lettersObj, alphabetsObj){
	let pass_length=0;
	let arr=[];
	let numUser=Boolean(numObj);
	let specialUser=Boolean(specialObj);
	let letterUser=Boolean(lettersObj);
	let alphaUser=Boolean(alphabetsObj);

	//collection of possible characters needed
	var number=['1','2','3','4','5','6','7','8','9','0'];
	var special_char=['!','@','#','$','%','&','*'];
	var letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var alpha=['A','B', 'C','D','E','F','G','H','I','J','K','L','M','N', 'O','P','Q','R','S','T','U','V','W','X','Y','Z'];



	
//helping functions

function copy(tocopy){
	//window.alert("Copied!!");
  navigator.clipboard.writeText(tocopy);
}
function random( max,min){//this function is working...
	min=Math.ceil(min);max=Math.floor(max);
	return Math.floor(Math.random()*(max-min)+min);
	}
function Check(test){
//checks pswd if it contains the stuff the user wants

	let num_is_in_pswd=false, spc_is_in_pswd=false,letter_is_in_pswd=false,alphabets_is_in_pswd=false;



if(numUser===true){
		for(let i=0;i<number.length;i++){
			let target=number[i];
			if (!((test.indexOf(target)) === -1)){
				num_is_in_pswd=true;
				break;
			}
			}
		}
	if(specialUser===true){
			let  specialChars = /[!@#$%&*]/;
			spc_is_in_pswd=specialChars.test(test);
		}
	if(letterUser===true){
			for(let i=0;i<letter.length;i++){
			let target=letter[i];
			if (!((test.indexOf(target)) === -1)){
				letter_is_in_pswd=true;
				break;
			}
			}
		}
	if(alphaUser===true){
			for(let i=0;i<alpha.length;i++){
				let target=alpha[i];
				if (!((test.indexOf(target)) === -1)){
					alphabets_is_in_pswd=true;
					break;
				}
			}
		}
if(numUser===true){
	if(num_is_in_pswd===false)
		return false;
}
if(specialUser===true){
	if(spc_is_in_pswd===false)
		return false;
}
if(letterUser===true){
	if(letter_is_in_pswd===false)
		return false;
}
if(alphaUser===true){
	if(alphabets_is_in_pswd===false)
		return false;
}
return true;

	}
function makePswd(){
	var s="";
	for(var j=0; j<pass_length; j++){
		s+= (arr1d[random(0, arr1d.length-1)]).toString();
	}
	return s;

}
		


// functions end

if(min>max){
		window.alert("Please provide correct lengths");
	}
	if(max===min){
		pass_length=max;
	}else{
		pass_length=random(max,min);
	}



//arranging data...working
if(numUser===true){
	arr.push(number);
}
if(specialUser===true){
	arr.push(special_char);
}
if(letterUser===true){
	arr.push(letter);
}
if(alphaUser===true){
	arr.push(alpha);
}


//converting 2d array to single dimension
let arr1d= [].concat(...arr);

//setting password

var count=0;
var check;
while((max!==0)&&(min!==0)&&(count<500)){

check=makePswd();

if(Check(check)){
	suggestion=check;
	copy(suggestion);
	break;
}
count++;
}




}

function TakeInput(props) {
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


<p>TEST</p>


<p>Please remember that this is still in beta...all the results may not be accurate</p>
<p>Since simple js code is used, the values are updated late sometimes. Just tick the option that you want a couple of times.</p>
<h2 style={margin}>Max length: {props.max} Min length: {props.min}</h2>


<div style={margin}>

<h2 style={suggest}>Suggestion: **{suggestion.toString()}** </h2>
<h2 style={suggest}>Suggestion length: {(suggestion.length).toString()}</h2>
<br></br>

	<h2> Including Numbers? {props.num.toString()}</h2>
	<h2> Including Special Characters? {props.spc_char.toString()}</h2>
	<h2> Including Letters? {props.letters.toString()}</h2>
	<h2> Including Alphabets? {props.alphabets.toString()}</h2>

<button style={hide} type="button" onChange={Driver(props.max, props.min, props.num, props.spc_char, props.letters, props.alphabets)}></button>


	


	<h2 style={suggest}>Suggestion is already copied to your clipboard!!</h2>
	
</div>	
	</div>
);


}
export default TakeInput;