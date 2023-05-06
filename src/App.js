import React from 'react';
import './App.css';

import Context from './Context';
import Sidebar from './Sidebar';
import Button from './Components/Button/Button';

function App() {
  return (
    <Context.Provider value={{ test: 2 }}>
      <div className="App">
   
        <Sidebar />
        <Button/>
      </div>

    </Context.Provider>

  );
}

export default App;
