//import React from "react";
import * as React from 'react';
import TakeInput from './TakeInput.js';

function Checkbox(){
	const [max, setMax]=React.useState(0);
	const [min,setMin]=React.useState(0);

	const [num, setNum]=React.useState(true);
	const [special, setSpecial]=React.useState(true);
	const [letters, setLetters]=React.useState(true);
	const [alphabets, setAlphabets]=React.useState(true);
	

return(
<div>

	
		<label>Enter maximum length of password</label>
		<input type="number" id="MAX" onChange={()=>setMax(parseInt(document.getElementById("MAX").value))} />
		<br></br>

		<label>Enter minimum length of password</label>
		<input type="number" id="MIN" onChange={()=>setMin(parseInt(document.getElementById("MIN").value))}/>
		<br></br>

	<br></br>

	

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

	<p> Including Numbers? {num.toString()}</p>
	<p> Including Special Characters? {special.toString()}</p>
	<p> Including Letters? {letters.toString()}</p>
	<p> Including Alphabets? {alphabets.toString()}</p>
	
	<p> Max length: {max} Min length: {min} </p>
	



	<TakeInput max={max} min={min}  num={num} spc_char={special} letters={letters} alphabets={alphabets}/>
	</div>
);
}

export default Checkbox;
