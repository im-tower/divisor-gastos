import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Resumen, Gastos } from './components';
import './App.css';
import { GastosProvider } from './context/GastosProvider';
import { Division } from './components/Division';

function App() {
  return (
    <div className="App">
      <h1 className='text-center mt-3'>¡Dividamos!</h1>
      <GastosProvider>
        <Resumen />
        <Division />
        <Gastos />
      </GastosProvider>
    </div>
  )
}

export default App
