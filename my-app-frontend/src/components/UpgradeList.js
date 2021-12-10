import { useEffect, useState } from "react";
import UpgradeCard from "./UpgradeCard";
import { useHistory } from "react-router"

function UpgradeList({factoryUpgrade, setPlayerData, playerData}) {
    const [upgradeData, setUpgradeData] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch("http://localhost:9292/upgrades")
            .then(response => response.json())
            .then(data => setUpgradeData(data))
    }, [])
    // console.log(upgradeData)
    function handleClick () {
        history.push("/factories")
    }
    const upgrades = upgradeData.map(upgrade=> <UpgradeCard 
        key={upgrade.id} 
        upgrade={upgrade} 
        factoryUpgrade={factoryUpgrade}
        setPlayerData={setPlayerData}
        playerData={playerData}/>)
    if(upgradeData.length > 0) {
    return (
      <div className="factory-list">
          {upgrades}
      </div>
    );
    } else return null;
}
  
export default UpgradeList;
  