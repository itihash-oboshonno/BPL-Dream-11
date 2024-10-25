const Footer = () => {
    return (
        <div className="pt-72 grid bg-feet overflow-hidden">
            <div className="flex justify-center overflow-hidden my-10"><img src="https://i.ibb.co.com/KKmjdx7/bpldream11logo-footer.png" alt="" /></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-16 px-10 lg:px-60 overflow-hidden my-10">
                <div className="flex flex-col gap-y-2 overflow-hidden">
                    <p className="font-semibold text-lg text-white">About Us</p>
                    <p className="text-white opacity-60">Create your dream BPL team using our intuitive website. More players coming soon!</p>
                </div>
                <div className="flex flex-col gap-y-2 overflow-hidden">
                    <p className="font-semibold text-lg text-white">Quick Links</p>
                    <li className="text-white opacity-60"><a href="../../../index.html">Home</a></li>
                    <li className="text-white opacity-60"><a>Fixtures</a></li>
                    <li className="text-white opacity-60"><a>Teams</a></li>
                    <li className="text-white opacity-60"><a>Stats</a></li>
                </div>
                <div className="flex flex-col gap-y-4 overflow-hidden">
                    <p className="font-semibold text-lg text-white">Subscribe</p>
                    <p className="text-white opacity-60">Subscribe to our weekly newsletter to get exciting and latest updates.</p>
                    <div className="flex overflow-hidden">
                        <input className="px-4 py-3 md:px-8 md:py-3 rounded-l-xl" type="email" name="" id="" placeholder="Enter your email"/>
                        <button className="px-4 py-3 md:px-8 md:py-3 bg-grad bg-buty rounded-r-xl text-base md:text-lg font-semibold">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-center my-10">
                <p className="text-white opacity-60">© 2024 BPL Dream 11. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;