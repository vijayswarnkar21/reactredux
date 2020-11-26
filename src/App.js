import './App.css';

import CakeContainer from "./components/CakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

import { Provider } from "react-redux";
import store from "./redux/store";
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <UserContainer />
        <IceCreamContainer />
        <CakeContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
