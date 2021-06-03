import './App.css';
//import Navbar from './components/Navbar'
import Musicinfo from './components/Musicinfo'
import MusicControl from './components/MusicControl'
import MusicPanel from './components/MusicPanel'
function App() {
  //const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-11 col-md-10">
            <div className="Music_App position-relative">
              <MusicPanel></MusicPanel>
              <Musicinfo></Musicinfo>
              <MusicControl></MusicControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
