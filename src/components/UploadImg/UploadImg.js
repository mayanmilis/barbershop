import React, { Component } from 'react';
import './UploadImg.scss';
import NavLinks from '../NavLinks/Navlinks';
import {storage, database} from '../../fbConfig/fbConfig';

class UploadImg extends Component {

    state={
        file: '',
        category: '',
        hairLength: '',
        modelName: '',
        price: '',
        url: '', 
        alert: false
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

    onChangeTextHandler = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    uploadImg = () =>{
        const file = this.state.file;
        const category = this.state.category;
        let hairLength = this.state.hairLength;
        let modelName = this.state.modelName;
        modelName = modelName.slice(0,1).toUpperCase() + modelName.slice(1).toLowerCase();
        const price = this.state.price + " " +"nis";
        if(file&&category&&hairLength&&modelName&&price){
            storage.ref(`images/${category}/${file.name}`).put(file).
            then((snapshot)=>{
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log(progress)
            }).
            then(()=>{
                storage.ref(`images/${category}`).child(file.name).getDownloadURL().then(url => {
                this.setState({
                    url:url
                })
                console.log(this.state.url, '111111111111111111111111111111');
            }).
            then(() => {
                const url = this.state.url;
                console.log(url, '222222222222222222222222222222222222')
                if(category==="products"){
                    hairLength = "none";
                }
                database.collection("Images").add({
                    category: category,
                    hairLength: hairLength,
                    modelName: modelName,
                    price: price,
                    url:url,
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
              }).
              then(() =>{
                  this.setState({
                    file: '',
                    category: '',
                    hairLength: '',
                    modelName: '',
                    price: '',
                    alert: false
                  })
              })
          })
        }else{
            console.log('fill all fields')
            this.setState({
                alert: true
            })
        }
    }

    render() {
        console.log(this.state)
        const url = this.state.url;
        const uploadSucceed = url?"UPLOAD SUCCEED":null;
        let alert = this.state.alert;
        let alertMessage = alert?"Please Fill All Fields":null;
        return (
            <div>
                <NavLinks/>
                <div className="upload-img">
                    <div className="upload-img-container">
                        <h1>UPLOAD FILES</h1>
                        <div className="select-file">
                            <div className="file-description">
                                <div className="select-category">
                                    <p>Select Category</p>
                                    <select id="category" onChange={this.onChangeSelectBox} value={this.state.category}>
                                        <option disabled selected value="">Select Category</option>
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                        <option value="products">Pruducts</option>
                                    </select>  
                                </div>
                                <div className="description">
                                    <p>Hair Length</p>
                                    <select id="hairLength" onChange={this.onChangeSelectBox} value={this.state.hairLength}>
                                        <option disabled selected value="" >Select Length</option>
                                        <option value="short">Short</option>
                                        <option value="long">Long</option>
                                    </select>  
                                </div>
                                <div className="description">
                                    <p>Model Name</p>
                                    <input type="text" id="modelName" onChange={this.onChangeTextHandler} value={this.state.modelName}/>
                                </div>
                                <div className="description">
                                    <p>Price</p>
                                    <input type="text" id="price" onChange={this.onChangeTextHandler} value={this.state.price}/>
                                </div>
                                <div className="choose-file">
                                    <p>Select File</p>
                                    <input type="file" onChange={this.onChangeFileHandler}/>
                                </div>
                            </div>
                            <div className="alert-message">
                                <p>{alertMessage}</p>
                            </div>
                            <div className="upload-file">
                                <button onClick={this.uploadImg}>Upload</button>
                            </div>
                            <div className="file-preview">
                                <div id="img" style={{backgroundImage: `url(${this.state.url})`}}></div>
                            </div>
                        </div>
                        <div className="upload-succeed">
                            <p>{uploadSucceed}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadImg