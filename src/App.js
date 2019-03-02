import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
  {
    name: 'IPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
];

localStorage.setItem('products',)

class App extends Component {
  onChange(event) {
    console.log(event.target.value);
  }

  render() {
    const title = 'This is Michael!';


    return (
      <div className="App">

       
        <h1>{title}</h1>
        <input onChange={this.onChange}/>

      </div>
    );
  }
}

export default App;
