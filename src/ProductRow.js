import React from 'react';

class ProductRow extends React.Component {

    handleDelete = (e)=> {
        this.props.deleteProduct(this.props.product.id);
    }

    render(){
        return (
            <tr key={this.props.product.id}>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.category}</td>
                <td>${this.props.product.price}</td>
                <td><button onClick={this.handleDelete}>x</button></td>
            </tr>
        );
    }
}

export default ProductRow;