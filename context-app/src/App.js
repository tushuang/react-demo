import React, { Component } from 'react';
// import Calculator from './temperatureCalculation/calculator'
import './App.css';
// import ProTypes from './ProTypes/demo'
// import Slot from './slot/demo'
// import Context from './context/demo'
import HocDemo from './HOC/HocDemo'
import CommentList from './HOC/CommentList'
import Father from './lifeCycle/forceUpdate'

class App extends Component {
  render() {
    return (
      // <Calculator/>
      // <ProTypes/>
      // <Slot/>
      // <HocDemo/>
      // <CommentList/>
      <Father/>
      // <HocDemo/>
    );
  }
}

export default App;
