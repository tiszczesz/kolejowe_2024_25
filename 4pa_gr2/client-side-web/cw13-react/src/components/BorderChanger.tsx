//po kliknięciu ustawia lub usuwa ramkę z elementu div.

import { useState } from "react";

const BorderChanger = () => {
    const [border, setBorder] = useState(false);
  return (
    <div
    onClick={()=>setBorder(!border)}
     style={{
        padding:"10px",
        backgroundColor:"lightblue",
        cursor:"pointer",
        margin:"20px",
        border: border ? "2px solid red" : "none"
    }}>BorderChanger</div>
  )
}

export default BorderChanger