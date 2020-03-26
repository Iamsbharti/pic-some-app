import React, { useState, useEffect } from "react";

const Context = React.createContext();

function PicSomeContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setAllPhotos(data));
  }, []);
  function toggleFavorite(id) {
    console.log(id);
    console.log("toggled");
    const updatedArray = allPhotos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArray);
  }
  console.log(allPhotos);
  return (
    <Context.Provider value={{ allPhotos, toggleFavorite }}>
      {props.children}
    </Context.Provider>
  );
}
export { PicSomeContextProvider, Context };
