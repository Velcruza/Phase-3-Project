import { useEffect, useState } from "react";
import FactoryCard from "./FactoryCard";

function FactoryList({playerData, setPlayerData,setFactoryUpgrade}) {
    const [factoryData, setFactoryData] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/factories")
            .then(response => response.json())
            .then(data => setFactoryData(data))
    }, [])
    // console.log(playerData)
    if(factoryData.length > 0) {
    const factories = factoryData.map(factory => <FactoryCard 
        key={factory.id} 
        factory={factory} 
        playerData={playerData} 
        setPlayerData={setPlayerData}
        setFactoryUpgrade={setFactoryUpgrade}/>)
    return (
      <div className="factory-list">
          {factories}
      </div>
    );
    } else return null;
}

export default FactoryList;
  