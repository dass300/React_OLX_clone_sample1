import React, {Fragment, useContext, useState} from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useHistory } from 'react-router-dom'
import {FirebaseContext,AuthContext} from '../../store/Context'

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const date = new Date()

  const handleSubmit =()=>{
    console.log('bjjgvg');
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log('ggggg');
        console.log(url);
        
        
        firebase.firestore().collection('product').add({
          name,category,price,url,userId:user.uid,createdAt:date.toDateString()
        })
        history.push('/')
      })
    })

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            id="fname"
            onChange={(event) => setName(event.target.value)}
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            id="fname"
            onChange={(event) => setCategory(event.target.value)}
            name="category"
            defaultValue="John"
          />
          <br />

          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={price}
            id="price"
            onChange={(event) => setPrice(event.target.value)}
            name="Price"
          />
          <br />

          <br />

          <img alt="Posts" width="200px" height="200px" src="{image ? URL.createObjectURL(image) : '' } " ></img>
          <br />
          <input type='file' onChange={(event) => {setImage(event.target.files[0])}}/>
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
