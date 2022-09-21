import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import { type RenderPhoto } from "react-photo-album";
import photos from "./image-list.json";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const renderPhoto: RenderPhoto = ({ photo, imageProps }) => {
  const { src, alt, sizes, style, ...restImageProps } = imageProps;
  return (
    <button
      className="photo-button"
      style={{
        padding: "10px",
        backgroundColor: "white",
        transition: "box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out",
		marginBottom: "20px",
      }}
    >
      <img
        src={photo.src}
        alt=""
        loading="lazy"
        style={{ ...style, marginBottom: 0 }}
        {...restImageProps}
      />
    </button>
  );
};

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
        renderPhoto={renderPhoto}
        layout="masonry"
        photos={photos}
        targetRowHeight={150}
        onClick={(event, photo, index) => {
          console.log(photo);
          setIndex(index);
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
