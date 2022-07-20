import "./../css/style.css";
import { useState, useEffect } from "react";
import { useFetch } from "./../useFetch";
import { Link, useParams } from "react-router-dom";
function ProductDetails({ loadingScript, setLoadingscript }) {
  const { productId } = useParams();
  let url = `https://fakestoreapi.com/products/${productId}`;
  const { loading, products } = useFetch(url, setLoadingscript, true);
  console.log(products);
  console.log(loadingScript);
  useEffect(() => {
    if (loadingScript !== null) {
      setTimeout(() => {
        const script = document.createElement("script");
        script.src = require("./script");
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, 1000);
    }
  }, [loadingScript]);
  if (products.id) {
    console.log(products, true);
  }
  let accurate__rating = [];
  let descriptionList;
  if (products.id) {
    const rating = products.rating.rate;
    // console.log(rating);
    const approx__rating = Math.trunc(rating);
    const decimal__rating = Math.trunc(rating * 10) - approx__rating * 10;

    for (let i = 0; i <= approx__rating; i++) {
      if (i !== approx__rating) accurate__rating.push(1);
      else {
        if (decimal__rating === 5) accurate__rating.push(0.5);
        if (decimal__rating > 5) accurate__rating.push(1);
      }
    }
    descriptionList = products.description.split(".");
    console.log(descriptionList);
  }

  return (
    <>
      <navbar className="nav">
        <div className="nav__icon">Fake Store</div>
      </navbar>
      {products.id && (
        <section className="container">
          <div className="container__picture">
            <img
              className="container__picture--1"
              src={products.image}
              alt="Product Image"
            />
          </div>
          <div className="container__details">
            <div className="container__details__title">{products.title}</div>
            <div className="container__details__rating">
              {accurate__rating.map((el) => {
                if (el === 1)
                  return (
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="rating__icon"
                    >
                      <title>star-full</title>
                      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                    </svg>
                  );
                if (el === 0.5)
                  return (
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="rating__icon"
                    >
                      <title>star-half</title>
                      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-0.029 0.015 0.029-17.837 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
                    </svg>
                  );
              })}
            </div>
            <div className="container__details__price">
              &#8377; {products.price}{" "}
              <span className="feature__info__price-small">Only</span>
            </div>
            <ul className="container__details__description">
              {descriptionList.map((el) => {
                return <li className="description__list">{el}</li>;
              })}
            </ul>
            <div className="container__details__wishlist">
              <div className="box__back__icon__container wishlist__icon">
                <input type="checkbox" className="box__back__icon__checkbox" />
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="icon__heart icon__heart--unliked"
                >
                  <title>heart-outlined</title>
                  <path d="M17.19 4.156c-1.672-1.535-4.383-1.535-6.055 0l-1.135 1.041-1.136-1.041c-1.672-1.535-4.382-1.535-6.054 0-1.881 1.726-1.881 4.519 0 6.245l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.245zM16.124 9.375l-6.124 5.715-6.125-5.715c-0.617-0.567-0.856-1.307-0.856-2.094s0.138-1.433 0.756-1.999c0.545-0.501 1.278-0.777 2.063-0.777s1.517 0.476 2.062 0.978l2.1 1.825 2.099-1.826c0.546-0.502 1.278-0.978 2.063-0.978s1.518 0.276 2.063 0.777c0.618 0.566 0.755 1.212 0.755 1.999s-0.238 1.528-0.856 2.095z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="icon__heart icon__heart--liked"
                >
                  <title>heart</title>
                  <path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"></path>
                </svg>
              </div>
              <h4 className="wishlist">wishlist</h4>
            </div>
            <div className="horizontal"></div>
          </div>
          <div className="container__zoom"></div>
          <div className="container__checkout">
            <div className="container__checkout__price">
              &#8377; {products.price}{" "}
              <span className="feature__info__price-small">Only</span>
            </div>
            <div className="container__checkout__delivery">
              Free Delivery{" "}
              <span className="container__checkout__delivery--span">
                by Tuesday 25th January
              </span>
            </div>
            <li className="container__checkout__stock">In Stock</li>
            <div className="container__checkout__quantity">
              <label forHTML="quantity">qty:</label>
              <input
                type="number"
                id="quantity"
                className="quantity"
                value="1"
              />
            </div>
            <div className="container__checkout__cart">
              <button className="btn btn--green">Add to Cart</button>
            </div>
            <div className="container__checkout__buy">
              <button className="btn btn--green--light btn-buy">Buy Now</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default ProductDetails;
