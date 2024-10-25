import SelectedPlayer from "../selectedPlayer/selectedPlayer";
import PropTypes from "prop-types";

const SelectedPlayers = ({khelowar, setCurrentButton, batilTumiMiya}) => {

    return (
        <div className="grid grid-cols-1 gap-y-5">
            {
                khelowar.map(dolerLok => <SelectedPlayer
                    key={dolerLok.id}
                    dolerLok={dolerLok}
                    batilTumiMiya={batilTumiMiya}
                    ></SelectedPlayer>)
            }
            <div className="my-10">
                <button onClick={() => setCurrentButton(true)} className="rounded-2xl p-1.5 border-2 border-buty hover:bg-buty hover:bg-opacity-50 transition ease-in-out my-4">
                    <div className="rounded-xl bg-buty px-6 py-2"><p className="font-semibold md:text-lg">Add More Players</p></div>
                </button>
            </div>
        </div>
    );
};

SelectedPlayers.propTypes = {
    khelowar: PropTypes.array.isRequired,
    setCurrentButton: PropTypes.func,
    batilTumiMiya: PropTypes.func
}

export default SelectedPlayers;