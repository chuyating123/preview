import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CourseList from './components/CourseList'
import CourseDetail from './components/CourseDetail'

function App() {
  return (
    <div className="App">
     <div>
     <Link to="/">首页</Link>
     <Link to="/About">关于我们</Link>
     <Link to="/CourseList">课程列表</Link>
     <Link to="/CourseDetail">课程详情</Link>
     </div>
     <div>
      <Route path="/" component={Home}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/CourseList" component={CourseList}></Route>
      <Route path="/CourseDetail/:id" component={CourseDetail}></Route>
     </div>
    </div>
  );
}

export default App;
