import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5000/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess(true);
                setTimeout(() => navigate("/login"), 2000); // Navigate to "/products" after 2 seconds
            } else {
                setError(data.message || "Registration failed. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header text-center bg-primary text-white">
                            <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        className="form-control"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Register
                                </button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <p>
                                Already have an account?{" "}
                                <a href="/login" className="text-primary">
                                    Login here
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {success && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="successModalLabel"
                    aria-hidden="true"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="successModalLabel">
                                    Registration Successful
                                </h5>
                            </div>
                            <div className="modal-body">
                                Your account has been successfully created. You will be redirected to the products page shortly.
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => navigate("/products")}
                                >
                                    Go to Products Page
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
