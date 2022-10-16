import React from "react";

function MakePass(props){
	function random( max,min){//this function is working...
	min=Math.ceil(min);max=Math.floor(max);
	return Math.floor(Math.random()*(max-min)+min)}
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
	
<button type="button" onChange={make()}> TEst</button>
	</div>
);
}

export default MakePass;
