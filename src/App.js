import { useState } from "react";
import PhotoGrid from "./components/PhotoGrid";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import photos from "./image-list.json";
import styled from "@emotion/styled";

const slides = photos.map(({ full, width, height, images }) => {
  return {
    src: full,
    width,
    height,
  };
});

const Hero = styled.header`
  display: flex;
  justify-content: center;
  background-color: #7b96bb;
  gap: 20px;
  min-height: 96vh;
  background: url("https://jvr.nyc3.cdn.digitaloceanspaces.com/images/mom/clouds.jpg");
  .Hero-Text {
    padding: 20px;
    margin: 20px 0;
    max-width: 700px;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .Hero-Image {
    height: 500px;
    margin-top: 120px;
  }
`;

function App() {
  const [index, setIndex] = useState(-1);
  return (
    <div className="App">
      <Hero>
        <div className="Hero-Text">
          <h1>Remembering Deb Ritterbush</h1>
          <h2>January 2, 1953 &mdash; September 12, 2022</h2>
          <p>
            Hastings, Nebraska, resident Debra Lea “Deb” Ritterbush, aged 69,
            passed away peacefully Monday, September 12, 2022, at Edgewood
            Healthcare in Hastings.
          </p>
          <p>She was surrounded by family at the time of her death.</p>
          <p>
            Memorials may be given to the{" "}
            <a
              href="classy.org/campaign/research-fund-jonah-ritterbush/c130938"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jonah Ritterbush Family Fund
            </a>{" "}
            or the{" "}
            <a href="alz.org" target="_blank" rel="noopener noreferrer">
              Alzheimer’s Association
            </a>
            .{" "}
          </p>
          <p>
            Deb was born January 2, 1953, in Kearney, NE, to John and Dorothy
            (Kroeger) Slote. She graduated from Hastings High School in 1971.
            Fifty years ago, Deb married her beloved husband, Craig Ritterbush,
            on September 15, 1972, in Hastings.
          </p>
          <p>
            Deb was a caregiver for the entirety of her life. She lovingly
            raised her two sons and cared for her mother and mother-in-law at
            the end of their lives.
          </p>
          <p>
            Deb cherished her relationships with her sisters, friends and nieces,
            with whom she loved to shop, bowl, and travel. Her sons and
            grandchildren were the light of her life.
          </p>
          <p>
            She worked as a receptionist for various medical offices and
            Walgreens Pharmacy in Hastings. She was a member of Faith Lutheran
            Church.
          </p>
          <p>
            Deb was preceded in death by her parents; father-in-law and
            mother-in-law, Vernon and Jean Ritterbush; brother-in-law, Tom
            Anderson; and grandson, Jonah Ritterbush.
          </p>
          <p>
            The Ritterbush family would like to extend their sincere gratitude
            to the staff at Edgewood Memory Care for their invaluable support
            and care for Deb in the final year of her life.
          </p>
          <p>
            Survivors include her husband, Craig Ritterbush of Hastings, NE;
            sons and partners, John Ritterbush and Cassie Tompkins of Chicago,
            IL, Mark and Dana Ritterbush of Omaha, NE; grandchildren, Ronan
            Ritterbush, Norah Ritterbush; sisters, RoJean Anderson of Fairfield,
            IA, Deanna Schardt of Hastings, NE.
          </p>
        </div>
        <img
          alt="Black and white photograph of Deb Ritterbush"
          className="Hero-Image"
          src="https://jvr.nyc3.cdn.digitaloceanspaces.com/images/mom/IMG_20220912_210338.jpg"
        />
      </Hero>
      <PhotoGrid photos={photos} selectPhoto={setIndex} />
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
