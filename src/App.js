import React from 'react';

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        counter : 0      
      }
    }
    /**
     * Adds one to state.counter
     */
    increaseCounter(){
      this.setState({counter : this.state.counter + 1})
    }
    render(){
      return (
        <div>
          <p>{this.state.counter}</p>
          <button onClick={this.increaseCounter.bind(this)}>Increase counter</button>
        </div>
      )
    }
}

export default App;
