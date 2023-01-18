import React, { useState } from "react";
import "./displaypost.css";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDots, BiRepost } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import Comment from "../commentSection/Comment";

const Displaypost = ({ ele, email, emaildata, handleLike, id }) => {
  const likes = JSON.parse(localStorage.getItem("likes")) || {};

  const totalLikes = likes[id] ? likes[id]["total"] : 0;
  console.log(totalLikes);

  const [showComments, setshowComments] = useState(false);

  const handleCommentClick = () => {
    setshowComments(!showComments);
  };

  return (
    <div className="display_container">
      <div className="Displaypost_container">
        <div className="profilepost_container"></div>
        <div className="name_comainter">
          <p>{emaildata}</p>
          <p>{emaildata}</p>
        </div>
      </div>
      <div className="post_content">
        <h1>{ele}</h1>
      </div>
      <div className="socials">
        <div className="like" onClick={() => handleLike(id)}>
          <AiOutlineLike />
          <p>like {totalLikes}</p>
        </div>
        <div className="comment" onClick={handleCommentClick}>
          <BiCommentDots />
          <p>Comment</p>
        </div>
        <div className="repost">
          <BiRepost />
          <p>repost</p>
        </div>
        <div className="share">
          <FiSend />
          <p>Share</p>
        </div>
      </div>
      {showComments && <Comment postId={id} CommentBy={email} />}
    </div>
  );
};

export default Displaypost;
