import React from "react";
import ProductRow from "./ProductRow";

class ProcuctTable extends React.Component {

    render(){
        return (
            <table>
                <tbody>
                    {this.props.products.map(product => (
                        <ProductRow key={product.id} product={product} deleteProduct={this.props.deleteProduct}></ProductRow>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default ProcuctTable;