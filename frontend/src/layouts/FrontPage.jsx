import React from 'react';
import { Link } from 'react-router-dom'; // Added missing Link import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ai_wall_1 from '../assets/ai-wall-1.jpg';
import ai_wall_2 from '../assets/ai-wall-2.jpg';

const FrontPage = () => {
    return (
        <>
            <section
                className="vh-100 d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${ai_wall_2})`,
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
                                    <div className="d-flex justify-content-center align-items-center mb-4">
                                        <FontAwesomeIcon icon={faCubes} className="fa-2x me-2" style={{ color: "#ff6219" }} />
                                        <span className="h1 fw-bold">Logo</span>
                                    </div>

                                    <div className="card">
                                        <div className="card-body">
                                            <div className='my-4'>
                                                <Link to="/login" className="btn btn-success w-100 shadow"> Login here</Link>
                                            </div>
                                            <div className='my-4'>
                                                <Link to="/register" className="btn btn-primary w-100 shadow"> Register here</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className='mt-3'>Read More</h2>
                                    <div className="d-flex justify-content-center ">
                                        <div className="d-flex align-items-center justify-content-center rounded-circle shadow-lg"
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                backgroundColor: "#ff6219"
                                            }}>
                                            <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", fontSize: "24px" }} />
                                        </div>
                                    </div>
                                    <p className='mt-2' style={{fontSize:"10px"}}>Click the Arrow or scroll the page</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FrontPage;
