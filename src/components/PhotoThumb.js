import {IMG_CDN_ROOT} from "../constants/images";

const PhotoThumb = ({ photo }) => {
  return (
    <img
      style={{ width: "100%", height: "auto" }}
      alt=""
      src={`${IMG_CDN_ROOT}/thumbs/${photo.filename}`}
      loading="lazy"
    />
  );
};

export default PhotoThumb;
