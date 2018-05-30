import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }

  // sets an interval for the component this. it also modifies the state of the components bins attribute by calling the getBinsState. Repeats itself every 1.5 s.
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

  // sets bins to empty array. does a 9 times loop where it selects random true or false value for isTrashVisible and pushes it to the bins array. Ends up returning the array bins.
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

  onTrashClicked = () => {
    this.setState({
      points: this.state.points + 10,
    })
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash
          key={`trash-${index}`}
          isTrashVisible={bin.isTrashVisible}
          onTrashClicked={this.onTrashClicked}
        />
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
