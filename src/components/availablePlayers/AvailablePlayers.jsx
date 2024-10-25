import { useEffect } from "react";
import { useState } from "react";
import EveryPlayer from "../everyPlayer/EveryPlayer";

const AvailablePlayers = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
      fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
    }, []);
    
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                players.map(player => <EveryPlayer
                    key={player.id}
                    player={player}
                    ></EveryPlayer>)
            }
        </div>
    );
};

export default AvailablePlayers;