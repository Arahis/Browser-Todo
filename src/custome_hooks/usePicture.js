import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const unsplashApi = {
  apiUrl: "https://api.unsplash.com",
  clientId: "m-xBGVAIJdsP6KnActMZ-gpgtrDGAGhL1O4WWxHens4",
};

const usePicture = (query) => {
  const [img, setImg] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorProfile, setAuthorProfile] = useState("");

  console.log(query)
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&client_id=${unsplashApi.clientId}`
      )
      .then((res) => {
        setImg(res.data.urls.regular);
        setAuthorName(res.data.user.name);
        setAuthorProfile(res.data.user.links.html);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

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
