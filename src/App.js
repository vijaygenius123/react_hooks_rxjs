import React from 'react';
import './App.css';
import {from} from 'rxjs'
import { map } from 'rxjs/operators'


let numberObservable = from([1, 2, 3, 4, 5]);
let squaredNumbers = numberObservable.pipe(map(value => value * 2))

console.log(squaredNumbers)

squaredNumbers.subscribe(result => console.log(result));

function App() {


  return (
    <div className="App">

    </div>
  );
}

export default App;
