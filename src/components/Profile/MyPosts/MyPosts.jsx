import React from "react";
import styled from "styled-components";
import Post from "./Post/Post";
import { addPost } from "../../redux/state";

const MyPosts = (props) => {
  const i18n = {
    textArea: <textarea></textarea>,
    button: <button>add post</button>,
    myPosts: "My posts"
  };

  let postsElements = props.state.posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <ItemContainer>{i18n.myPosts}</ItemContainer>
      <div ref={newPostElement}>{i18n.textArea}</div>
      <div
        onClick={() => {
          addPost();
        }}
      >
        {i18n.button}
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

const ItemContainer = styled.div`
  color: rgb(28, 79, 88);
  padding: 5px;
`;

export default MyPosts;
