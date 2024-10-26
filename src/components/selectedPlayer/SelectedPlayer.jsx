import PropTypes from "prop-types";

const SelectedPlayer = ({dolerLok, batilTumiMiya}) => {

    const {player_img, player_name, playing_role, price, id} = dolerLok;

    return (
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-2xl">
            <div className="flex items-center gap-x-4">
                <div>
                    <img className="w-20 h-20 rounded-full object-cover" src={player_img} alt="" />
                </div>
                <div>
                    <p className="text-lg md:text-2xl font-semibold my-2">{player_name}</p>
                    <p className="text-black opacity-50 my-2">{playing_role}</p>
                    <p className="text-black opacity-50 my-2 text-sm md:hidden">{price}</p>
                </div>
            </div>
            <div className="flex gap-5">
                <p className="hidden md:block font-semibold">{price}</p>
                <button onClick={() => batilTumiMiya(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F14749" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

SelectedPlayer.propTypes = {
    dolerLok: PropTypes.object.isRequired,
    batilTumiMiya: PropTypes.func
}

export default SelectedPlayer;