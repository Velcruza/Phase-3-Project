import { useEffect , useState } from "react";

function UserNav({playerData, setPlayerData}) {
    function handleClick () {
        setPlayerData({...playerData, gold: playerData.gold +playerData.production})
    }
    return (
        <div className="user-nav" onClick={handleClick}>
            <h2 className="user-text">Production: {playerData.production}</h2>
            <h2 className="user-text">Gold: {playerData.gold}</h2>
        </div>
    )
}

export default UserNav;
