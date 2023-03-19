
import './App.css';
//class base component
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Sports from './components/Sports';

import Entertainment from './components/Entertainment';
import Technology from './components/Technology';
import Science from './components/Science';
import Health from './components/Health';

import News from './components/News';
import { HashRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apikey=process.env.REACT_APP_API;
  state ={
    progress:0
    
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <>
           <HashRouter > 
           <Navbar/>
           <LoadingBar
           height={4}
        color='#f11946'
        progress={this.state.progress}
     
      />
         <Routes>
        <Route exact  path='/' element={<News/>}/>
        <Route exact path='/entertainment' element={<Entertainment/>}/>
        <Route exact path='sports' element={<Sports/>}/>
        <Route exact path='/technology' element={<Technology/>}/>
        <Route exact path='/science' element={<Science/>}/>
        <Route exact path='/health' element={<Health/>}/>
        </Routes>
        </HashRouter> 
      </>
    )
  }
}
