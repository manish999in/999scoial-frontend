import React, { useEffect, useState } from "react";
import icon from "../utils/icons";
import "./Post.css";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch("https://nine99social.onrender.com/api/posts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, []);

  return (
    <div className="post-container">
      {posts.map((post) => (
        <div key={post._id} className="post-card">

          {/* Header */}
          <div className="post-header">
            <img src={post.user.profilePic} alt="Profile" className="profile-pic" />
            <div>
              <strong>{post.user.username}</strong>
              <p className="location">{post.location}</p>
            </div>
          </div>

          {/* Post Image */}
          {post.mediaType === "image" && (
            <img src={post.imageUrl} alt="Post" className="post-img" />
          )}

          {/* Actions */}
          <div className="actions">
            <i className={icon.heart}></i>
            <i className={icon.remark}></i>
            <i className="fa-solid fa-paper-plane"></i>
          </div>

          {/* Content */}
          <div className="post-content">
            <p><strong>{post.user.username}</strong> {post.content}</p>
            <p className="description">{post.description}</p>

            {/* Tags */}
            <div className="tags">
              {post.tags?.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>

            {/* Stats */}
            <div className="stats">
              <span>❤️ {post.likes.length} Likes</span>
              <span>💬 {post.comments.length} Comments</span>
            </div>

            {/* Date */}
            <p className="date">{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
