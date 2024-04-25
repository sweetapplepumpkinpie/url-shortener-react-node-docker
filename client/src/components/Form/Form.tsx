import React, { FormEvent, useState } from "react";
import { Clipboard, Link as LucideLink } from "lucide-react";

import "./Form.css";

import { useUrl } from "../../hooks/useUrl";
import { validateUrl } from "../../util";
import { Link } from "react-router-dom";

const Form = () => {
  const { url, setUrl, shortUrl, submitUrl } = useUrl();
  const [copiedMessageVisible, setCopiedMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateUrl(url)) {
      setErrorMessage("Please enter a URL");
      return;
    }

    try {
      setErrorMessage("");
      await submitUrl();
    } catch (error) {
      setErrorMessage(`Error: ${error}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(shortUrl?.shortUrl ?? "")
      .then(() => {
        setCopiedMessageVisible(true);
        setTimeout(() => setCopiedMessageVisible(false), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div>
      <div className="main-form-div">
        <div className="inner-div">
          <div className="form-begin">
            <div className="circles"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>

          <div className="content">
            <h2 className="heading">
              URL SHORTENER
              <LucideLink size={24} className="icon-url" />
            </h2>
          </div>

          <h4 className="enter-url-heading">Enter the URL to Shorten</h4>

          <form onSubmit={handleSubmit}>
            <div className="input-url-box">
              <h4>URL</h4>
              <input
                type="text"
                value={url}
                onChange={handleChange}
                placeholder="Enter URL"
              />
            </div>
            {!!errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="url-btn">
              <button type="submit" className="shorten-button">
                Shorten
              </button>
            </div>
          </form>

          {!!shortUrl && (
            <>
              <div className="success-message">
                <p>Success! Here is your short URL:</p>
              </div>
              <div className="copy-url">
                <Link to={shortUrl?.urlId} rel="noopener noreferrer">
                  {shortUrl?.shortUrl}
                </Link>
                <Clipboard className="copy-icon" onClick={handleCopy} />
                {copiedMessageVisible && (
                  <p className="copied-message">Copied!</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
