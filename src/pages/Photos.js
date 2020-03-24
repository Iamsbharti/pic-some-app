import React from "react";
import { PicSomeContextConsumer } from "../picSomeContext";
import Image from '../component/Image';
import { getClass } from "../utils/index";
function Photos() {
  return (
    <main className="photos">
      {" "}
      <PicSomeContextConsumer>{allPhotos => {
        allPhotos.map(photo=> )
      }}</PicSomeContextConsumer>
    </main>
  );
}

export default Photos;
