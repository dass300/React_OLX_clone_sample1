import React, { useState, useEffect, useContext } from "react";
import Heart from "../../assets/Heart";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import "./Post.css";
import { useHistory } from "react-router-dom";
import View from "../View/View";

function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const history = useHistory();

  useEffect(() => {
    firebase
      .firestore()
      .collection("product")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allPost);
      });
  }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return (
              <div
                className="card"
                onClick={() => {
                  setPostDetails(product);
                  history.push("/view");
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="hhhh" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>

        <div className="card-container">
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/1995-Range-Rover-cl.jpg" alt="" />
              <img src="../../../" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 5</p>
              <span className="kilometer">4WD SUV </span>
              <br />
              <p className="name">1995-Range-Rover-Classic </p>
            </div>
            <div className="date">
              <span>10/5/2022</span>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/Enfiled.jpg" alt="" />
              <img src="../../../" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 1</p>
              <span className="kilometer">Two Wheeler </span>
              <br />
              <p className="name">Enfiled-Classic </p>
            </div>
            <div className="date">
              <span>10/5/2022</span>
            </div>
          </div>
        </div>

        
          <div className="cards">
            <div className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src="../../../Images/Moto-guzzi-v9-roamer.jpg" alt="" />
                <img src="../../../" alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 2</p>
                <span className="kilometer">Two Wheeler </span>
                <br />
                <p className="name">Moto-guzzi-v9-roamer </p>
              </div>
              <div className="date">
                <span>10/5/2022</span>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src="../../../Images/mordern villa.jpg" alt="" />
                <img src="../../../" alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 1</p>
                <span className="kilometer">Mansion</span>
                <br />
                <p className="name">Mordern villa </p>
              </div>
              <div className="date">
                <span>10/5/2022</span>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src="../../../Images/dane.jpg" alt="" />
                <img src="../../../" alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 2</p>
                <span className="kilometer">Pet</span>
                <br />
                <p className="name">Great Dane </p>
              </div>
              <div className="date">
                <span>10/5/2022</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Posts;
