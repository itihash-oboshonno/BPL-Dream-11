import PropTypes from 'prop-types';

const EveryPlayer = ({player, praptoKhelowar}) => {
    const {player_img, player_name, nationality, playing_role, batter_type, bowler_type, price} = player;
    return (
        <div className='border border-gray-200 rounded-2xl p-6 grid gap-y-5 items-center justify-center'>
            <div className='rounded-2xl overflow-hidden'><img className='rounded-2xl object-cover overflow-hidden' src={player_img} alt="" /></div>
            <div className='flex items-center gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
                <p className='font-semibold text-xl'>{player_name}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 opacity-50">
                        <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z" clipRule="evenodd" />
                    </svg>
                    <p className='opacity-50 font-medium'>{nationality}</p>
                </div>
                <div>
                    <button className='px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold cursor-default'>{playing_role}</button>
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-between'>
                <p>Batting: <span className='font-semibold'>{batter_type}</span></p>
                <p>Bowling: <span className='font-semibold'>{bowler_type}</span></p>
            </div>
            <div className='flex items-center justify-between'>
                <p>Price: <span className='font-semibold'>{price}</span></p>
                <button onClick={() => praptoKhelowar(player)}
                className='px-4 py-2 rounded-lg text-sm border border-gray-200 hover:bg-buty transition ease-in-out duration-200 font-medium'>Choose Player</button>
            </div>
        </div>
    );
};

EveryPlayer.propTypes = {
    player: PropTypes.object.isRequired,
    praptoKhelowar: PropTypes.func
}

export default EveryPlayer;