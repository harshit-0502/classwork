function Student({name,course,marks,img}){
return(
<div className="card">
<img src={img}/>
<h3>{name}</h3>
<p>{course}</p>
<span>{marks}</span>
</div>
) } 
export default Student 