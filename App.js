import React from "react";
import ReactDOM from "react-dom/client";


const HeaderComponent=function(){
    return (
       <div>
        <h1>Namaste React</h1>
        <h2>This is h2 tag</h2>
       </div>
    );
}

const HeaderComponent2=()=>{
    return (
       <div>
        <h1>Namaste React</h1>
        <h2>This is h2 tag</h2>
       </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);