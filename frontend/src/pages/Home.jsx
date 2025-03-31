import { useState, useEffect } from "react";
import "../styles/Home.css";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ai_wall_1 from '../assets/ai-wall-1.jpg';
import ai_wall_2 from '../assets/ai-wall-2.jpg';
import ai_wall_3 from '../assets/ai-wall-3.jpg';
import { FaHome, FaUser, FaCog, FaBars, FaSignOutAlt, FaBell, FaEnvelope } from 'react-icons/fa';

import useUserData from "../components/crud/useUserData";

function Home() {
    const { user, userDetails } = useUserData();


    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <main style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundImage: `url(${ai_wall_2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}>


                {/* mobile menu */}
                {isMobile && (
                    <nav className="navbar navbar-dark bg-primary p-2 fixed-top d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={() => toggleMenu("sidebar")}> <FaBars /> </button>
                        <span className="text-white">Top Menu</span>
                        <button className="btn btn-primary" onClick={() => toggleMenu("notification")}> <FaBell /> </button>
                    </nav>
                )}

                {activeMenu === "sidebar" && isMobile && (
                    <div className="bg-secondary text-white p-3 position-absolute w-100" style={{ top: '56px', zIndex: 1000 }}>
                        <ul className="list-unstyled">
                            <li className="mb-3" onClick={() => setActiveMenu(null)}>
                                <Link to="/dashboard" className="text-white text-decoration-none d-flex align-items-center">
                                    <FaHome className="me-2" /> Home
                                </Link>
                            </li>
                            <li className="mb-3" onClick={() => setActiveMenu(null)}>
                                <Link to="/profile" className="text-white text-decoration-none d-flex align-items-center">
                                    <FaUser className="me-2" /> Profile
                                </Link>
                            </li>
                            <li className="mb-3" onClick={() => setActiveMenu(null)}>
                                <Link to="/activity" className="text-white text-decoration-none d-flex align-items-center">
                                    <FaUser className="me-2" /> Activity
                                </Link>
                            </li>
                            <li className="mb-3" onClick={() => setActiveMenu(null)}>
                                <Link to="/curd" className="text-white text-decoration-none d-flex align-items-center">
                                    <FaCog className="me-2" /> CURD
                                </Link>
                            </li>
                            <li className="mb-3" onClick={() => setActiveMenu(null)}>
                                <Link to="/logout" className="btn btn-danger text-decoration-none d-flex align-items-center">
                                    <FaSignOutAlt className="me-2" /> Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

                {activeMenu === "notification" && isMobile && (
                    <div className="bg-light text-dark p-3 position-absolute w-100" style={{ top: '56px', zIndex: 1000 }}>
                        <h5>Apps</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link to="/notifications" className="text-dark text-decoration-none d-flex align-items-center">
                                    <FaBell className="me-2" /> Learning
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/messages" className="text-dark text-decoration-none d-flex align-items-center">
                                    <FaEnvelope className="me-2" /> Blogs
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/settings" className="text-dark text-decoration-none d-flex align-items-center">
                                    <FaCog className="me-2" /> E-Commerce
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}


                {/* desktop menu */}
                <div className="d-flex">
                    {!isMobile && (
                        <div className="card bg-transparent shadow-lg text-white mx-5 p-3 d-none d-md-block" style={{ minHeight: '70vh', width: '18%', position: 'fixed', top: '40px', marginTop: '40px', borderRadius: '20px', backdropFilter: 'blur(2px)' }}>
                            <div className="text-center">
                                <img
                                    src={userDetails?.profile_picture ? userDetails.profile_picture : ai_wall_1}
                                    className="img-fluid"
                                    alt="Profile"
                                    style={{ width: "200px", height: "200px", borderRadius: "20px" }}
                                />
                            </div>

                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <Link to="/dashboard" className="text-dark text-decoration-none d-flex align-items-center">
                                            <FaHome className="me-2" /> Home
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/profile" className="text-dark text-decoration-none d-flex align-items-center">
                                            <FaUser className="me-2" /> Profile
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/activity" className="text-dark text-decoration-none d-flex align-items-center">
                                            <FaUser className="me-2" /> Activity
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/curd" className="text-dark text-decoration-none d-flex align-items-center">
                                            <FaCog className="me-2" /> CURD
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/logout" className="btn btn-danger text-decoration-none d-flex align-items-center">
                                            <FaSignOutAlt className="me-2" /> Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {!isMobile && (
                        <div className="card shadow-lg bg-transparent text-dark p-3" style={{ backdropFilter: 'blur(2px)', minHeight: '30vh', width: '15%', position: 'fixed', right: '20px', top: '40px', marginTop: '40px' }}>
                            <h5>Apps</h5>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <Link to="/notifications" className="text-dark text-decoration-none d-flex align-items-center">
                                        <FaBell className="me-2" /> Learning
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/messages" className="text-dark text-decoration-none d-flex align-items-center">
                                        <FaEnvelope className="me-2" /> Blogs
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="/settings" className="text-dark text-decoration-none d-flex align-items-center">
                                        <FaCog className="me-2" /> E-Commerce
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="p-4 flex-grow-1" style={{ marginLeft: isMobile ? '0' : '22%', marginRight: isMobile ? '0' : '16%', marginTop: '56px' }}>
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default Home;
