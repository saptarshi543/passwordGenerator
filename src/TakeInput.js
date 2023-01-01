import React from "react";

//global varibales required for them to br accessed in return 
//in TakeInput function
let suggestion="";

function Driver( max, min, numObj, specialObj, lettersObj, alphabetsObj){
	const [password, setPassword]=React.useState("");
	// const [pass_length, setLength]=React.useState(0);
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



	// const [data, setData]=React.useState([]);
	
	// const [numUser, setNum]=React.useState(Boolean(numObj));
	// const [specialUser, setSpecial]=React.useState(Boolean(specialObj));
	// const [letterUser, setLetters]=React.useState(Boolean(lettersObj));
	// const [alphaUser, setAlpha]=React.useState(Boolean(alphabetsObj));

//helping functions

function copy(tocopy){
	//window.alert("Copied!!");
  navigator.clipboard.writeText(tocopy);
}
function random( max,min){//this function is working...
	min=Math.ceil(min);max=Math.floor(max);
	return Math.floor(Math.random()*(max-min)+min);
	}
function Check(){
//checks pswd if it contains the stuff the user wants
	let flag=false;

console.log("inside Check-> "+suggestion);
// num spc letter alpha
console.log(numUser+" "+specialUser+" "+letterUser+" "+alphaUser);
	if(numUser===true){
		for(let i=0;i<number.length;i++){
			let target=number[i];
			if (!((suggestion.indexOf(target)) === -1)){
				flag=true;
				console.log("num is present");
				break;
			}
			}
		}
	if(specialUser===true){
		// console.log("Inside SPC");
			let  specialChars = /[!@#$%&*]/;
			flag=specialChars.test(suggestion);
			console.log(flag?"SPC present": "SPC Not present");
		}
	if(letterUser===true){
			for(let i=0;i<letter.length;i++){
			let target=letter[i];
			if (!((suggestion.indexOf(target)) === -1)){
				flag=true;
				console.log("Characters is present");
				break;
			}
			}
		}
	if(alphaUser===true){
			for(let i=0;i<alpha.length;i++){
				let target=alpha[i];
				if (!((suggestion.indexOf(target)) === -1)){
					flag=true;
					console.log("alphabets is present");
					break;
				}
			}
		}
	console.log("flag.."+flag);


	}
function makePswd(){
	var s="";
	for(var j=0; j<pass_length; j++){
		// let tmp=random(0, arr.length-1);
		// console.log(tmp+ " "+arr.length);
		s+= arr1d[random(0, arr1d.length-1)].toString();
	}
	suggestion=s;
	// console.log("test for pswd: "+s );

}
		


// functions end

// setLength(random(max, min));
if(min>max){
		window.alert("Please provide correct lengths");
	}
	if(max===min){
		pass_length=max;
	}else{
		pass_length=random(max,min);
	}
// console.log(pass_length);



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

// console.log("test for arr: "+arr+"\n"+arr.length);

//converting 2d array to single dimension
let arr1d= [].concat(...arr);
// console.log("test for 1d arr: "+arr1d.length);

//setting password
makePswd();
	
Check();

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
<h2 style={margin}>Max length: {props.max} Min length: {props.min}</h2>


<div style={margin}>
	<h2> Including Numbers? {props.num.toString()}</h2>

	{/* <h2>Length of password:{pass_length.toString()}</h2> */}
	<h2> Including Special Characters? {props.spc_char.toString()}</h2>
	<h2> Including Letters? {props.letters.toString()}</h2>
	<h2> Including Alphabets? {props.alphabets.toString()}</h2>

<button style={hide} type="button" onChange={Driver(props.max, props.min, props.num, props.spc_char, props.letters, props.alphabets)}></button>


	<h2 style={suggest}>Suggestion: **{suggestion.toString()}** </h2>
{/*	<button style={hide} type="button" onChange={ copy() }></button>
*/}


	<h2 style={suggest}>Suggestion is already copied to your clipboard!!</h2>
	
</div>	
	</div>
);


}
export default TakeInput;