import FactoryList from "./components/FactoryList";
import UserNav from "./components/UserNav";
import { Switch ,Route } from 'react-router-dom';
import UpgradeList from "./components/UpgradeList";
import { useEffect , useState } from "react";
import { useHistory } from "react-router"

function App() {
  const [playerData, setPlayerData] = useState({})
  const [factoryUpgrade, setFactoryUpgrade] = useState([])
  const history = useHistory();
  useEffect(() => {
      fetch("http://localhost:9292/user")
        .then(response => response.json())
        .then(data => setPlayerData(data[0]))
  }, [])
  function gotoUpgrades() {
    history.push('/upgrades')
  }
  function gotoFactories() {
    history.push('/factories')
  }
  // function callBackFn () {
// 
// 
// {...playerData, gold: playerData.gold + playerData.production}
// 
// }
  // setInterval(() => { setPlayerData(playerIfno => palyer) }, 1000)
  return (
        <Switch> 
          <Route exact path="/factories">
            <UserNav playerData={playerData} setPlayerData={setPlayerData}/>
            <FactoryList 
            playerData={playerData} 
            setPlayerData={setPlayerData} 
            setFactoryUpgrade={setFactoryUpgrade}/>
            <button className="back-bttn" onClick={gotoUpgrades}>Upgrades</button>
          </Route>
          <Route exact path="/upgrades">
            <UserNav playerData={playerData} setPlayerData={setPlayerData}/>
            <UpgradeList 
            playerData={playerData}
            factoryUpgrade={factoryUpgrade}
            setPlayerData={setPlayerData}/>
            <button className="back-bttn" onClick={gotoFactories}>Back to Factories</button>
          </Route>
        </Switch>
  );
}

export default App;
