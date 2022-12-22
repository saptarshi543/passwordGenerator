import React from "react";
function make_pswd(max, min,space_original){
	var number=['1','2','3','4','5','6','7','8','9','0'];
	var special_char=['!','@','#','$','%','&','*'];
	var space=[' '];
	var letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var alpha=['A','B', 'C','D','E','F','G','H','I','J','K','L','M','N', 'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var final=[];

	var final_length=0;//working...
	if (max==min) {final_length=max;}
	else{
	 final_length=random(max, min);}
//	console.log("test for len:"+final_length);
	
	let spaceUser=Boolean(space_original); //value convrted from type object to bool value
//	console.log(">>"+spaceUser);

	
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
	
<button type="button" onChange={make_pswd(props.max, props.min, props.space)}> TEst</button>
	</div>
);
}

export default MakePass;
