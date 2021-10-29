import React from "react";
import ProductRow from "./ProductRow";

function ProcuctTable (props) {
    return (
        <table>
            <tbody>
                {props.products.map(product => (
                    <ProductRow key={product.id} product={product} editProduct={props.editProduct} deleteProduct={props.deleteProduct}></ProductRow>
                ))}
            </tbody>
        </table>
    );
}

export default ProcuctTable;