import React, { useState } from 'react';
import './list.css';

export function List() {
  const [list, setList] = useState([]);
  const [listCache, setListCache] = useState([]);

  const [itemText, setItemText] = useState('');
  
  function handleInput(event, setState) {
    setState(event.target.value);
  }

  function handleAddItem() {
    const newList = [...list, itemText];
    
    setList(newList);
    setListCache(newList);

    setItemText('');
  }

  function handleRemoveItem() {
    const listFiltered = list.filter((listItem) => {
      return listItem !== itemText;
    });

    setList(listFiltered);
    setListCache(listFiltered);
    setItemText('');
  }

  function handleSearchItem() {
    if(itemText === '') {
      return setList(listCache);
    }

    const listFiltered = listCache.filter((listItem) => {
      return listItem.indexOf(itemText) > -1;
    });

    setList(listFiltered);
    setItemText('');
  }

  return (
    <div>
      <h1>Minha lista de coisas</h1>
      <input 
        type="text" 
        placeholder='Insira um item na lista' 
        value={itemText}
        onChange={(event) => handleInput(event, setItemText)} 
      />
      <br />
      <button onClick={handleAddItem} >Inserir</button>
      <button onClick={handleRemoveItem}>Remover</button>      
      <button onClick={handleSearchItem}>Pesquisar</button>

      <ul>
        {list.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}