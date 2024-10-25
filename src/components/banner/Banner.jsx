const Banner = () => {
    return (
        <div className="bg-feet bg-[url('https://i.ibb.co.com/3kVh7f2/bpldream11bg-shadow.png')] bg-cover text-center rounded-3xl py-12">
            <div className="flex justify-center my-4">
                <img src="https://i.ibb.co.com/M6pQZQ7/bpldream11banner-main.png" alt="" />
            </div>
            <p className="text-white text-xl md:text-4xl font-bold my-4">Assemble Your Ultimate Dream 11 Cricket Team</p>
            <p className="text-white opacity-50 font-medium md:text-2xl my-4">Beyond Boundaries Beyond Limits</p>
            <button className="rounded-2xl p-1.5 border-2 border-buty hover:bg-buty hover:bg-opacity-50 my-4">
                <div className="rounded-xl bg-buty px-8 py-3"><p className="font-bold md:text-xl">Claim Free Credit</p></div>
            </button>
        </div>
    );
};

export default Banner;