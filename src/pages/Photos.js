import React from "react";
import { PicSomeContextConsumer } from "../picSomeContext";
import Image from "../component/Image";
import { getClass } from "../utils/index";
function Photos() {
  return (
    <main className="photos">
      <PicSomeContextConsumer>
        {({ allPhotos }) =>
          allPhotos.map((photo, index) => (
            <Image
              url={photo.url}
              key={photo.index}
              className={getClass(index)}
            />
          ))
        }
      </PicSomeContextConsumer>
    </main>
  );
}

export default Photos;
