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
    <div className="d-flex flex-column align-items-center">
      {posts.map((post) => (
        <div key={post._id} className="card post-card mb-4">
          {/* Header */}
          <div className="card-header d-flex align-items-center">
            <img
              src={post.user.profilePic}
              alt="Profile"
              className="rounded-circle me-2"
            />
            <div>
              <strong>{post.user.username}</strong>
              <p className="mb-0 text-muted location">{post.location}</p>
            </div>
          </div>

          {/* Image */}
          {post.mediaType === "image" && (
            <img
              src={post.imageUrl}
              alt="Post"
              className="card-img-top post-img"
            />
          )}

          {/* Actions */}
          <div className="card-body">
            <div className="mb-2">
              <i className={icon.heart + " me-3"}></i>
              <i className={icon.remark + " me-3"}></i>
              <i className="fa-solid fa-paper-plane"></i>
            </div>

            {/* Content */}
            <p className="mb-1">
              <strong>{post.user.username}</strong> {post.content}
            </p>
            <p className="text-muted">{post.description}</p>

            {/* Tags */}
            <div>
              {post.tags.map((tag) => (
                <span key={tag} className="text-primary me-2">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="d-flex justify-content-between mt-2 text-muted stats">
              <span>❤️ {post.likes.length} Likes</span>
              <span>💬 {post.comments.length} Comments</span>
            </div>

            {/* Date */}
            <p className="text-end text-muted date">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
