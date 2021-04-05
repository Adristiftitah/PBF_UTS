import React from "react";
import "./Post.css";
import Table from 'react-bootstrap/Table'


const Cart = (props) => {
    return (
        <tr>
            <td align="center">{props.no}</td>
            <td align="center">{props.id}</td>
            <td>{props.nama}</td>
            <td align="center">{props.harga}</td>
            <td align="center">{props.qty}</td>
            <td align="center">{props.harga * props.qty}</td>
        </tr>
    )
}

export default Cart;