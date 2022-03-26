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
    if(itemText === '') {
      return;
    }

    const newItem = {
      id: listCache.length + 1,
      checked: false,
      title: itemText,
    }

    const newList = [...list, newItem];
    
    setList(newList);
    setListCache(newList);

    setItemText('');
  }

  function handleRemoveItem() {
    const listFiltered = list.filter((listItem) => {
      return listItem.title !== itemText;
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
      return listItem.title.indexOf(itemText) > -1;
    });

    setList(listFiltered);
    setItemText('');
  }

  function handleToggleCheckbox(id) {
    const updatedList = listCache.map((item) => {
      if(item.id === id) {
        item.checked = !item.checked;
      }

      return item;
    });

    setList(updatedList);
    setListCache(updatedList);
  }

  return (
    <div className="list">
      <h1>Minha lista de coisas</h1>
      <input 
        type="text" 
        placeholder='Insira um item na lista' 
        value={itemText}
        onChange={(event) => handleInput(event, setItemText)} 
      />
      <br />

      <div className="button-container">
        <button onClick={handleAddItem}>Inserir</button>
        <button onClick={handleRemoveItem}>Remover</button>      
        <button onClick={handleSearchItem}>Pesquisar</button>
      </div>

      <ul>
        {list.map((product, index) => (
          <li key={index} className={product.checked ? 'checked' : ''}>
            <input 
              type="checkbox" 
              checked={product.checked}
              onChange={() => handleToggleCheckbox(product.id)} />
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}