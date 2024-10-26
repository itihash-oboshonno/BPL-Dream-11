import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/newsletter/NewsLetter";
import Banner from "./components/banner/Banner";
import { useState } from "react";
import MainFeature from "./components/mainFeature/MainFeature";
// import React from "react";
import { Toaster, toast } from 'sonner'

const App = () => {

  // toastify alerts
  

  // claiming coins function
  const [coins, setCoins] = useState(0);

  const claimCoins = coin => {
    setCoins(coins + coin);
    toast.success("Successfully claimed free coins!");
  }

  // selected players function (1/2)
  const [khelowar, setKhelowar] = useState([]);

  const praptoKhelowar = doleNisi => {
    let daamString = doleNisi.price;
    let daamStr = daamString.replace(/[^0-9.-]+/g, '');
    let daamNumber = Number(daamStr);
    if (daamNumber <= coins) {
      if (khelowar.length <= 5) {
        let protiPlayerId = doleNisi.id
        console.log(protiPlayerId)
        if (khelowar.every(alreadyAche => alreadyAche.id !== protiPlayerId)) {
          setCoins(coins - daamNumber);
          setKhelowar([...khelowar, doleNisi]);
          return toast.success("Player successfully added to your team");
        } else {return toast.error("Player already selected");}
      } else {return toast.error("Cannot add more than 6 players");}
    } else {return toast.error("Not enough money to buy this player");}
  }
  

  // deleting a selected player function
  const batilTumiMiya = (baadDisi) => {
    console.log('baad deya loker id paisi sir', baadDisi)
    const baadDeyarPor = khelowar.filter(batil => batil.id !== baadDisi);
    setKhelowar(baadDeyarPor);
    toast.info("Removed player from your team")
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
      <Toaster position="top-center" expand={true} richColors closeButton />
    </div>
  );
};

export default App;