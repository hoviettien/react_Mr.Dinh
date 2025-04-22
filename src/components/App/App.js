import logo from './logo.svg';
import './App.css';
import {Header} from '../Header/header';
import {Footer} from '../Footer/footer';
import Body from '../body';
import TodoImage from '../../todoImage';


function App() {
  return (
    <div className="App">
      <TodoImage tieude = "fdfsgvsdf" link = "https://images.baoangiang.com.vn/image/fckeditor/upload/2023/20230510/images/e-18511055.jpg"/>
      <TodoImage tieude = "fdfsgvsdf" link = "https://images.baoangiang.com.vn/image/fckeditor/upload/2023/20230510/images/e-18511055.jpg"/>
      <TodoImage tieude = "fdfsgvsdf" link = "https://images.baoangiang.com.vn/image/fckeditor/upload/2023/20230510/images/e-18511055.jpg"/>
      <TodoImage tieude = "fdfsgvsdf" link = "https://images.baoangiang.com.vn/image/fckeditor/upload/2023/20230510/images/e-18511055.jpg"/>
    </div>
  );
}

export default App;
