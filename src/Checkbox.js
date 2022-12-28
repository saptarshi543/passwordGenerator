//import React from "react";
import * as React from 'react';
import TakeInputBackup from './TakeInputBackup.js';

function Checkbox(){
	const [max, setMax]=React.useState(0);
	const [min,setMin]=React.useState(0);

	const [num, setNum]=React.useState(false);
	const [special, setSpecial]=React.useState(false);
	const [letters, setLetters]=React.useState(false);
	const [alphabets, setAlphabets]=React.useState(false);

const input={
	margin:'4%',
	borderRadius:'7px',
	backgroundColor:'#8C779C'
}
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

	






	


	</div>

	<TakeInputBackup max={max} min={min}  num={num} spc_char={special} letters={letters} alphabets={alphabets}/>
	</div>
);
}

export default Checkbox;
