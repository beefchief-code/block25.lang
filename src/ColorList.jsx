export default function ColorList({ selectedColor, setSelectedColor }) {
    const colors = ["red", "orange", "yellow", "green", "blue", "violet", "black", "white"];
    return (
        <ul className="color-list">
            {colors.map((color) => (
                <li 
                key = {color}
                className={color + (color === selectedColor ? " selected": "")}
                onClick = {() => setSelectedColor(color)}
                ></li>
            ))
            }
        </ul>
    );
}