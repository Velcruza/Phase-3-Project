import { useEffect, useState } from "react";

function FactoryCard({factory, playerData, setPlayerData}) {
    const [bought, setBought] = useState(true)
    const [factoryId, setFactoryId] = useState()
    
    useEffect(() => {
        fetch("http://localhost:9292/factory_upgrades")
        .then(res => res.json())
        .then(data => checkBought(data))
    }, [])
    function checkBought(data){
        data.forEach(element => {
            if(element.factory_id === factory.id) {
                setBought(element.bought)
                setFactoryId(element.id)
            }
        })
    }
    function handlePurchase(){
        if(playerData.gold >= factory.cost) {
            fetch("http://localhost:9292/user/1", {
                method: "PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({production: playerData.production+factory.production, gold: playerData.gold-factory.cost})
            })
            .then(res => res.json())
            .then(data => setPlayerData(data))
            setBought(!bought)
            fetch("http://localhost:9292/factory_upgrades", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({factory_id: factory.id, bought: !bought})
            })
        } else alert("Not enough gold!") 
    }
    function handleSale () {
        fetch("http://localhost:9292/user/1", {
                method: "PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({production: playerData.production-factory.production, gold: playerData.gold+factory.cost})
            })
        .then(res => res.json())
        .then(data => setPlayerData(data))
        setBought(!bought)
        fetch(`http://localhost:9292/factory_upgrades/${factoryId}`, {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
        })
    }
    return (
      <div className="factory-card">
          <h2 className="cardText">{factory.name}</h2>
          <h2 className="cardText">Production: {factory.production}</h2>
          {bought? <button className="cardButton" onClick={handlePurchase}>Buy: {factory.cost}</button> : 
          <button className="otherCardButton" onClick={handleSale}>Sell: {factory.cost}</button>}
      </div>
    );
}
export default FactoryCard;
