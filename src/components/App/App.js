import logo from './logo.svg';
import './App.css';
import {Header} from '../Header/header';
import {Footer} from '../Footer/footer';
import Body from '../body';
import TodoImage from '../../todoImage';
import { ProductLists } from './Task2';
import State from '../State';
import Counter from '../Counter';
import DienTichHCN from '../DienTichHCN';
import DienTichHCNClass from '../DienTichHCNClass';



function App() {
  return (
    <div className="App">
      <DienTichHCN/>
      <DienTichHCNClass/>
    </div>
  );
}

export default App;
