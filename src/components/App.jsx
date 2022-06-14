import React, {useState} from "react";


function App() {
  const [item, setItem] = useState();
  const [now, afterAdd] = useState([]);
  function handleChange(event){
   const newValue = event.target.value;
    setItem(newValue);
  }

  function callAdd(){
    afterAdd(prevItems => {
      return [...prevItems, item]
    });
    setItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1> 
      </div>
      <div className="form">
        <input type="text"
        onChange = {handleChange}
        value = {item}
        />
        <button onClick = {callAdd} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {now.map(eachItem => {return(<li>{eachItem}</li>)})}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
