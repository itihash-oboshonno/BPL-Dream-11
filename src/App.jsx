import Header from "./components/header/header";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="my-10">
        <AvailablePlayers></AvailablePlayers>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;