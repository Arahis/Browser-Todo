import React, { useContext } from "react";
import usePicture from "../custome_hooks/usePicture";
import { DashboardContext } from "../contexts/DashboardContext";

const AuthorCopyright = () => {
  const { color } = useContext(DashboardContext);
  const { authorName, authorProfile } = usePicture();

  return (
    <div className="copyright_container">
      {authorName ? (
        <a
          href={authorProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="author-link"
          style={{ color: color, borderRight: `2px solid ${color}` }}
        >
          {authorName}
        </a>
      ) : (
        <div
          className="author-link"
          style={{ color: color, borderRight: `2px solid ${color}` }}
        >
          Author
        </div>
      )}

      <a
        href="unplsash.com"
        target="_blank"
        rel="noopener noreferrer"
        className="copyright-link"
        style={{ color: color }}
      >
        Unsplash
      </a>
    </div>
  );
};

export default AuthorCopyright;
