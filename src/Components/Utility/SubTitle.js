import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-2">
      <div className="sub-tile">{title}</div>

      {btntitle ? (
        <Link
          to={`${pathText}`}
          reloadDocument
          style={{ textDecoration: "none" }}
        >
          <div className="shopping-now">{btntitle}</div>{" "}
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
