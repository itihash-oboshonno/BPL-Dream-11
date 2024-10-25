import { useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";

const MainFeature = () => {

    const [currentButton, setCurrentButton] = useState(true);

    return (
        <div className="my-10 mx-5 md:mx-16 lg:mx-72">
            <div className="flex justify-between items-center">
                <p className="font-bold text-2xl">{currentButton ? `Available Players` : `Selected Players (0/6)`}</p>
                <div>
                    <button onClick={() => setCurrentButton(true)}
                    className={`md:col-span-1 px-4 py-3 md:px-6 md:py-2 border border-gray-200 rounded-l-xl font-semibold ${currentButton ? 'bg-buty' : 'bg-white hover:bg-gray-100 transition ease-in-out'}`}>Available</button>
                    <button onClick={() => setCurrentButton(false)}
                    className={`md:col-span-1 px-4 py-3 md:px-6 md:py-2 border border-gray-200 rounded-r-xl font-semibold ${currentButton ? 'bg-white hover:bg-gray-100 transition ease-in-out' : 'bg-buty'}`}>Selected</button>
                </div>
            </div>
            <div className="my-10">
                {currentButton ? <AvailablePlayers></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
            </div>
        </div>
    );
};

export default MainFeature;