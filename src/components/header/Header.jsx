import PropTypes from "prop-types";

const Header = ({coins}) => {
    return (
        <nav className="flex justify-between items-center py-5 px-5 md:px-16 lg:px-60 top-0 z-10 sticky backdrop-blur-xl">
            <div><a href="../../../index.html"><img src="https://i.ibb.co.com/QcBTWYW/bpldream11logo.png" alt="" /></a></div>
            <div className="flex justify-between items-center gap-x-5 md:gap-x-12">
                <div className="hidden md:flex md:justify-between md:items-center md: gap-x-12">
                    <p><a href="../../../index.html">Home</a></p>
                    <p><a href="">Fixtures</a></p>
                    <p><a href="">Teams</a></p>
                    <p><a href="">Stats</a></p>
                </div>
                <div>
                    <button className="cursor-default border border-gray-200 bg-white rounded-xl px-5 py-4 font-semibold flex items-center gap-x-2"><span>{coins}</span>Coins<span><img className="w-5 h-5" src="https://i.ibb.co.com/h9TXFLF/dollar.png" alt="" /></span></button>
                </div>
                <div className="dropdown dropdown-end md:hidden lg:hidden">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                      <div className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                      </div>
                    </div>
                    <ul
                      tabIndex="0"
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                      <li><a href="../../../index.html">Home</a></li>
                      <li><a>Fixtures</a></li>
                      <li><a>Teams</a></li>
                      <li><a>Stats</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {
    coins: PropTypes.number
}

export default Header;