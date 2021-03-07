import React from "react";

const Post = (props) => {
    return (
        <div className="Mhs">
            <div className="gambar-Mhs">
                <img src="http://placeimg.com/80/80/tect
                        h" alt="Gambar Tumbnail Artikel" />
            </div>
            <div className="tag">
                <div className="tag-nim"><b>NIM   :</b></div>
                <p className="tag-nama"><b>Nama  :</b></p>
                <p className="tag-alamat"><b>Alamat :</b></p>
                <p className="tag-hp"><b>No HP :</b></p>
                <p className="tag-angkatan"><b>Angkatan :</b></p>
                <p className="tag-status"><b>Status :</b></p>
            </div>
            <div className="konten-Mhs">
                <div className="nim">{props.nim}</div>
                <p className="nama">{props.nama}</p>
                <p className="alamat">{props.alamat}</p>
                <p className="hp">{props.hp}</p>
                <p className="angkatan">{props.angkatan}</p>
                <p className="nama">{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMhs(props.idMhs)}>Hapus</button>
            </div>
        </div>
    )
}
export default Post;