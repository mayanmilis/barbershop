import React, { Component } from 'react';
import './UploadImg.scss';
import {storage, database} from '../../fbConfig/fbConfig';

class UploadImg extends Component {

    state={
        file: null,
        description: '',
        hairLength: '',
        url: '',
        subCollection: ''
    }

    onChangeFileHandler = (e) =>{
        this.setState({
            file: e.target.files[0],
            
        })
    }

    onChangeSelectBox = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    uploadImg = () =>{
        const file = this.state.file;
        const subCollection = this.state.subCollection;
        const description = this.state.description; 
            storage.ref(`images/${subCollection}/${file.name}`).put(file).
            then((snapshot)=>{
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log(progress)
            }).
            then(()=>{
                storage.ref(`images/${subCollection}`).child(file.name).getDownloadURL().then(url => {
                this.setState({
                    url:url
                })
                console.log(this.state.url, '111111111111111111111111111111');
            }).
            then(() => {
                let url = this.state.url;
                console.log(url, '222222222222222222222222222222222222')
                database.collection("Images").add({
                    description: description,
                    url: url,
                    category: subCollection
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
              })
            //   .then(()=>{
            //     setTimeout(() => {
            //         this.setState({
            //             file: null,
            //             description: '',
            //             hairLength: '',
            //             url: '',
            //             subCollection: ''
            //         })
            //         }, 5000);
            //   })
          })
    }

    render() {
        console.log(this.state)
        const url = this.state.url;
        const uploadSucceed = url?"UPLOAD SUCCEED":null;
        return (
            <div className="upload-img">
                <div className="upload-img-container">
                    <h1>UPLOAD FILES</h1>
                    <div className="select-file">
                        <div className="file-description">
                            <div className="select-category">
                            <p>Select Category</p>
                                <select id="description" onChange={this.onChangeSelectBox}>
                                    <option disabled selected>Select Category</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                    <option value="product">Pruduct</option>
                                </select>  
                            </div>
                            <div className="description">
                                <p>Hair Length</p>
                                <select id="hairLength" onChange={this.onChangeSelectBox}>
                                    <option disabled selected>Select Length</option>
                                    <option value="short">Short</option>
                                    <option value="long">Long</option>
                                </select>  
                            </div>
                            <div className="choose-file">
                                <p>Select File</p>
                                <input type="file" onChange={this.onChangeFileHandler}/>
                            </div>
                        </div>
                        <div className="upload-file">
                            <button onClick={this.uploadImg}>Upload</button>
                        </div>
                    </div>
                    <div className="file-preview">
                        <div id="img" style={{backgroundImage: `url(${this.state.url})`}}></div>
                    </div>
                    <div className="upload-succeed">
                        <p>{uploadSucceed}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadImg