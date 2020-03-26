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
    console.log("image added" + image.id);
    setCartItems(prev => [...cartItems, image]);
    console.log(cartItems);
  }

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite, addToCart }}>
      {props.children}
    </Context.Provider>
  );
}
export { PicSomeContextProvider, Context };
