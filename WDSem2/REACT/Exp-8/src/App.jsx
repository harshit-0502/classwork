import {useState} from "react"
import "./index.css"

export default function App(){

const [count,setCount]=useState(0)

return(

<div className="box">

<h1>React Counter</h1>

<h2>{count}</h2>

<div className="btns">

<button onClick={()=>setCount(count+1)}>
Increment +
</button>

<button onClick={()=>setCount(count-1)}>
Decrement -
</button>

</div>

<button
className="reset"
onClick={()=>setCount(0)}
>
Reset
</button>

</div>

)}