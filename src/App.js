import './App.css';

import Context from './Context';
import Sidebar from './Sidebar';

function App() {
  return (
    <Context.Provider value={{ test: 2 }}>
      <div className="App">
   
        <Sidebar />
      </div>

    </Context.Provider>

  );
}

export default App;
