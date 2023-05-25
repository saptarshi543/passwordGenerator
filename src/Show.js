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
	
	let data=[];

	let pass="";
	const [password,setPassword]=React.useState("");
//variables ends.........


//functions.....

	function copy_to_clipboard(){
		navigator.clipboard.writeText(password);
		alert("copied");
	}


	function random( max,min){//this function is working...
		min=Math.ceil(min);max=Math.floor(max);
		return Math.floor(Math.random()*(max-min)+min);
	}

	function makepass(){//....working....
		pass=""
		for(let i=0;i<passlen;i++){
			pass+= data[random(0,data.length-1)].toString()
		}
		// console.log("from makepass..\n"+pass);
		return pass;
	}

	function add(to_be_added){//.......working....

		for(let i=0;i<to_be_added.length;i++){
		data.push(to_be_added[i]);
		}

	// console.log(data)
	}

	function check(test){
	//checks pswd if it contains the stuff the user wants

		let num_is_in_pswd=false, spc_is_in_pswd=false,letter_is_in_pswd=false,alphabets_is_in_pswd=false;



		if(num===true){
			for(let i=0;i<number.length;i++){
				let target=number[i];
				if (!((test.indexOf(target)) === -1)){
					num_is_in_pswd=true;
					break;
				}
			}
		}
		if(special===true){
			let  specialChars = /[!@#$%&*]/;
			spc_is_in_pswd=specialChars.test(test);
		}
		if(letters===true){
			for(let i=0;i<letter.length;i++){
				let target=letter[i];
				if (!((test.indexOf(target)) === -1)){
					letter_is_in_pswd=true;
					break;
				}
			}
		}
		if(alphabets===true){
			for(let i=0;i<alpha.length;i++){
				let target=alpha[i];
				if (!((test.indexOf(target)) === -1)){
					alphabets_is_in_pswd=true;
					break;
				}
			}
		}



		if(num===true){
			if(num_is_in_pswd===false)
				return false;
		}
		if(special===true){
			if(spc_is_in_pswd===false)
				return false;
		}
		if(letters===true){
			if(letter_is_in_pswd===false)
				return false;
		}
		if(alphabets===true){
			if(alphabets_is_in_pswd===false)
				return false;
		}
		return true;

		}
//functions ends....


	const spit=()=>{
			// console.log("spitting to console...");
			

//password length ...
			if(min>max){
				window.alert("Please provide correct lengths");
			}else if(max===min){
				setPasslen(max);
			}else{
			setPasslen(random(max+1,min));
			}
			// console.log("password length "+passlen);
//password length handled.....


//handling array

			//resetting array
			data=[];

			if(num===true){
			
				add(number);
			}
			if(special===true){
				add(special_char);
			}
			if(letters===true){
				add(letter);
			}
			if(alphabets===true){
				add(alpha);
			}


		
			
			// for(let i=0;i<data.length;i++){
			// console.log(data[i]);
			// }

//array handling ends..








//driver code........

	for(let i=0;i<5000;i++){
		let tmp_pass=makepass();
		// console.log(tmp_pass);
		if(check(tmp_pass)){
			setPassword(tmp_pass);
			// console.log(tmp_pass+"\nbreaking...")
			break;
		}
	}



//driver code ends......















}//end of spit function...DO NOT TOUCH





	return(
		<div>
<p></p>
<br></br>
<br></br>
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
<br></br>
	<button onClick={copy_to_clipboard}>Copy</button>

<br></br>
<p>If the program does not respond the first time, Please press the button a couple of times.
I am working on the problem and it should be fixed in a couple of days.</p>

<br></br>


	

</div>

</div>
		);
}

export default Show;