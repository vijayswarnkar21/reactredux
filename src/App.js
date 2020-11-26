import './App.css';
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <IceCreamContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
