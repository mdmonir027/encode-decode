import React, { useEffect, useState } from 'react';
import './App.css';
import { decode, encode } from './functions/helper';

const App = () => {
  const [toggle, setToggle] = useState('encode');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('hello world we are here');

  const activeClass = (value) => {
    if (toggle === value) return 'active';
    return '';
  };

  useEffect(() => {
    setResult(() => {
      if (toggle === 'encode') {
        return encode(input);
      }
      return decode(input);
    });
  }, [input, toggle]);

  useEffect(() => setInput(''), [toggle]);

  return (
    <div className='app'>
      <div className='buttonGroup'>
        <button
          className={`toggleButton ${activeClass('encode')}`}
          onClick={() => setToggle('encode')}
        >
          Encode
        </button>
        <button
          className={`toggleButton ${activeClass('decode')}`}
          onClick={() => setToggle('decode')}
        >
          Decode
        </button>
      </div>
      <div className='inputWrapper'>
        <input
          className='input'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div className='resultBox'>
        {result ? result : 'Result will show here'}
      </div>
    </div>
  );
};

export default App;
