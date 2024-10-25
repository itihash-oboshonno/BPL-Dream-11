import Header from "./components/header/header";
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

  const [khelowar, setKhelowar] = useState([]);

  const praptoKhelowar = doleNisi => {
    setKhelowar([...khelowar, doleNisi])
  }

  const batilTumiMiya = (baadDisi) => {
    console.log('baad deya loker id paisi sir', baadDisi)
    const baadDeyarPor = khelowar.filter(batil => batil.id !== baadDisi);
    setKhelowar(baadDeyarPor)
  }

  return (
    <div>
      <Header coins={coins}></Header>
      <div className="mx-5 md:mx-16 lg:mx-60">
        <Banner claimCoins={claimCoins}></Banner>
      </div>
      <div>
        <MainFeature khelowar={khelowar} praptoKhelowar={praptoKhelowar} batilTumiMiya={batilTumiMiya}></MainFeature>
      </div>
      <div className="grid justify-center relative top-52 mx-5 md:mx-16 lg:mx-60">
        <NewsLetter></NewsLetter>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;