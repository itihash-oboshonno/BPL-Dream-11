import Header from "./components/header/header";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";

const App = () => {
  return (
    <div className="mx-5 md:mx-16 lg:mx-72">
      <Header></Header>
      <div>
        <AvailablePlayers></AvailablePlayers>
      </div>
    </div>
  );
};

export default App;