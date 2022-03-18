import { useState, useEffect } from "react";
import Ranking from './routes/Ranking';
import { Routes, Route } from "react-router-dom";
import Logo from "./assets/logo.png";

function App() {

    const [result, setResult] = useState([]);
    const [ws, setWs] = useState(new WebSocket('ws://45.155.171.153:6699'));

    const getResult = () => {
        fetch(`http://localhost:23550/api/tournament/112`)
            .then((resp) => resp.json())
            .then((data) => setResult(data.leaderboard))
    }

    const getChange = (newData) => {
        console.log('redata')
        let myDiv = document.getElementById(`team${newData.team}`);
                myDiv.animate([
                    {
                        opacity: '0',
                    },
                    {
                        opacity: '1',
                    }
                ], {
                    duration: 1000,
                })
        }
        getResult();

    useEffect(() => {
        ws.onopen = () => {
            console.log('WebSocket Connected')
        }

        ws.onmessage = (e) => {
            console.log(e.data)
            const wsdata = JSON.parse(e.data)
            if(wsdata.commandName === 'tSetPoint'){
                getChange(wsdata)
            } else return null
        }

        return () => {
            ws.onclose = () => {
                console.log('WebSocket Disconnected');
                setWs(new WebSocket('ws://45.155.171.153:6699'));
            }
        }
    }, [ws.onmessage, ws.onopen, ws.onclose, ws]);

    useEffect(() => {
        console.log('refreshing')
        getResult();
    }, [])

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
