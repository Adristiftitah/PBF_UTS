import React from "react";
import "./Post.css";

const Post = (props) => {
    return (

        <div className="artikel">
            <div className="gambar-artikel">
                <img src={require('../img/' + props.gambar)} alt="Gambar Produk" />
            </div>
            <div className="konten-artikel">
                <p className="judul-artikel">ID Mesin Cuci : {props.id} </p>
                <p className="isi-artikel">Merk Mesin Cuci : {props.nama}</p>
                <p className="isi-artikel">Harga Mesin Cuci : {props.harga}</p>
                <p className="isi-artikel">Stok Stok : {props.stok}</p>
                <button className="btn btn-sm btn-success" onClick={props.tambahTv.bind(this, props.id)}>  BELI </button>
            </div>
        </div>
    )
}

export default Post;