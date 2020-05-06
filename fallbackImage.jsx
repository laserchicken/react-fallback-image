import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const FallbackImage = ({ src, image, fallback }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (window) {
      const imageFetcher = new window.Image();
      imageFetcher.src = src;
      imageFetcher.onerror = () => {
        setError(true);
      };
    }
  });

  return error ? fallback : image;
};

FallbackImage.propTypes = {
  src: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  fallback: PropTypes.element.isRequired,
};

export default FallbackImage;
