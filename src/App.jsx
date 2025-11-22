import './style.css';
import arrow from './assets/images/icon-arrow.svg'
import { updateMap } from './map';
const APIkey = 'at_yoO15SBXsOxpv3GI9Mn5Mc244um3Z';
import { useState , useEffect } from 'react';


function App(){
    const [ipData,setIpData] = useState(null);
    const [input,setInput] = useState("");

    async function getIp(ip = ""){
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_yoO15SBXsOxpv3GI9Mn5Mc244um3Z&ipAddress=${ip}`;

        const res = await fetch(url);
        const data = await res.json();
        setIpData(data);
        updateMap(data.location.lat , data.location.lng);
    }

    useEffect(() =>{
        getIp();
    },[]);

    function handleSearch(){
        if(input.trim() !== ""){
            getIp(input);
        }
    }

    return (
        <>
        <div className="wrapper">
            <div className="title">IP Address Tracker</div>
            <div className="search">
                <input type="text" placeholder='Search for any IP address or domain' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit" onClick={handleSearch}><img src={arrow} /></button>
            </div>
            <div className="info">
                <div>
                    <p>IP ADDRESS</p>
                    <h2>{ipData?.ip || "---"}</h2>
                </div>
                <div>
                    <p>LOCATION</p>
                    <h2>{ipData? `${ipData.location.city}, ${ipData.location.country}`: "---"}</h2>
                </div>
                <div>
                    <p>TIMEZONE</p>
                    <h2>{ipData ? `UTC ${ipData.location.timezone}` : "---"}</h2>
                </div>
                <div>
                    <p>ISP</p>
                    <h2>{ipData?.isp || "---"}</h2>
                </div>
            </div>
        </div>
        <div id="map" className='z-0'></div>
        </>
    )
}

export default App;