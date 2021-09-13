import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import productAPI from './api/productAPI';
import './App.css';
import AdminHome from './components/Admin';
import Header from './components/Header';
import YouOrMe from './components/StateDemo1';
import QuantityUpDown from './components/StateDemo2';
import CounterDemoRedux from './features/Counter_DemoRedux';
import ProductFeature from './features/Product';
import AlbumFeatures from './features/Song';
import TodoFeatures from './features/Todo';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* Nav Link */}
      {/* <p><Link to="/quantity">Quantity</Link></p>
      <p><Link to="/adminhome">Admin</Link></p>
      <p><Link to="/counterRedux">CounterRedux</Link></p> */}
      {/* Route */}
      <Route path="/todo" component={TodoFeatures} />
      <Route path="/album" component={AlbumFeatures} />
      <Route path="/who" component={YouOrMe} />
      <Route path="/quantity" component={QuantityUpDown} />
      <Route path="/adminhome" component={AdminHome} />
      <Route path="/counterRedux" component={CounterDemoRedux} />
      <Route path="/product" component={ProductFeature} />
    </div>
  );
}

export default App;
