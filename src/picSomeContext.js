import React, { useState, useEffect } from "react";

const { Provider, Consumer } = React.createContext();

function PicSomeContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setAllPhotos(data));
  }, []);

  console.log(allPhotos);
  return <Provider value={{ allPhotos }}>{props.children}</Provider>;
}
export { PicSomeContextProvider, Consumer as PicSomeContextConsumer };
