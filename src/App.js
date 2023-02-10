import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState('');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (e) => {
    const btnValue = e.target.innerHTML;
    if (btnValue === 'C') {
      setValue('');
      setPrevValue(null);
      setOperator(null);
    } else if (btnValue === '=') {
      if (operator === '+') {
        setValue(prevValue + parseFloat(value));
      } else if (operator === '-') {
        setValue(prevValue - parseFloat(value));
      } else if (operator === 'x') {
        setValue(prevValue * parseFloat(value));
      } else if (operator === '÷') {
        if (value === '0') {
          alert("Can't divide by 0");
          setValue('');
          setPrevValue(null);
          setOperator(null);
        } else {
          setValue(prevValue / parseFloat(value));
        }
      }
    } else if (isNaN(btnValue)) {
      setPrevValue(parseFloat(value));
      setValue('');
      setOperator(btnValue);
    } else {
      setValue(value + btnValue);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={value} />
      <br />
      <br />
      <button onClick={handleClick}>1</button>
      <button onClick={handleClick}>2</button>
      <button onClick={handleClick}>3</button>
      <button onClick={handleClick}>+</button>
      <br />
      <button onClick={handleClick}>4</button>
      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>6</button>
      <button onClick={handleClick}>-</button>
      <br />
      <button onClick={handleClick}>7</button>
      <button onClick={handleClick}>8</button>
      <button onClick={handleClick}>9</button>
      <button onClick={handleClick}>x</button>
      <br />
      <button onClick={handleClick}>C</button>
      <button onClick={handleClick}>0</button>
      <button onClick={handleClick}>=</button>
      <button onClick={handleClick}>÷</button>
    </div>
  );
};

export default Calculator;

