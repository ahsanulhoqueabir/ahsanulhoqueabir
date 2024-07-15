import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const AutoScrollImage = ({ src }) => {
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    if (imgRef.current) {
      const handleLoad = () => {
        setImgHeight(imgRef.current.clientHeight);
      };

      const imgElement = imgRef.current;
      imgElement.addEventListener("load", handleLoad);

      if (imgElement.complete) {
        handleLoad();
      }

      return () => {
        imgElement.removeEventListener("load", handleLoad);
      };
    }
  }, [src]);

  return (
    <div
      className="h-80 w-full rounded-md"
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.img
        ref={imgRef}
        src={src}
        alt="Auto Scroll"
        style={{
          height: "auto",
          position: "absolute",
          top: 0,
        }}
        whileHover={{ y: -Math.max(0, imgHeight - 320) }}
        transition={{ duration: 3, ease: "linear" }}
      />
    </div>
  );
};

export default AutoScrollImage;
