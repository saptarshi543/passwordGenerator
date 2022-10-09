//import React from "react";
import * as React from 'react';
function Checkbox(){

	const [space, setSpace]=React.useState(false);
	const [num, setNum]=React.useState(false);
	const [special, setSpecial]=React.useState(false);
	const [letters, setLetters]=React.useState(false);
	const [alphabets, setAlphabets]=React.useState(false);
	

	const handleSpace=()=>{
setSpace(!space);
	}

return(
<div>
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

	</div>
);
}

export default Checkbox;
