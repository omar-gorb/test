import logo from './logo.svg';
import './App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductFrom';
import React from 'react';

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          products : []
      };
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts(){
    fetch('http://127.0.0.1:8000/products')
    .then(response => response.json())
    .then(json => this.setState({products: json}))
  }

  saveProduct = async(product) => {
      console.log("save product", product);
      fetch('http://127.0.0.1:8000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)       
      }).then( () => this.loadProducts());      
  }

  deleteProduct = (productId) => {
    console.log("delete product", productId);
    fetch('http://127.0.0.1:8000/products/' + productId, {
      method: 'DELETE'   
    }).then(() => this.loadProducts());
    
  }

  render(){
    return (
      <div className="App">
        <Filter></Filter>
        <ProductTable products={this.state.products}
                      deleteProduct={this.deleteProduct}></ProductTable>
        <ProductForm saveProduct={this.saveProduct}></ProductForm>

      </div>
    );
    }
}

export default App;
