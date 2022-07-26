import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollapsibleExample from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Dashboard } from './components/pages/Dashboard';
import { Channel } from './components/pages/Channel';
import { Inventory } from './components/pages/Inventory';
// import { Orders } from './components/pages/Orders';
import { Shipping } from './components/pages/Shipping';
import { Sidebar } from './components/Sidebar';
import './App.css';
import Orders from './components/pages/Orders';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Sidebar>
        
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/channel" element={<Channel/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/shipping" element={<Shipping/>}/>



      </Routes>
      </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;



