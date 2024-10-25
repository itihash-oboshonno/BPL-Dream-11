const NewsLetter = () => {
    return (
        <div className="border-2 border-gray-100 rounded-2xl backdrop-blur-xl p-5 md:p-7">
            <div className="bg-white bg-[url('https://i.ibb.co.com/3kVh7f2/bpldream11bg-shadow.png')] bg-cover rounded-2xl p-5 md:px-36 py-10 lg:px-96 lg:py-20 text-center">
                <p className="font-bold text-xl md:text-3xl my-2">Subscribe to Our Newsletter</p>
                <p className="font-medium md:text-xl text-black opacity-50 my-2">Get the latest updates and news right in your inbox.</p>
                <div className="grid md:grid-cols-3 gap-5 my-5">
                    <input className="md:col-span-2 px-4 py-3 md:px-8 md:py-3 border border-gray-200 rounded-xl" type="email" name="" id="" placeholder="Enter your email"/>
                    <button className="md:col-span-1 px-4 py-3 md:px-8 md:py-3 bg-buty rounded-xl text-base md:text-lg font-semibold">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;