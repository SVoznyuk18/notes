import React from 'react';
import './App.css';

import Context from './Context';

import { Toolsbar, Sidebar } from 'ComponentsRoot';
import {formatDate, formatFullDate} from 'UtilsRoot';
// import iconSvg from 'AssetsRoot/svg/iconSvg';
// import { colors } from "ConfigsRoot/colors";

import { Wrapper } from './StyledComponents';

function App() {

  return (
    <Context.Provider value={{ test: 2 }}>
      <div className="App">
        <Toolsbar />
        <Wrapper>
          <Sidebar />
        </Wrapper>
      </div>
    </Context.Provider>
  );
}

export default App;
