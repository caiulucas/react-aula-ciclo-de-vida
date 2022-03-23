import React, { useState } from 'react';

export function Counter() {
  const [number, setNumber] = useState(0);
  
  function handleNumber() {
    setNumber(number + 1);
  }

  return (
    <>
      <h2>Seu número é {number}</h2>
      <button onClick={handleNumber}>Adicionar</button>
    </>
  )
}