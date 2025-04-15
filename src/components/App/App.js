import logo from './logo.svg';
import './App.css';
import {Header} from '../Header/header';
import {Footer} from '../Footer/footer';
import Body from '../body';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
