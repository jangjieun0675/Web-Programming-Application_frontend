import React, { useState } from "react";

const Todo = (props) => {
  //let item = props.item;

  const [item, setItem] = useState(props.item);

  let output = <div className="Todo">
      <input 
        type="checkbox" 
        id={item.id}
        name={item.id}
        checked={item.done}
      />
      <label id={item.id}>{item.title}</label>
    </div>

    return output;
};

export default Todo;