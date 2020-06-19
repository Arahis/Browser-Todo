import React  from "react";
import usePicture from "../custome_hooks/usePicture";

const Bg = () => {
  const { img } = usePicture();
  return (
    <div>
      {img ? (
        <div className="bg_img_container">
          <img className="bg_image" src={img} alt="bg_img" />
        </div>
      ) : (
        <div className="loader_container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Bg;
