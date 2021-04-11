import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="row">
                    <div className="col-sm">
                        <div className="judul-artikel">Nama : {props.nama}</div>
                        <p className="isi-artikel">NIM : {props.nim}</p>
                        <p className="isi-artikel">Alamat : {props.alamat}</p>
                        <p className="isi-artikel">No Hp : {props.hp}</p>
                        <p className="isi-artikel">Angkatan : {props.angkatan}</p>
                        <p className="isi-artikel">Status : {props.status}</p>
                        <button className="btn btn-sm btn-warning" onClick={() => props.hapusMhs(props.idMhs)}>Hapus</button>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;