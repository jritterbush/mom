import { useState } from "react";
import PhotoGrid from "./components/PhotoGrid";
import Hero from "./components/Hero";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import photos from "./image-list.json";

const slides = photos.map(({ full, width, height, images }) => {
  return {
    src: full,
    width,
    height,
  };
});

function App() {
  const [index, setIndex] = useState(-1);
  return (
    <div className="App">
      <main id="content">
        <Hero />
        <section style={{ padding: "20px" }}>
          <PhotoGrid photos={photos} selectPhoto={setIndex} />
        </section>
      </main>
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
