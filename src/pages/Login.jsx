import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const Navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault(); // stop form refresh
        console.log("username: ", username, "password: ", password);

        try {
            const loginApi = await fetch('https://nine99social.onrender.com/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
            })

            const data = await loginApi.json();
            console.log("Response:", data);

            // agar login sahi hua to token save + redirect
            if (data?.token) {
                localStorage.setItem("token", data.token);
                Navigate('/dashboard')
                // navigate to dashboard page
                // window.location.href = "/dashboard";
            } else {
                alert(data?.message || "Invalid Credentials");
            }

        } catch (error) {
            console.log("Error:", error);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h3 className="text-center mb-4 text-primary fw-bold">Welcome Back 👋</h3>

                <form onSubmit={login}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label fw-semibold">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary fw-semibold">
                            Login
                        </button>
                    </div>
                </form>

                <p className="text-center mt-3 mb-0 text-muted">
                    Don’t have an account? <Link to='/signup' className="text-decoration-none">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
