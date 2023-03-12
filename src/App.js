import Checkbox from './Checkbox';
import Me from './Me';
import React from "react";

import Show from "./Show.js";
function App() {
  const backgroundImg={
    backgroundColor:'#E3A1A4'
  };
  return (
<div style={backgroundImg}>
{/* <Checkbox />  */}
<Show />
	 <Me />
</div>
  );
}

export default App;
