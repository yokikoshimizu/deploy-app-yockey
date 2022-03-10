import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount ] = useState(0);
  const [text, setText ] = useState('');
  const [showtext, setShowtext ] = useState('');
  
  function buttonConsole() {
    console.log("Hello World")
  }
  
  const buttonAlert = () => {
    window.alert('Hello World')
  }


    function increment() {
      setCount(count + 1);
      console.log(count);
    }
    const decrement = () => {
      setCount(count - 1);
      console.log(count);
    }
    const countReset = () => {
      setCount(0);
      console.log(count);
    }

  const handleClickOutPut = () => {
    setShowtext(text)
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

   

  return (
    <div>
      <div>
        <button onClick={increment}>いいね</button>
        <button onClick={decrement}>よくないね</button>
        <button onClick={countReset}>リセット!</button>
        {count}
      </div>

      <div>
        <button onClick={handleClickOutPut}>button</button>
        <input type="text" value={text} onChange={handleChange} />
        {showtext}
      </div>
      <div>
        {text ?  "" : <p style={{color:"red"}}>何か文字を入力してください。</p> }
      </div>
      <div>
        <button onClick={buttonConsole}>Hello World</button>
        <button onClick={buttonAlert}>Hello World2</button>
      </div>
    </div>
  );
};

export default App;