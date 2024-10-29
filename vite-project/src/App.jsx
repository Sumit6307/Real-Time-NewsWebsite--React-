/*
import React, {Component} from 'react'
import Header from './Header'
import Show from './Show'
import './App.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export default class App extends Component {

     
  render() {

  return (
    <>     
                          
    <Router>
    <Header/>
    
   
  
  <Switch>
      <Route path='/'>   <Show  pageSize={this.pageSize} country="us" category="general"  /> </Route>
      <Route path='/business'>   <Show  pageSize={this.pageSize} country="us" category="business"  /> </Route>
      <Route path='/entertainment'>   <Show  pageSize={this.pageSize} country="us" category="entertainment"  /> </Route>
      <Route path='/health'>   <Show  pageSize={this.pageSize} country="us" category="health"  /> </Route>
      <Route path='/sports'>   <Show  pageSize={this.pageSize} country="us" category="sports"  /> </Route>
      <Route path='/technology'>   <Show  pageSize={this.pageSize} country="us" category="technology"  /> </Route>

  </Switch>

    </Router>
   
    </>
  
  )
}
}
*/


import React, {Component} from 'react'
import Header from './Header'
import Show from './Show'
import './App.css'


import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  
} from "react-router-dom";

export default class App extends Component {

  pageSize = 10;
     
  render() {
  return (
    <>     
                          
    <Router>
    <Header/>
    
    
  <Routes>
      <Route exact path='/'  element={<Show key="general"   pageSize={this.pageSize} country="us" category="general"  />}> </Route>
      <Route exact path='/business' element= {<Show  key="business"  pageSize={this.pageSize} country="us" category="business"  />}> </Route>
      <Route exact path='/entertainment' element = { <Show  key="ntertainment" pageSize={this.pageSize} country="us" category="entertainment"  /> }></Route>
      <Route exact path='/science' element = { <Show key="science" pageSize={this.pageSize} country="us" category="science"  /> }></Route>
      
      <Route exact path='/general' element = { <Show key="science" pageSize={this.pageSize} country="us" category="general  "  /> }></Route>
      
      <Route exact path='/health'  element= { <Show  key="health"  pageSize={this.pageSize} country="us" category="health"  />}> </Route>
      <Route exact path='/sports' element={ <Show   key="sports" pageSize={this.pageSize} country="us" category="sports"  />}> </Route>
      <Route exactz path='/technology' element = {<Show  key="technology"  pageSize={this.pageSize} country="us" category="technology"  />}> </Route>

  </Routes>

    </Router>
   
    </>
  
  )
}
}