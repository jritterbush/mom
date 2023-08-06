import styled from "@emotion/styled";
import { Masonry } from "@mui/lab";
import PhotoThumb from "./PhotoThumb";

const PhotoButton = styled.button`
  background-color: white;
  padding: 10px;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;
  &:hover {
    transform: scale3d(1.05, 1.05, 1);
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
      rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  }
`;

const PhotoGrid = ({ photos, selectPhoto }) => {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
      {photos.map((photo, index) => (
        <PhotoButton
          key={photo.filename}
          onClick={() => {
            selectPhoto(index);
          }}
        >
          <PhotoThumb photo={photo} />
        </PhotoButton>
      ))}
    </Masonry>
  );
};

export default PhotoGrid;
