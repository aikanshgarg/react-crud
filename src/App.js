import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddItem from './AddItem';

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

    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
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

  onAdd(name, price) {
      const products = this.getProducts();

      products.push({ // add data to local storage
        name,
        price
      });

       this.setState({ products }); // reflect on UI
  }

  onDelete(name) {
    //console.log(name);
    const products = this.getProducts();
    
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({ products: filteredProducts })
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts(); // mutating the products so let used, instead of const

    products = products.map(product => {
      if(product.name === originalName) {
        product.name = name;
        product.price = price;
      }

      return product;
    });

    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>


        <AddItem
          onAdd={this.onAdd}
        />

        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                name={product.name}
                price={product.price}

                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}

              />  
            );
          })
        }

      </div>
    );
  }
}

export default App;
