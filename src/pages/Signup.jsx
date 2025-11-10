import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [coverPic, setCoverPic] = useState(null);

    const userRegstration = async (e) => {
        e.preventDefault(); // page reload rokega

        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('age', age);
        formData.append('gender', gender);
        formData.append('bio', bio);
        if (profilePic) formData.append('profilePic', profilePic);
        if (coverPic) formData.append('coverPic', coverPic);

        try {
            const res = await fetch('https://nine99social.onrender.com/api/auth/signup', {
                method: 'POST',
                body: formData, // JSON nahi
            });

            const result = await res.json();
            console.log(result);
            alert('Sign Up Successful!');
        } catch (err) {
            console.error(err);
            alert('Sign Up Failed!');
        }
    };

    return (
        <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="card shadow-lg p-5 rounded-4" style={{ background: '#f8f9fa' }}>
                            <h2 className="text-center mb-4 fw-bold text-primary">Create an Account</h2>

                            <form className="row g-3" autoComplete='off' onSubmit={userRegstration}>
                                {/* Name, Username, Email, Password, Age, Gender */}
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                                        <label>Name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                        <label>Username</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                        <label>Email</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                        <label>Password</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                                        <label>Age</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select" onChange={(e) => setGender(e.target.value)}>
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <label>Gender</label>
                                    </div>
                                </div>

                                {/* Profile Pic */}
                                <div className="col-md-6">
                                    <label className="form-label">Profile Picture</label>
                                    <input type="file" className="form-control" onChange={(e) => setProfilePic(e.target.files[0])} />
                                </div>

                                {/* Cover Pic */}
                                <div className="col-md-6">
                                    <label className="form-label">Cover Picture</label>
                                    <input type="file" className="form-control" onChange={(e) => setCoverPic(e.target.files[0])} />
                                </div>

                                {/* Bio */}
                                <div className="col-12">
                                    <textarea className="form-control" placeholder="Bio" onChange={(e) => setBio(e.target.value)} style={{ height: '100px' }}></textarea>
                                </div>

                                <div className="col-12 d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg fw-bold shadow-sm">Sign Up</button>
                                    <p className="mt-2 text-center">
                                        Already have an account? <Link to="/" className="text-primary fw-bold">Login</Link>
                                    </p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
