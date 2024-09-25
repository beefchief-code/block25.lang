// Write your Color component here
import { useState } from 'react';
import ColorList from './ColorList';
import SelectColor from './SelectedColor';
import "./index.css";

export default function App() {
  const [selectedColor, setSelectedColor] = useState();
  return (
    <div className="box">
      <SelectColor selectedColor={selectedColor}/>
      <ColorList 
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
      />
    </div>
  );
};


