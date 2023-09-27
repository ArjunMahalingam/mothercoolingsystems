import './App.css';
import { ShadowBox } from './components/ShadowBox';
import { Navbar } from './components/Navbar';
import Container from './components/Topbar';
import "./Style/mcs.css";
import { Route, Routes } from 'react-router';
import Gallery from './components/Gallery';
import { Quote } from './components/Quote';


function App() {
  return (
    <div>
      <Container />
      <Navbar />
      <Routes>
        <Route path='/' element={<ShadowBox />} />
        <Route path='/Gallery' element={<Gallery />}></Route>
        <Route path='/GetQuote' element={<Quote />}></Route>
      </Routes>
    </div>
    

  );
}

export default App;
