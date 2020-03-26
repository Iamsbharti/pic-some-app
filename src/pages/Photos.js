import React, { useContext } from "react";
import { Context } from "../picSomeContext";
import Image from "../component/Image";
import { getClass } from "../utils/index";

function Photos() {
  const { allPhotos } = useContext(Context);
  const images = allPhotos.map((photo, index) => (
    <Image
      url={photo.url}
      key={photo.id}
      id={photo.id}
      isFavorite={photo.isFavorite}
      className={getClass(index)}
    />
  ));
  return <main className="photos">{images}</main>;
}

export default Photos;
