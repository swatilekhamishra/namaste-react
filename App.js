import React from "react";
import ReactDOM from "react-dom/client";


const heading =(
<h1 id="title" key="h2">
    Namaste React
</h1>);

const Title =()=>(
    <h1 id="title" key="h2">
        Namaste React Function
    </h1>);

const HeaderComponent=function(){
    return (
    
       <div>
         {heading}
         {Title()}
         {2+1}
        <h1>Namaste React Functional Component</h1>
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