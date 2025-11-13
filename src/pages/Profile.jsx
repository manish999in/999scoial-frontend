import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [post, setPost] = useState([]);

  const token = localStorage.getItem("token");

  const userProfile = async () => {
    try {
      const res = await fetch("https://nine99social.onrender.com/api/auth/me", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUser(data.user);
      console.log("User Profile:", data.user);
    } catch (error) {
      console.error("Profile error is ", error);
    } finally {
      setLoading(false);
    }
  };

  const userPost = async (userId) => {
    const res = await fetch(`https://nine99social.onrender.com/api/posts/user/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log('userPost', data);
    setPost(data.posts)

  }



  useEffect(() => {
    userProfile();
  }, []);

  useEffect(() => {
    if (user?._id) {
      userPost(user._id);
    }
  }, [user]);

  // Loading screen
  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  // If user still null (token invalid)
  if (!user) {
    return <div className="loader">Failed to load profile</div>;
  }

  return (
    <div className="profile-container">

      {/* Cover Section */}
      <div className="profile-cover">
        <img
          src={user?.coverPic || "/default-cover.jpg"}
          alt="Cover"
          className="cover-img"
        />
      </div>

      {/* Profile Main Section */}
      <div className="profile-main">

        <div className="profile-avatar">
          <img
            src={user?.profilePic || "/default-profile.png"}
            alt="Profile"
            className="profile-img"
          />
        </div>

        <div className="profile-info">
          <h2 className="profile-name">{user?.name || "Unknown User"}</h2>
          <p className="profile-username">@{user?.username || "username"}</p>
          <p className="profile-bio">{user?.bio || "No bio added yet."}</p>

          {/* Followers / Following */}
          <div className="profile-stats">
            <div>
              <strong>{user?.followers?.length || 0}</strong>
              <span>Followers</span>
            </div>
            <div>
              <strong>{user?.following?.length || 0}</strong>
              <span>Following</span>
            </div>
          </div>

          <button className="edit-btn">Edit Profile</button>
        </div>

      </div>

      {/* Posts Grid Section */}
      <div className="profile-posts">
        <h3 className="section-title">Posts</h3>
        <div className="posts-grid">

          {post.length > 0 ? (
            post.map((userpost) => (
              <div key={userpost._id} className="post-card">
                <img
                  src={userpost.imageUrl}
                  alt="Post"
                  loading="lazy"
                />
              </div>
            ))
          ) : (<p>Post Not Found</p>)}

        </div>
      </div>

    </div>
  );
};

export default Profile;
