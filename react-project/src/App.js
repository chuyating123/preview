import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
     <div>
     <Link to="/">首页</Link>
     <Link to="/About">关于我们</Link>
     </div>
     <div>
      <Route path="/" component={Home}></Route>
      <Route path="/About" component={About}></Route>
     </div>
    </div>
  );
}

export default App;
