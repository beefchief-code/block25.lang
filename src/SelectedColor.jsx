export default function SelectColor( {selectedColor}){
    return (
        <header id="container">
          <div id="navbar">
            <div>Currently selected: </div>
            <div className={selectedColor}>{selectedColor}</div>
          </div>
        </header>
      );
}