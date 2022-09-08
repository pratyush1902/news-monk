
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>

         
        <BrowserRouter>
        <NavBar />
        {/* <News country='in' category='genral' /> */}

          <Routes>
          <Route path="/" element={<News key="general" country='in' category='general' />} />
          {/* <Route path="/Global News" element={<News key= country='in' category='global News' />} /> */}
          <Route path="/business" element={<News key='Business'country='in' category='Business' />} />
          <Route path="/health" element={<News key='health' country='in' category='health' />} />
          <Route path="/science" element={<News key='science'country='in' category='science' />} />
          <Route path="/general" element={<News key='general' country='in' category=' general' />} />
          <Route path="/sports" element={<News key='sports' country='in' category='sports' />} />
          <Route path="/technology" element={<News key='technology' country='in' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
