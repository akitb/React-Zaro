import { useState } from "react";
import Panel from "/src/Panel.jsx";

function App() {

    const szinek = [
        { nev: "Piros", rgb: "rgb(255, 0, 0)" },
        { nev: "Zöld", rgb: "rgb(0, 255, 0)" },
        { nev: "Kék", rgb: "rgb(0, 0, 255)" },
        { nev: "Sárga", rgb: "rgb(255, 255, 0)" },
        { nev: "Lila", rgb: "rgb(128, 0, 128)" }
    ];

    const [valasztottSzin, setValasztottSzin] = useState(szinek[0]);

    return (
        <div>
            <h1>Kedvenc szín választó</h1>

            <select
                onChange={(event) => {
                    setValasztottSzin(
                        szinek[event.target.value]
                    );}}>
                      
                {szinek.map((szin, index) => (
                    <option key={index} value={index}>
                        {szin.nev}
                    </option>
                ))}
            </select>

            <h2>Kiválasztott szín: {valasztottSzin.nev}</h2>

            <Panel szin={valasztottSzin.rgb} />

        </div>
    );
}

export default App;
