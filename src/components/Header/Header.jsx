import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImg src="https://simg.nicepng.com/png/small/50-501551_stadium-com-photography-icon-photography-logo-icon-png.png" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 1200px;
  grid-area: h;
  background-color: rgb(170, 111, 180);
  border-radius: 5px;
  opacity: 0.8;
`;

const HeaderImg = styled.img`
  width: 70px;
  height: 60px;
  border-radius: 5px;
`;

export default Header;
