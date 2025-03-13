import { useState } from "react";
import "../styles/Home.css";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaUser, FaCog, FaBars } from 'react-icons/fa';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Fixed Navbar */}
            <nav className="navbar navbar-dark bg-primary p-2 fixed-top">
                <button className="btn btn-primary d-md-none" onClick={toggleSidebar}>
                    <FaBars />
                </button>
                <span className="text-white ms-3">Top Menu</span>
            </nav>

            {/* Sidebar for mobile view */}
            {isOpen && (
                <div className="bg-secondary text-white p-3 d-md-none" style={{ width: '100%', position: 'absolute', top: '56px', zIndex: 1000 }}>
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <Link to="/dashboard" className="text-white text-decoration-none d-flex align-items-center">
                                <FaHome className="me-2" /> Home
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/profile" className="text-white text-decoration-none d-flex align-items-center">
                                <FaUser className="me-2" /> Profile
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/curd" className="text-white text-decoration-none d-flex align-items-center">
                                <FaCog className="me-2" /> CURD
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/logout" className="btn btn-danger text-decoration-none d-flex align-items-center">
                                <FaCog className="me-2" /> Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Sidebar for desktop view */}
            <div className="d-flex">
                <div className="bg-dark text-white p-3 d-none d-md-block" style={{ minHeight: '100vh', width: '15%', position: 'fixed', top: '40px' }}>
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <Link to="/dashboard" className="text-white text-decoration-none d-flex align-items-center">
                                <FaHome className="me-2" /> Home
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/profile" className="text-white text-decoration-none d-flex align-items-center">
                                <FaUser className="me-2" /> Profile
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/curd" className="text-white text-decoration-none d-flex align-items-center">
                                <FaCog className="me-2" /> CURD
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/logout" className="btn btn-danger text-decoration-none d-flex align-items-center">
                                <FaCog className="me-2" /> Logout
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="p-4 flex-grow-1" style={{ marginLeft: '15%', marginTop: '56px' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Home;