import React, { Component } from 'react';
import {storage, database} from '../../fbConfig/fbConfig';

class UploadImg extends Component {

    state={
        file: null,
        description: '',
        url: '',
    }

    onChangeHandler = (e) =>{
        this.setState({
            file: e.target.files[0],
            description: e.target.value
        })
    }

    uploadImg = () =>{
        const file = this.state.file;
        storage.ref(`images/men/${file.name}`).put(file).
        then((snapshot)=>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log(progress)
        }).
        then(()=>{
            storage.ref('images/men').child(file.name).getDownloadURL().then(url => {
            this.setState({
                url:url
            })
            console.log(this.state.url, '111111111111111111111111111111');
        }).
        then(() => {
            let url = this.state.url;
            let description = this.state.description;
            console.log(url, '222222222222222222222222222222222222')
            database.collection("Images").add({
                description: description,
                url: url
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
          })
      })
    }

    render() {
        console.log(this.state.file)
        return (
            <div>
                <input type="file" onChange={this.onChangeHandler}/>
                <input type="text" onChange={this.onChangeHandler}/>
                <button onClick={this.uploadImg}>Upload</button>
            </div>
        )
    }
}

export default UploadImg