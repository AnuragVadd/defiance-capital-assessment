import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          //   src={url + "/images/" + image}
          src={
            "https://images.openai.com/static-rsc-4/SntiNdj3hpG4Wv9IsYwLOiSP35R7A9e1U1q2nxkhVjD-z_49Ls4jf6D7hSok4GwBw_RWxMUN2TFxbYY7kBsSas89E_f2HZ6UCsK5WG6S-ANfN_RaNmvPucj0S0AcHCRnpznhPYmumRZLcu44F9GjilWy8I0eI5xltBiVdnxtZOXhFIHZzmT0hMgek6wPTUUs?purpose=inline"
          }
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
