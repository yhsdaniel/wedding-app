import React from 'react';
import './App.css';
import {WeddingEvent, WeddingFormat, WeddingBanner, WeddingCount, WeddingAdvert} from './container';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <WeddingBanner />
      <WeddingEvent />
      <WeddingFormat />
      <WeddingCount />
      <WeddingAdvert />
    </div>
  );
}

export default App;
