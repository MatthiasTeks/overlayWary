import { useState, useEffect } from "react";
import Ranking from './routes/Ranking';
import { Routes, Route } from "react-router-dom";
import Logo from "./assets/logo.png";

function App() {

    const [result, setResult] = useState([]);

    const getResult = () => {
        fetch(`https://warzone-factory.com/api/tournament/112`)
            .then((resp) => resp.json())
            .then((data) => setResult(data.leaderboard))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            getResult();
        }, 3000);
        return () => clearTimeout(timer);
    })

  return (
    <div className="App">
        <img id="logoMain" src={Logo} alt="logo from tourney"/>
        <Routes>
            <Route path="/" element={<Ranking result={result} min1={0} top1={8} min2={8} top2={16} />} />
            <Route path="/32" element={<Ranking result={result} min1={16} top1={24} min2={24} top2={32} />} />
            <Route path="/48" element={<Ranking result={result} min1={32} top1={40} min2={40} top2={48} />} />
        </Routes>
    </div>
  );
}

export default App;
