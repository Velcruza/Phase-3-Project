import { useEffect, useState } from "react";

function UpgradeCard({upgrade, factoryUpgrade, playerData, setPlayerData}) {
    const [bought, setBought] = useState(true)
    useEffect(() => {
        fetch("http://localhost:9292/upgrades_factory")
        .then(res => res.json())
        .then(data => checkBought(data))
    }, [])
    function checkBought(data){
        data.forEach(element => {
            if(element.upgrade_id === upgrade.id) {
                setBought(element.bought)
            }
        })
    }
    function handlePurchase(){
        if(playerData.gold >= upgrade.price) {
            fetch("http://localhost:9292/user/1", {
                method: "PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({production: playerData.production*upgrade.multiplier, gold: playerData.gold-upgrade.price})
            })
            .then(res => res.json())
            .then(data => setPlayerData(data))
            setBought(!bought)
            fetch("http://localhost:9292/upgrades_factory", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({upgrade_id: upgrade.id, bought: !bought})
            })
        } else alert("Not enough gold!") 
    }
    function handleSale () {
        fetch("http://localhost:9292/user/1", {
                method: "PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({production: playerData.production/upgrade.multiplier, gold: playerData.gold+upgrade.price})
            })
        .then(res => res.json())
        .then(data => setPlayerData(data))
        setBought(!bought)
        fetch(`http://localhost:9292/upgrades_factory/${upgrade.id}`)
        .then(res => res.json())
        .then(data => fetch(`http://localhost:9292/upgrades_factory/${data.id}`, {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
        }))
        
    }
    return (
        <div className="factory-card">
            <h2 className="cardText">{upgrade.name}</h2>
            <h2 className="cardText">{upgrade.description}</h2>
            {/* <button className="cardButton" onClick={handlePurchase}>Buy: {upgrade.price}</button> */}
            {bought? <button className="cardButton" onClick={handlePurchase}>Buy: {upgrade.price}</button> : 
            <button className="otherCardButton" onClick={handleSale}>Sell: {upgrade.price}</button>}
        </div>
    );
}

export default UpgradeCard;
