import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaUser, FaCog, FaBars } from 'react-icons/fa';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary p-2">
        <button className="btn btn-primary d-md-none" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <span className="text-white ms-3">Top Menu</span>
      </nav>
      {isOpen && (
        <div className="bg-secondary text-white p-3 d-md-none" style={{ width: '100%', position: 'absolute', zIndex: 1000 }}>
          <ul className="list-unstyled">
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <FaHome className="me-2" /> Home
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <FaUser className="me-2" /> Profile
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <FaCog className="me-2" /> Settings
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="d-flex">
        <div className="bg-dark text-white p-3 d-none d-md-block" style={{ minHeight: '100vh', width: '15%', position: 'fixed' }}>
          <ul className="list-unstyled">
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <FaHome className="me-2" /> Home
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <FaUser className="me-2" /> Profile
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <FaCog className="me-2" /> Settings
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 flex-grow-1" style={{ marginLeft: '15%' }}>
          <h1>Content Area</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
}

export default Test;