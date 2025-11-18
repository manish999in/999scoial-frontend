import React, { useEffect, useState } from "react";
import './usersuggestion.css'

function UserSuggestion() {
    const [user, setUser] = useState([]);
    const [follow, setFollow] = useState(null);

    const getUSer = async (_id) => {
        const token = localStorage.getItem("token");
        const res = await fetch("https://nine99social.onrender.com/api/users", {
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        console.log(data.users);
        setUser(data.users);
    };


    //   /api/users/:id/followers	

    const userFollow = async (_id) => {
        const token = localStorage.getItem("token");

        const res = await (`https://nine99social.onrender.com/api/:${_id}/follow`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        const data = await res.json;
        console.log("User clicked: ", data);
    }


    useEffect(() => {
        getUSer();
    }, []);

    return (
        <div className="mt-3">

            {user.map((u) => (
                <div
                    key={u._id}
                    className="d-flex align-items-center justify-content-between p-3 mb-3 rounded-4 shadow-sm bg-white suggestion-card"
                >
                    {/* LEFT SIDE */}
                    <div className="d-flex align-items-center">

                        {/* PROFILE PIC */}
                        <img
                            src={u.profilePic}
                            alt={u.name}
                            className="rounded-circle me-3"
                            style={{
                                width: "55px",
                                height: "55px",
                                objectFit: "cover",
                                border: "2px solid #eee",
                            }}
                        />

                        {/* NAME + USERNAME + BIO */}
                        <div>
                            <h6 className="mb-0 fw-bold">{u.name}</h6>
                            <small className="text-muted">@{u.username}</small>
                            <p className="text-muted mb-0 small mt-1">{u.bio}</p>
                        </div>
                    </div>

                    {/* FOLLOW BUTTON */}
                    <button
                        className="btn btn-follow px-4 fw-semibold"
                        onClick={() => userFollow(u._id)}
                    >
                        Follow
                    </button>

                </div>
            ))}
        </div>
    );
}

export default UserSuggestion;
