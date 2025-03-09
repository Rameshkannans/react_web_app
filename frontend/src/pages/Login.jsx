import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import ai_wall_1 from '../assets/ai-wall-1.jpg';
import Form from '../components/Form';
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <section
        className="vh-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${ai_wall_1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container bg-transparent">
          <div className="card shadow-lg bg-transparent" style={{ borderRadius: "1rem", maxWidth: "800px", margin: "auto", backdropFilter: "blur(5px)" }}>
            <div className="row g-0">
              <div className="col-md-6 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  className="img-fluid w-100 h-100"
                  style={{ borderRadius: "1rem 0 0 1rem", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 p-0 d-flex my-5">
                <div className="card-body text-center">
                  {/* <div className="d-flex justify-content-center align-items-center mb-4">
                    <FontAwesomeIcon icon={faCubes} className="fa-2x me-2" style={{ color: "#ff6219" }} />
                    <span className="h1 fw-bold">Logo</span>
                  </div> */}

                  <Form route="/api/token/" method="Login" />

                  <p className="mt-3" style={{ color: "#393f81" }}>
                    Don't have an account?
                    <Link to="/register" style={{ color: "#393f81", marginLeft: "5px" }}> Register here</Link>
                  </p>
                  <Link to="/" className='btn btn-light' >Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;