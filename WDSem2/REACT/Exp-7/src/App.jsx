import Student from "./Student"
import "./index.css"

export default function App(){
return(
<>
<h1>Student  Information</h1>

<div className="app">

<Student
name="Rohit Sharma"
course="Computer Science"
marks="88%"
img="https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png"
/>

<Student
name="Elon Musk"
course="Information Technology"
marks="92%"
img="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
/>

<Student
name="SRK"
course="Electronics"
marks="78%"
img="https://i.pravatar.cc/300?img=12" 
/>

</div>
</>
)}