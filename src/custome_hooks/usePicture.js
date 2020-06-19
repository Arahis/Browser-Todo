import { useState, useEffect, useMemo, useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";


const unsplashApi = {
  apiUrl: "https://api.unsplash.com",
  clientId: "m-xBGVAIJdsP6KnActMZ-gpgtrDGAGhL1O4WWxHens4"
};

const cache = {};

const request = url => {
  if (cache[url]) {
    return cache[url];
  }

  return (cache[url] = new Promise(async (resolve, reject) => {
    try {
      const resp = await fetch(url);
      const json = await resp.json();

      resolve(json);
      delete cache[url];
    } catch (ex) {
      reject(ex);
    }
  }));
};

const usePicture = () => {
  const [img, setImg] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorProfile, setAuthorProfile] = useState("");

  const { query } = useContext(DashboardContext);

  useEffect(() => {
    const fetchImages = async () => {
      const url = `${
        unsplashApi.apiUrl
      }/photos/random?query=${query}&orientation=landscape&client_id=${
        unsplashApi.clientId
      }`;
      try {
        const data = await request(url);
        setImg(data.urls.regular);
        setAuthorName(data.user.name);
        setAuthorProfile(data.user.links.html);
      } catch (e) {
        if (e) {
          console.log(e.message);
        }
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query]);

  const result = useMemo(
    () => ({
      img,
      authorName,
      authorProfile
    }),
    [img, authorName, authorProfile]
  );

  console.log("!!!!!!!!!!!!", img, authorName, authorProfile)

  return result;
};

export default usePicture;