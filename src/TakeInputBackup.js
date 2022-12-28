import React from "react";

	let suggestion="";
	function  Driver( max, min, numObj, specialObj, lettersObj, alphabetsObj) {
	const [password, setPassword]=React.useState("");
	const [pass_length, setLength]=React.useState(0);
	const [data, setData]=React.useState([]);
	setLength(9);
	

	// console.log("test for length> "+pass_length);

	const [numUser, setNum]=React.useState(Boolean(numObj));
	const [specialUser, setSpecial]=React.useState(Boolean(specialObj));
	const [letterUser, setLetters]=React.useState(Boolean(lettersObj));
	suggestion=password;
	const [alphaUser, setAlpha]=React.useState(Boolean(alphabetsObj));

	fillData(numUser, specialUser, letterUser, alphaUser, data);
console.log("dsdn");
}

function copy(tocopy){
	//window.alert("Copied!!");
  navigator.clipboard.writeText(tocopy);
}
function random( max,min){//this function is working...
	min=Math.ceil(min);max=Math.floor(max);
	return Math.floor(Math.random()*(max-min)+min);
	}
function fillData(N, S, L, A, data){
	// var number=['1','2','3','4','5','6','7','8','9','0'];
	// var special_char=['!','@','#','$','%','&','*'];
	// var letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	// var alpha=['A','B', 'C','D','E','F','G','H','I','J','K','L','M','N', 'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
console.log(typeof(N));
// if(N==true)

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

function ValidateLength(max, min){
//setting length of password
	const [len, setLen]=React.useState(0);
	if(min>max){
		window.alert("Please provide correct lengths");
	}
	if(max===min){
		setLen(max);
	}else{
		setLen(random(max,min));
	}
return len;
	// console.log("test");
}

function TakeInputBackup(props){
	
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
	<button style={hide} type="button" onChange={ copy() }></button>

	<h2 style={suggest}>Suggestion is already copied to your clipboard!!</h2>
	
</div>	
	</div>
);
}

export default TakeInputBackup;
