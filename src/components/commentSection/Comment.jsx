import React, { useState } from "react";
import "./comment.css";

const Comment = ({ postId, CommentBy }) => {
  const [comment, setComment] = useState(
    JSON.parse(localStorage.getItem(`post-${postId}-comments`)) || []
  );
  const [newComment, setnewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment([
      ...comment,
      {
        id: comment.length + 1,
        postId: postId,
        comment: newComment,
        commentedBy: CommentBy,
        createdAt: new Date(),
      },
    ]);
    localStorage.setItem(`post-${postId}-comments`, JSON.stringify(comment));
    setnewComment("");
  };

  return (
    <div className="comment_container">
      <div className="comment_div">
        <div className="comment_profile"></div>
        <div className="comment_input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setnewComment(e.target.value)}
            />
          </form>
        </div>
      </div>
      {comment.map((comments) => {
        return (
          <div className="comments">
            <div className="commetorDetails">
              <p>{comments.commentedBy}</p>
            </div>
            <div className="comment_content">
              <p>{comments.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
