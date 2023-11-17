import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import TitleBox from './Components/TtitleBox';
import VisualWrap from './Components/VisualWrap';


function App() {
  return (
    <div className="App">
      <Header />
      <VisualWrap />
      <TitleBox />
      <Content />
      
    </div>
  );
}

export default App;
