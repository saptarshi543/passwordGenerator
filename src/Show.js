import React from "react";

function Show(){


// styling....
const input={
	margin:'4%',
	borderRadius:'7px',
	backgroundColor:'#8C779C'
}
//styling ends........



//variables....
	var number=['1','2','3','4','5','6','7','8','9','0'];
	var special_char=['!','@','#','$','%','&','*'];
	var letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var alpha=['A','B', 'C','D','E','F','G','H','I','J','K','L','M','N', 'O','P','Q','R','S','T','U','V','W','X','Y','Z'];


	const [max, setMax]=React.useState(0);
	const [min,setMin]=React.useState(0);
	const [passlen,setPasslen]=React.useState(0);

	const [num, setNum]=React.useState(false);
	const [special, setSpecial]=React.useState(false);
	const [letters, setLetters]=React.useState(false);
	const [alphabets, setAlphabets]=React.useState(false);
	
	const [data,setData]=React.useState([]);
	const [password,setPassword]=React.useState("");
//variables ends.........


//functions.....
function random( max,min){//this function is working...
	min=Math.ceil(min);max=Math.floor(max);
	return Math.floor(Math.random()*(max-min)+min);
}
//functions ends....


	const spit=()=>{
			console.log("spitting to console...");
			

//password length ...
			if(min>max){
				window.alert("Please provide correct lengths");
			}else if(max===min){
				setPasslen(max);
			}else{
			setPasslen(random(max,min));
			}
			console.log("password length "+passlen);
//password length handled.....


//handling array

			//resetting array
			setData([]);

			if(num===true){
			setData(number);
				// data.push(number);
			}
			if(special===true){
				// data.push(special);
			setData(special);
			}
			if(letters===true){data.push(letter);}
			if(alphabets===true){data.push(alpha);}

			for(let i=0;i<data.length;i++){
			console.log(data[i]);
			}
//array handling ends..


}//end of spit function...DO NOT TOUCH





	return(
		<div>
<p></p>

<div style={input}>

	<label>
	<br></br>
	Include Numbers? 
	<input type="checkbox" num={num} onChange={()=> setNum(!num)} />
	<br></br>
	Include Special Characters? 
	<input type="checkbox" special={special} onChange={()=> setSpecial(!special)} />
	<br></br>
	Include Letters?
	<input type="checkbox" letters={letters} onChange={()=> setLetters(!letters)} />
	<br></br>
	Include Alphabets? 
	<input type="checkbox" alphabets={alphabets} onChange={()=> setAlphabets(!alphabets)} />

	</label>



	
	<br></br>
	<br></br>
		<label>Enter maximum length of password</label>
		<input type="number" id="MAX" onChange={()=>setMax(parseInt(document.getElementById("MAX").value))} />
		<br></br>

	<br></br>
		<label>Enter minimum length of password</label>
		<input type="number" id="MIN" onChange={()=>setMin(parseInt(document.getElementById("MIN").value))}/>
		<br></br>

	<br></br>

	<button onClick={spit}>Generate Password</button>

	<p>Suggestion: {password.toString()}</p>






	

</div>

</div>
		);
}

export default Show;