import { useState } from "react";

import { api } from "../api";
import { API_URL } from "../constants";

type TUrl = {
  shortUrl: string;
  _id: string;
  clicks: number;
  originUrl: string;
  urlId: string;
};

export const useUrl = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<TUrl>();

  const submitUrl = async () => {
    const response = await api.post(
      `${API_URL}/short`,
      JSON.stringify({ originUrl: url })
    );
    if (response.ok) {
      const data = await response.json();
      setShortUrl(data);
    } else {
      throw new Error("Failed to shorten URL");
    }
  };

  const getUrl = async (urlId: string) => {
    const response = await api.get(`${API_URL}/${urlId}`);
    if (response.ok) {
      const data = await response.json();
      setShortUrl(data);
    } else {
      throw new Error("Failed to shorten URL");
    }
  };

  return {
    url,
    setUrl,
    shortUrl,
    submitUrl,
    getUrl,
  };
};
