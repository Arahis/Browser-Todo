import React, { useContext } from "react";
import usePicture from "../custome_hooks/usePicture";
import { DashboardContext } from "../contexts/DashboardContext";

const Bg = () => {
  const { query } = useContext(DashboardContext);
  const { img } = usePicture(query);
  return (
    <div className="bg_img_container">
      <img className="bg_image" src={img} alt="bg_img" />
    </div>
  );
};

export default Bg;
