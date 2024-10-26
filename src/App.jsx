import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/newsletter/NewsLetter";
import Banner from "./components/banner/Banner";
import { useState } from "react";
import MainFeature from "./components/mainFeature/MainFeature";

const App = () => {

  // claiming coins function
  const [coins, setCoins] = useState(0);

  const claimCoins = coin => {
    setCoins(coins + coin);
  }

  // selected players function (1/2)
  const [khelowar, setKhelowar] = useState([]);

  const praptoKhelowar = doleNisi => {
    let daamString = doleNisi.price;
    let daamStr = daamString.replace(/[^0-9.-]+/g, '');
    let daamNumber = Number(daamStr);
    if (daamNumber <= coins) {
      if (khelowar.length <= 6) {
        let protiPlayerId = doleNisi.id
        console.log(protiPlayerId)
        if (khelowar.every(alreadyAche => alreadyAche.id !== protiPlayerId)) {
          setCoins(coins - daamNumber);
          setKhelowar([...khelowar, doleNisi]);
        } else {return alert("ek player koybar niben?");}
      } else {return alert("array vore gese maaf koren");}
    } else {return alert("Sir, please sir.");}
  }
  

  // deleting a selected player function
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