import React from 'react';

class ProductForm extends React.Component {
    state = {
        product : {
            name : '',
            category: '',
            price: '',
            stocked: true,
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await this.props.saveProduct(this.state.product);
            this.setState({
                product : {
                    name : '',
                    category: '',
                    price: '',
                    stocked: true,
                }
            });
        } catch (error) {
            console.log("Error");
        }
    }

    handleChange = (propName, options = { valueName : 'value', type: 'string' }) => (e) => {
        let value = e.target[options.valueName];
        let newProduct = {...this.state.product};
        if(options.type == 'number') {
            // value = -> number
        }
        newProduct[propName] = value;
        this.setState({
            product : newProduct
        })      
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name
                    <input type="input" value={this.state.product.name} onChange={this.handleChange('name', { required: true })}/>
                </label>
                <br/>
                <label>Category
                    <input type="input" value={this.state.product.category} onChange={this.handleChange('category')}/>
                </label>
                <br/>
                <label>Price
                    <input type="input" value={this.state.product.price} onChange={this.handleChange('price', { type: 'number' })}/>
                </label>                              
                <br/>
                <label>Stocked
                    <input type="checkbox" checked={this.state.product.stocked} onChange={this.handleChange('stocked', { valueName: 'checked' })}/>
                </label>  
                <br/>
                <input id="submit" type="submit" />
            </form>
        );
    }
}

export default ProductForm;