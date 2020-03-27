import React, { useState, useEffect } from "react";

const Context = React.createContext();

function PicSomeContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArray = allPhotos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArray);
  }
  function addToCart(image) {
    setCartItems(prev => [...cartItems, image]);
  }
  function isAddedToCart(img) {
    return cartItems.find(item => item.id === img.id);
  }
  function removeItemFromCart(removeImg) {
    setCartItems(prev => prev.filter(item => item.id !== removeImg.id));
  }
  function emptyCart() {
    setCartItems([]);
  }
  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        isAddedToCart,
        removeItemFromCart,
        emptyCart
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { PicSomeContextProvider, Context };
