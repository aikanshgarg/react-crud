import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onDelete = this.onDelete.bind(this); // binding the method to delete button
  }


  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });
  }

  getProducts() {
    return this.state.products; // to convert JSON string into JS object (array)

    //console.log(products);    
  }

  onDelete(name) {
    //console.log(name);
    const products = this.getProducts();
    
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({ products: filteredProducts })
  }

  render() {
    return (
      <div className="App">

       
        <h1>Products Manager</h1>
        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                name={product.name}
                price={product.price}

                onDelete={this.onDelete}

              />  
            );
          })
        }

      </div>
    );
  }
}

export default App;
