
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
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress=(progress)=> {
    this.setState({
      progress: progress

    })
  }
  render() {
    return (
      <div>
     


        <BrowserRouter>
          <NavBar />
          {/* // <LoadingBar */}
          {/* //   color='#C51ED1'
          //   progress={this.state.progress}

            

          // /> */}

          <Routes>
            <Route path="/" element={<News   key="genera" country='in' category='general' />} />
            {/* <Route path="/Global News" element={ <News setProgress={setProgress}  key= country='in' category='global News' />} /> */}
            <Route path="/business" element={<News   key='Business' country='in' category='Business' />} />
            <Route path="/health" element={<News  key='health' country='in' category='health' />} />
            <Route path="/science" element={<News   key='science' country='in' category='science' />} />
            <Route path="/general" element={<News   key='general' country='in' category=' general' />} />
            <Route path="/sports" element={<News   key='sports' country='in' category='sports' />} />
            <Route path="/technology" element={<News   key='technology' country='in' category='technology' />} />
            <Route path="/worldnews" element={<News   key='in' country='be' category='' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
