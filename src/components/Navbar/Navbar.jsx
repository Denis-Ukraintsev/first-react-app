import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const i18n = {
    profile: "Profile",
    messages: "Dialogues",
    news: "News",
    photos: "Photos"
  };

  return (
    <MenuContainer>
      <MenuItem>
        <NavLink to="/Profile" activeStyle={activeStyles}>
          {i18n.profile}
        </NavLink>
      </MenuItem>
      <br />
      <MenuItem>
        <NavLink to="/Dialogues" activeStyle={activeStyles}>
          {i18n.messages}
        </NavLink>
      </MenuItem>
      <br />
      <MenuItem>
        <NavLink to="/News" activeStyle={activeStyles}>
          {i18n.news}
        </NavLink>
      </MenuItem>
      <br />
      <MenuItem>
        <NavLink to="/Photos" activeStyle={activeStyles}>
          {i18n.photos}
        </NavLink>
      </MenuItem>
      <br />
    </MenuContainer>
  );
};

const MenuItem = styled.div`
  a {
    color: rgb(240, 216, 236);
    text-decoration: none;
  }
`;
const MenuContainer = styled.nav`
  grid-area: n;
  background: linear-gradient(to right, rgb(87, 87, 148), pink);
  border-radius: 5px;
  padding: 5px;
`;

const activeStyles = {
  color: "brown"
};

export default Navbar;
