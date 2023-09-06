// Styles
import "./App.css"
// Components
import NavBar from "./Components/NavBar/NavBar"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { orginals, action, comedy, documentary } from './urls';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <br />
      <RowPost url={orginals} title="Netflix Orginals" />
      <br />
      <RowPost url={action} title="Action" isSmall />
      <br />
      <RowPost url={comedy} title="Comedy" isSmall />
      <br />
      <RowPost url={documentary} title="Documentary" isSmall />
    </div>
  );
}

export default App;
