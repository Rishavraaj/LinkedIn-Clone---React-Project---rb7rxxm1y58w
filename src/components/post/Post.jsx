import React, { useState } from "react";
import "./post.css";
import { BsCardImage, BsFillCalendarEventFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import Displaypost from "../displaypost/Displaypost";

const Post = ({ email, password }) => {
  const [newPost, setnewPost] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem("likes")) || []
  );

  const handlePost = (e) => {
    e.preventDefault();
    const newData = {
      email: email,
      post: newPost,
      id: Date.now(),
    };
    setData([...data, newData]);
    localStorage.setItem("data", JSON.stringify([...data, newData]));
    setnewPost("");
  };

  const handleLike = (postId) => {
    const newLikes = { ...likes };
    if (newLikes[postId]) {
      if (newLikes[postId][email]) {
        return;
      } else {
        newLikes[postId][email] = 1;
        newLikes[postId]["total"] = newLikes[postId]["total"] + 1 || 1;
      }
    } else {
      newLikes[postId] = {};
      newLikes[postId][email] = 1;
      newLikes[postId]["total"] = 1;
    }
    setLikes(newLikes);
    localStorage.setItem("likes", JSON.stringify(newLikes));
  };
  return (
    <div className="mainpost_container">
      <div className="post_Container">
        <div className="posts">
          <div className="Post_img">{/* <img src="" alt="" /> */}</div>
          <div className="post_input">
            <form onSubmit={handlePost}>
              <input
                type="text"
                placeholder="Start a post"
                value={newPost}
                onChange={(e) => setnewPost(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="typesofPost">
          <div className="photo">
            <BsCardImage className="photo_logo" />
            <p>Photo</p>
          </div>
          <div className="video">
            <FaVideo className="video_logo" />
            <p>Video</p>
          </div>
          <div className="event">
            <BsFillCalendarEventFill className="event_logo" />
            <p>Event</p>
          </div>
          <div className="article">
            <RiArticleFill className="article_logo" />
            <p>Write Article</p>
          </div>
        </div>
      </div>
      {data.map((ele) => {
        return (
          <Displaypost
            key={ele.id}
            ele={ele.post}
            emaildata={ele.email}
            email={email}
            id={ele.id}
            data={data}
            password={password}
            handleLike={handleLike}
          />
        );
      })}
    </div>
  );
};

export default Post;
