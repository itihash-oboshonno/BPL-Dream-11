import Header from "./components/header/header";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/newsletter/NewsLetter";
import Banner from "./components/banner/Banner";
import { useState } from "react";
import MainFeature from "./components/mainFeature/MainFeature";

const App = () => {

  const [coins, setCoins] = useState(0);

  const claimCoins = coin => {
    setCoins(coins + coin);
  }

  return (
    <div>
      <Header coins={coins}></Header>
      <div className="mx-5 md:mx-16 lg:mx-60">
        <Banner claimCoins={claimCoins}></Banner>
      </div>
      <div>
        <MainFeature></MainFeature>
      </div>
      <div className="grid justify-center relative top-52 mx-5 md:mx-16 lg:mx-60">
        <NewsLetter></NewsLetter>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;