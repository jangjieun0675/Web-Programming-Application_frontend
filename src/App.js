import Todo from './Todo';
import './App.css';
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([{
    id: "0",
    title: "Hello World 1",
    done: true
  }, {
    id: "1",
    title: "Hello World 2",
    done: false
  }, {
    id: "2",
    title: "Hello World 3",
    done: true
  }]);

  // JSX 결과를 변수에 저장
  let todoItems = 
    items.length > 0 && items.map((item) => <Todo item={item} key={item.id}/>);

  //변수를 반환
  return (
    <div className="App">
      {/* <Todo item={items[0]}/>
      <Todo item={items[1]}/> */}
      {todoItems}
    </div>
  );
}

export default App;
