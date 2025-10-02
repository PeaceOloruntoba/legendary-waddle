import React from "react";
import Articles from "../components/Articles";
import Products from "../components/Products";

const ArticlesPage: React.FC = () => {
  return (
    <>
      <Articles variant="page" />
      <Products variant="page" />
    </>
  );
};

export default ArticlesPage;
