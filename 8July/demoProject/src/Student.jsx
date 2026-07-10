function Student(props){
    return (
        <div>
        <h2>name : {props.data.name}</h2>
        <h2>age : {props.data.age}</h2>
        <h2>city : {props.data.city}</h2>
        </div>
    )
}

export default Student;

