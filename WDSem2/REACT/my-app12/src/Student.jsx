function Student({name,course,marks}){
    return(
        <div className="card">
            <h2>Name : {name}</h2>
            <p>Course: {course}</p>
            <p>marks: {marks}</p>
         </div>
    );

}
export default Student ;