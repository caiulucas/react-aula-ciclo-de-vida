import React, { useState } from 'react';

export function Counter() {
  const [number, setNumber] = useState(0);
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  function handleAddNumber() {
    setNumber(number + 1);
  }

  function handleRemoveNumber() {
    setNumber(number - 1);
  }

  function handleCounterVisibility() {
    setIsCounterVisible(!isCounterVisible);
  }

  return (
    <div>
      <button onClick={handleCounterVisibility}>
        {isCounterVisible ? 'Esconder contador' : 'Mostrar contador'}
      </button>

      {isCounterVisible && (
        <div>
          <h2>O seu contador está em {number}</h2>
          <button onClick={handleAddNumber} >Adicionar</button>
          <button onClick={handleRemoveNumber} >Remover</button>
        </div>
      )}
    </div>
  )
}

// if(isCounterVisible === true) {
//   return (
//     <div>
//       <h2>O seu contador está em {number}</h2>
//       <button onClick={handleAddNumber} >Adicionar</button>
//       <button onClick={handleRemoveNumber} >Remover</button>
//     </div>
//   )
// }