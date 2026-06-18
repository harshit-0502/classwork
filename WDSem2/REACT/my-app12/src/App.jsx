// function App() {
//   return (
//     <div className="App">
//       <h1>Hello,World</h1>
//       <p>This is my first React App</p>
//       <Cse12 />
//     </div>
//   );
// }

// // 2nd component

// function Cse12() {
//   return (
//     <div className="cse12">
//       <h1>Welcome to CSE 12 </h1>
//       <p>This is second component</p>
//     </div>
//   );
// }

// export default App;
import Student from "./Student";

function App(){
  return(
    <div className="App">
      <h1>Student Information</h1>
      <Student name = "Gopal" course="CSE12" marks={85}/>
      <Student name = "Gopal" course="CSE12" marks={85}/>
            <Student name = "Gopal" course="CSE12" marks={85}/>
     
    </div>
  )
}




export default App;
