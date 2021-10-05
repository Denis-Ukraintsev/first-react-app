import React from "react";
import { NavLink } from "react-router-dom";
import styed from "styled-components";

const News = (props) => {
  return (
    <NewsContainer>
      <NavLink to="#">News</NavLink>
    </NewsContainer>
  );
};

const NewsContainer = styed.div`
margin: 5px;
a {
  text-decoration: none;
  color: rgb(71, 22, 80);
}
`;

export default News;
