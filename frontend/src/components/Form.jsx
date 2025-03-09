import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

const Form = ({ route, method }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const isLogin = method === "Login";
    const formTitle = isLogin ? "Login" : "Register";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = isLogin
            ? { username, password }
            : { username, password, email, first_name: firstName, last_name: lastName };

        try {
            const res = await api.post(route, formData);

            if (isLogin) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/dashboard");
            } else {
                navigate("/login");
            }
        } catch (error) {
            alert(error.response?.data?.detail || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{formTitle}</h1>

            {!isLogin ? (
                <>
                    {/* First Row - First Name */}
                    <div className="form-row">
                        <input
                            className="form-input"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            required
                        />
                        <input
                            className="form-input"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            required
                        />
                    </div>

                    {/* Second Row - Last Name and Email */}
                    <div className="form-row">
                        <input
                            className="form-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>

                    {/* Third Row - Username and Password */}
                    <div className="form-row">
                        <input
                            className="form-input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <input
                            className="form-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                </>
            ) : (
                /* Login Form - Single Column */
                <>
                    <input
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </>
            )}

            {/* Show loading indicator while processing */}
            {/* {loading && <LoadingIndicator />} */}

            <button className="form-button btn btn-primary" type="submit" disabled={loading}>
                <div className="d-flex">
                    <div>
                        {formTitle}
                    </div>
                    {loading &&
                        <div className="ms-2">
                            {loading && <LoadingIndicator />}
                        </div>
                    }
                </div>
            </button>
        </form>
    );
};

export default Form;