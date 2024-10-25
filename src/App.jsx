import Header from "./components/header/header";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/newsletter/NewsLetter";
import Banner from "./components/banner/Banner";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="mx-5 md:mx-16 lg:mx-60">
        <Banner></Banner>
      </div>
      <div className="my-10">
        <AvailablePlayers></AvailablePlayers>
      </div>
      <div className="grid justify-center relative top-52 mx-5 md:mx-16 lg:mx-60">
        <NewsLetter></NewsLetter>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;