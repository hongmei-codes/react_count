import React, { Component } from 'react';
import Counter from './components/counter'

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 10},
      {id: 3, value: 20},
      {id: 4, value: 1}
    ]
  }

  adButtonStyle = {
    backgroundColor: "purple",
    borderRadius: "100px",
    border: "none",
    color: "white",
    margin: "10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  }

  handleDelete = (counterID) => {
    // In React, cannot change state directly
    // create a copy of the counters and filter out the deleted counter
    // use setState() to set state.counters to the newly created counters array
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters }) // can be simplified to this.setState({counters}) 'cause of the same name 'counters'
  }

  render() {
    return (
    <div>
      { this.state.counters.map(counter => <Counter onDelete={ this.handleDelete } key={ counter.id } counter={ counter }/>)}
    </div>
    );
  }
}

export default App;
