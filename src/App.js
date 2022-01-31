import React from 'react';
//import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
//import About from './components/About'
//import Contact from './components/Contact'
//import Post from './components/Post'

const App = () =>{
  return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          <Switch>
            <Route exact path='/'><Home/></Route>
            {/* <Route path='/about'><About/></Route>
            <Route path='/contact'><Contact/></Route>
  <Route path='/:post_id'><Post/></Route>*/}
          </Switch>
          <>just a text</>
        </div>
      </BrowserRouter>
    );
  }

export default App;
