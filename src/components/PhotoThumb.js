const PhotoThumb = ({ photo }) => {
  return (
    <img
      style={{ width: "100%", height: "auto" }}
      alt=""
      src={photo.src}
      loading="lazy"
    />
  );
};

export default PhotoThumb;
