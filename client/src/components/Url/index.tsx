import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { useUrl } from "../../hooks/useUrl";

const Url: React.FC = () => {
  const { urlId } = useParams();
  const { getUrl, shortUrl } = useUrl();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        await getUrl(urlId ?? "");
      } catch (err) {
        navigate("/not-found");
      }
    })();
  }, [urlId]);

  return (
    <div className="main-form-div">
      <div>Origin URL: {shortUrl?.originUrl}</div>
      <div>Short URL: {shortUrl?.shortUrl}</div>
      <div>Visit count: {shortUrl?.clicks}</div>
      <Link to="/">To main page</Link>
    </div>
  );
};

export default Url;
