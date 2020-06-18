import { useState, useEffect, useMemo, useCallback } from "react";
// import axios from "axios";

const usePicture = query => {
  const [img, setImg] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorProfile, setAuthorProfile] = useState("");


  console.log("QUERY @@@@", query)
  const unsplashApi = {
    apiUrl: "https://api.unsplash.com",
    clientId: "m-xBGVAIJdsP6KnActMZ-gpgtrDGAGhL1O4WWxHens4",
  };

  let url = `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&client_id=${unsplashApi.clientId}`;


  const fetchImages = async () => {
    try {
      const imageData = await fetch(url);
      const data = await imageData.json();
      setImg(data.urls.regular);
      setAuthorName(data.user.name);
      setAuthorProfile(data.user.links.html);
    } catch (e) {
      if (e) {
        console.log(e.message);
      }
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const result = useMemo(
    () => ({
      img,
      authorName,
      authorProfile,
    }),
    [img, authorName, authorProfile]
  );


  return result;
};

export default usePicture;
