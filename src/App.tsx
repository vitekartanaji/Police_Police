import './App.css';
import Button from './components/Button';
import { Footer } from './components/Footer';
import { Footer2 } from './components/Footer2';
import Header from './components/Header';
import IconNavigation from './components/IconNavigation';
import { Important } from './components/Important';
import MapLocation from './components/MapLocation';
import NavigationBar from './components/NavigationBar';
import { New } from './components/new';
import { Punenew } from './components/Punenew';
import { Punepolicephoto } from './components/Punepolicephoto';
import { Sppune } from './components/Sppune';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header/>
      <Button/>
      <New/>
      <Sppune/>
      <Important/>
      <MapLocation/>
      <Punepolicephoto/>
      <Punenew/>
      <Footer/>
      <Footer2/>
    </div>
  );
}

export default App;
