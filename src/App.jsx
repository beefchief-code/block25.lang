// Write your Color component here
import { useState } from 'react'
import ColorList from './ColorList';

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState();

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <ColorList selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
    </div>
  );
};

export default App;
