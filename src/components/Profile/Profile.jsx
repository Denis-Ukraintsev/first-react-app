import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
import styled from "styled-components";

const Profile = (props) => {
  const i18n = {
    description: "ava + description"
  };
  let postsElements = props.state.posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ));

  return (
    <div>
      <ProfileInfo />
      <ItemContainer>{i18n.description}</ItemContainer>
      <MyPosts />
      {postsElements}
    </div>
  );
};

const ItemContainer = styled.div`
  color: rgb(23, 88, 104);
  padding: 5px;
`;

export default Profile;
