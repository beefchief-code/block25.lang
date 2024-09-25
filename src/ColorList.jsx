export default function ColorList({selectedColor, setSelectedColor}) {
    const colors = ["red", "orange", "yellow", "green", "blue", "violet", "black", "white"];
    return (
        <ul id="colors-list">
            {colors.map((color) => (
                <li 
                key = {color}
                className={color + (color === selectedColor ? " selected": "")}
                onclick = {() => setSelectedColor(color)}
                ></li>
            ))
            }
        </ul>
    );
}