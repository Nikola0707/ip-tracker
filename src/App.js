import React from "react";

import './App.css';
import Header from './components/Header/Header.component';
import MapRender from './components/Map/MapRender.component';

function App() {
  return (
    <div className="App">
     <Header />
     <MapRender />
    </div>
  );
}

export default App;
