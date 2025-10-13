import React from 'react';
import Catalogo from './components/Catalogo';
import WhatsAppButton from './components/WhatsAppButton';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catálogo de Vestidos</h1>
        <img src={require('./assets/logo.svg').default} alt="Logo" className="App-logo" />
      </header>
      <main>
        <Catalogo />
      </main>
      <footer>
        <WhatsAppButton />
      </footer>
    </div>
  );
}

export default App;