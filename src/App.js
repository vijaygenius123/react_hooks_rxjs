import React from 'react';
import './App.css';
import {from} from 'rxjs'
import { map } from 'rxjs/operators'


let numberObservable = from([1, 2, 3, 4, 5]);
let squaredNumbers = numberObservable.pipe(map(value => value * 2))

console.log(squaredNumbers)

squaredNumbers.subscribe(result => console.log(result));

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      currentNumber : 0
    }
  }

  componentDidMount() {
    this.subscription = squaredNumbers.subscribe(result => this.setState({currentNumber : result}));
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
        <div className="App">
        <h1> RxJS </h1>
          <h4>{this.state.currentNumber}</h4>
        </div>
    );
  }
}

export default App;
