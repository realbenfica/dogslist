import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogBreedImages from './components/DogBreedImages';
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <header className="App-header">
          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImages} />
          </header>
        </main>
      </div>
    );
  }
}

export default App;