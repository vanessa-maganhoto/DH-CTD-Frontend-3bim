import { useState } from "react";


export default function App() {
  
   const [valorInput, setValorInput] = useState("")

   

   return (
   <>
      <h1>{valorInput}</h1>
      <input 
         style={{ border: "1px solid red" }} 
         onChange={(event)=> setValorInput(event.target.value)} 
      />
   </>
  );
}


