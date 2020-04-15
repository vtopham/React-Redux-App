import React from 'react';
import './App.css';



import FoxyPics from './components/FoxyPics'

//App will just load the FoxyPics component, which will load the rest of the contents of the website.
function App() {
  return (
    <div className="App">
        <FoxyPics/> 
    </div>
  );
}

export default App;
