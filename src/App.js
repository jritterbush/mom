import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./image-list.json";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet:
    images &&
    images.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
}));

function App() {
  const [index, setIndex] = useState(-1);
  return (
    <div className="App">
      <div>
        <h1>Remembering Deb Ritterbush</h1>
      </div>
      <PhotoAlbum
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
        }}
        layout="masonry"
        photos={photos}
        targetRowHeight={150}
        padding={10}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{
          imageProps: { loading: "lazy", className: "photo" },
        }}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default App;
