import React from "react";
import New from "./New";
import PropTypes from "prop-types";

const News = ({ news }) => {
  return (
    <div className="row">
      {news.map((item, index) => (
        <New item={item} key={index} />
      ))}
    </div>
  );
};

News.propTypes = {
  news: PropTypes.array.isRequired,
};

export default News;
