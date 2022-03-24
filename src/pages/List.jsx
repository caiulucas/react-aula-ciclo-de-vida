import React, { useState } from 'react';

export function List() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  function handleInput(event) {
    setItem(event.target.value);
  }

  function handleAddItem() {
    setList([...list, item]);
  }

  return (
    <div>
      <h1>Minha lista de coisas</h1>
      <input 
        type="text" 
        placeholder='Insira um item na lista' 
        onChange={handleInput} 
      />
      <button onClick={handleAddItem} >Inserir</button>

      <ul>
        {list.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  )
}