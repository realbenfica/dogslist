import React, { Component } from 'react';
import './App.css';
import DogsList from './components/Dogslist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DogsList />
        </header>
      </div>
    );
  }
}

export default App;