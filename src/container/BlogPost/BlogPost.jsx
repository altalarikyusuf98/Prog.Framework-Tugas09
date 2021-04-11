import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post"
import API from "../../services/index"

class BlogPost extends Component {
    state = {
        listMhs: [],
        insertMhs: {
            userId: 1,
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""


        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog()
            .then(result => {
                this.setState({
                    listMhs: result
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMhs = (data) => {
        API.deleteNewsBlog(data)
            .then(Response => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMhs = (event) => {
        let formInsertMhs = { ...this.state.insertMhs };
        let timestamp = new Date().getTime();
        formInsertMhs['id'] = timestamp;
        formInsertMhs[event.target.name] = event.target.value;
        this.setState({
            insertMhs: formInsertMhs
        });
    }

    handleTombolSimpan = () => {
        API.postNewsBlog(this.state.insertMhs)
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-Mhs">
                <div className="form pb-2 border-bottom mt-3">
                    <h2 className="text-center mb-3">Form Data Mahasiswa</h2>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahMhs} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="nama" name="nama" onChange={this.handleTambahMhs}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMhs}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">No HP</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="hp" name="hp" onChange={this.handleTambahMhs}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMhs}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="status" name="status" onChange={this.handleTambahMhs}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMhs.map(Mhs => {
                        return <Post key={Mhs.id} nim={Mhs.nim} nama={Mhs.nama} alamat={Mhs.alamat} hp={Mhs.hp} angkatan={Mhs.angkatan} status={Mhs.status} idMhs={Mhs.id} hapusMhs={this.handleHapusMhs} />
                    })
                }
            </div>
        )
    }
}


export default BlogPost;