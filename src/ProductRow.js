import React from 'react';
import './ProductRow.css'

function ProductRow (props) {
    return (
        <tr key={props.product.id} className={props.product.stocked ? 'stocked' : 'hors-stocked'}>
            <td>{props.product.name}</td>
            <td>{props.product.category}</td>
            <td>${props.product.price}</td>
            <td><button onClick={e => props.deleteProduct(props.product.id)}>x</button></td>
        </tr>
    );
}

export default ProductRow;