import React from 'react';
import './App.css';
import FigmaDesign from './FigmaDesign';

function App() {
  return (
    <div className="App">
     <div>
      <h1 className='text-[60px] uppercase  text-gray-700 font-bold mt-[20px] mb-[80px] '>Figma TO React Code Converter</h1>
      <main>
        <FigmaDesign />
      </main>
     </div>
      <h1>Made by  (Dipeshgehlot01@gmail.com)</h1>
    </div>
  );
}

export default App;
