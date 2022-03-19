import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount ] = useState(0);
  const [text, setText ] = useState('');
  const [showtext, setShowtext ] = useState('');
  const [pcs, setPcs ] = useState('')
  const [isText, setIsText] = useState(false)
  
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
    if (text === "") {
      setIsText(true)
    } else {
      setIsText(false)
    }
  };

  const handleClickReset = () => {
    setShowtext(false)
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClickStone = () => {
    setPcs("ぐー")
  };

  const handleClickCissors = () => {
    setPcs("ちょき")
  };

  const handleClickPaper = () => {
    setPcs("ぱー")
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
        <button onClick={handleClickReset}>Reset</button>
        <input type="text" value={text} onChange={handleChange} />
        {showtext}
      </div>
      <div>
        {isText ? <p style={{color:"red"}}>何か文字を入力してください。</p> : "" }
      </div>
      <div>
        <button onClick={buttonConsole}>Hello World</button>
        <button onClick={buttonAlert}>Hello World2</button>
      </div>
      <div>
        <button onClick={handleClickStone}>ぐー</button>
        <button onClick={handleClickCissors}>ちょき</button>
        <button onClick={handleClickPaper}>ぱー</button>
        <p>あなたの手:{pcs}</p>
        <p>CPUの手:</p>
      </div>
    </div>
  );
};

export default App;