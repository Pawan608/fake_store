import "./css/style.css";
import { useState, useEffect, useRef } from "react";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
function Home({ setLoadingscript }) {
  let url = `https://fakestoreapi.com/products/`;
  const { loading, products } = useFetch(url);
  setLoadingscript(null);

  return (
    <>
      <navbar className="nav">
        <div className="nav__icon">Fake Store</div>
      </navbar>
      <section className="nav__container">
        {products.length &&
          products.map((el) => {
            const rating = el.rating.rate;
            // console.log(rating);
            const approx__rating = Math.trunc(rating);
            const decimal__rating =
              Math.trunc(rating * 10) - approx__rating * 10;
            let accurate__rating = [];
            for (let i = 0; i <= approx__rating; i++) {
              if (i !== approx__rating) accurate__rating.push(1);
              else {
                if (decimal__rating === 5) accurate__rating.push(0.5);
                if (decimal__rating > 5) accurate__rating.push(1);
              }
            }

            return (
              <div className="box" key={el.id}>
                <div className="box__front">
                  <div className="box__picture">
                    <img
                      src={el.image}
                      alt="Product image"
                      className="box__picture__img"
                    />
                  </div>
                  <h4 className="box__heading">
                    <span className="box__heading--span">{el.title}</span>
                  </h4>
                  <div className="box__feature">
                    <div className="feature__rating">
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
                    <div className="feature__info">
                      <div className="feature__info__price">
                        &#8377; {el.price}{" "}
                        <span className="feature__info__price-small">Only</span>
                      </div>
                      <div className="feature__info__stock">In stock</div>
                    </div>
                  </div>
                </div>
                <div className="box__back">
                  <Link
                    to={`/${el.id}`}
                    className="btn btn--white box__back__button"
                    target="_blank"
                  >
                    View Detail
                  </Link>
                  <div className="box__back__icon">
                    <div className="box__back__icon__container">
                      <input
                        type="checkbox"
                        className="box__back__icon__checkbox"
                      />
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
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default Home;
