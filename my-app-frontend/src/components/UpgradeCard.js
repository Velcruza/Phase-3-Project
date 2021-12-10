function UpgradeCard({upgrade, factoryUpgrade, playerData, setPlayerData}) {
    
    function handlePurchase(){
        if(playerData.gold >= upgrade.price) {
            fetch("http://localhost:9292/user/1", {
                method: "PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({...playerData, gold: playerData.gold-upgrade.price})
            })
            .then(res => res.json())
            .then(data => setPlayerData(data))
        } else alert("Not enough gold!") 
    }
    return (
        <div className="factory-card">
            <h2 className="cardText">{upgrade.name}</h2>
            <h2 className="cardText">{upgrade.description}</h2>
            <button className="cardButton" onClick={handlePurchase}>Buy: {upgrade.price}</button>
        </div>
    );
}

export default UpgradeCard;
