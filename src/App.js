import React from 'react';
import './App.css';

import Context from './Context';
import Sidebar from './Sidebar';
import { ClassicButton, SvgIcon } from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { colors } from "ConfigsRoot/colors";

function App() {
  return (
    <Context.Provider value={{ test: 2 }}>
      <div className="App">

        <Sidebar />
        <ClassicButton
          width='40px'
          height='25px'
          margin='0 10px 0 0'
          colorShadow={colors.green}
        >
          <SvgIcon
            width='100%'
            height='100%'
            viewBox='0 0 10 10'
            path={iconSvg.plus}
            fill={colors.grey}
            fillHover={colors.green}
          />
        </ClassicButton>
        <ClassicButton
          width='40px'
          height='25px'
          margin='0 10px 0 0'
          colorShadow={colors.orange}
        >
          <SvgIcon
            width='100%'
            height='100%'
            viewBox='0 0 20 20'
            path={iconSvg.trash}
            fill={colors.grey}
            fillHover={colors.orange}
            strokeHover='#373737'
            stroke='#373737'
          />
        </ClassicButton>
        <ClassicButton
          width='40px'
          height='25px'
          margin='0 10px 0 0'
          colorShadow={colors.ultramarine}
        >
          <SvgIcon
            width='100%'
            height='100%'
            viewBox='-2 3 25 25'
            path={iconSvg.edit}
            fill={colors.grey}
            fillHover={colors.ultramarine}
          //   strokeHover='#373737'
          //  stroke='#373737'
          />
        </ClassicButton>
      </div>

    </Context.Provider>

  );
}

export default App;
