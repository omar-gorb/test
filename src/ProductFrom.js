import React from 'react';

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product : {
                name : '',
                category: '',
                price: '',
                stocked: true,
            }
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let promise= this.props.saveProduct(this.state.product)
        console.log(promise);
        promise.then( () => {
            this.setState({
                product : {
                    name : '',
                    category: '',
                    price: '',
                    stocked: true,
                }
            });  
        });
      
        console.log('handlee submit',this.state.product);
    }

    handleChange = (e) => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        let name = e.target.name;
        let newProduct = {...this.state.product};
        newProduct[name] = value;
        this.setState({
            product : newProduct
        })      
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name
                    <input type="input" name="name" value={this.state.product.name} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Category
                    <input type="input" name="category" value={this.state.product.category} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Price
                    <input type="input" name="price" value={this.state.product.price} onChange={this.handleChange}/>
                </label>                              
                <br/>
                <label>Stocked
                    <input type="checkbox" name="stocked" checked={this.state.product.stocked} onChange={this.handleChange}/>
                </label>  
                <br/>
                <input id="submit" type="submit" />
            </form>
        );
    }
}

export default ProductForm;