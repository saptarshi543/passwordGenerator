//import React from "react";
import * as React from 'react';
import MakePass from './MakePass';

function Checkbox(){
	const [max, setMax]=React.useState(0);
	const [min,setMin]=React.useState(0);

	const [space, setSpace]=React.useState(false);
	const [num, setNum]=React.useState(false);
	const [special, setSpecial]=React.useState(false);
	const [letters, setLetters]=React.useState(false);
	const [alphabets, setAlphabets]=React.useState(false);
	

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
	Include Spaces? 
	<input type="checkbox" space={space} onChange={ ()=>setSpace(!space) }/>
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

	<p> Including Space? {space.toString()}</p>
	<p> Including Numbers? {num.toString()}</p>
	<p> Including Special Characters? {special.toString()}</p>
	<p> Including Letters? {letters.toString()}</p>
	<p> Including Alphabets? {alphabets.toString()}</p>
	
	<p> Max length: {max} Min length: {min} </p>
	



	<MakePass max={max} min={min} space={space} num={num} spc_char={special} letters={letters} alphabets={alphabets}/>
	</div>
);
}

export default Checkbox;
