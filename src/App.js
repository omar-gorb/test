import logo from './logo.svg';
import './App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductFrom';
import React from 'react';

class App extends React.Component {
  state = {
    products : []
  };
  
  componentDidMount(){
    this.loadProducts();
  }
 
  loadProducts(){
    fetch('http://127.0.0.1:8000/products')
    .then(response => response.json())
    .then(data => {
      if (!data.test) {
        return Promise.reject(new Error("dyuiop"));
      }
      return data;
    })
    .then(json => this.setState({products: json}))
    .catch(console.error);
  }

  saveProduct =  (product) => {
      return fetch('http://127.0.0.1:8000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)       
      }).then(response => response.json());
  }

  deleteProduct = (productId) => {
    console.log("delete product", productId);
    fetch('http://127.0.0.1:8000/products/' + productId, {
      method: 'DELETE'   
    }).then(() => this.loadProducts());
    
  }

  render(){
    const { products } = this.state;

    return (
      <div>
        <Filter></Filter>
        <ProductTable products={products} deleteProduct={this.deleteProduct}></ProductTable>
        <ProductForm saveProduct={this.saveProduct}></ProductForm>
      </div>
    );
    }
}

export default App;
