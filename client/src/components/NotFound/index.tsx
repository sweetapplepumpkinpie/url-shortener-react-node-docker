import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section>
      <h1>404 Not Found</h1>
      <Link to="/">To main page</Link>
    </section>
  );
};

export default NotFound;
