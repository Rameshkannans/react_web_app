import { useState, useEffect } from "react";
import useUserData from "../../components/crud/useUserData";
import updateUserData from "../../components/crud/updateUserData";
import axios from "axios";

const Profile = () => {
  const { user, userDetails } = useUserData();

  const { updateUser, updateUserDetails } = updateUserData();

  const [showUserModal, setShowUserModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // ======================================================================

  const [userForm, setUserForm] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  // Update state when user data is available
  useEffect(() => {
    if (user) {
      setUserForm({
        username: user.username || "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleUserChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };
  const handleUserUpdate = () => {
    updateUser(userForm);
    setShowUserModal(false);
  };

  // ==================================================
  const [detailsForm, setDetailsForm] = useState({
    phone_number: '',
    profile_picture: null
  });

  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDetailsForm((prev) => ({ ...prev, profile_picture: file }));
    }
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetailsForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('phone_number', detailsForm.phone_number);

    if (detailsForm.profile_picture) {
      formData.append('profile_picture', detailsForm.profile_picture);
    }

    try {
      // await axios.put(`http://127.0.0.1:8000/api/profile/`, formData, {
      //   headers: { 'Content-Type': 'multipart/form-data' }
      // });
      updateUserDetails(formData)
      setShowDetailsModal(false);
      setError("");
    } catch (error) {
      setError("Failed to update details. Please try again.");
      console.error("Error updating details:", error);
    }
  };

  return (
    <div>
      <div className="card shadow-lg bg-transparent p-4 rounded-lg" style={{ backdropFilter: "blur(2px)" }}>
        {user && (
          <div>
            <div className="row mb-3">
              <div className="col-md-12 text-center">
                <h5 className="text-primary fw-bold">Welcome: {user.username}</h5>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-9">
                <div className="d-flex flex-wrap gap-4 p-3 bg-light rounded shadow-sm">
                  <div className="px-3 py-2 border rounded bg-white shadow-sm">
                    <strong className="text-secondary">First Name:</strong> {user.first_name}
                  </div>
                  <div className="px-3 py-2 border rounded bg-white shadow-sm">
                    <strong className="text-secondary">Last Name:</strong> {user.last_name}
                  </div>
                  <div className="px-3 py-2 border rounded bg-white shadow-sm">
                    <strong className="text-secondary">Email:</strong> {user.email}
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-md-center mt-3 mt-md-0">
                <button className="btn btn-success px-4 py-2 fw-bold shadow" onClick={() => setShowUserModal(true)}>
                  Update User Profile
                </button>
              </div>
            </div>
          </div>
        )}

        <hr />

        {userDetails && (
          <div>
            <div className="row align-items-center">
              <div className="col-md-9">
                <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 p-3 bg-light rounded shadow-sm">
                  {userDetails.profile_picture && (
                    <div className="mt-2">
                      <img src={userDetails.profile_picture} alt="Profile" className="rounded-circle shadow" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                    </div>
                  )}
                  <div className="text-center">
                    <div className="px-3 py-2 border rounded bg-white shadow-sm">
                      <strong className="text-secondary">Phone Number:</strong> {userDetails.phone_number}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-md-center mt-3 mt-md-0">
                <button className="btn btn-success px-4 py-2 fw-bold shadow" onClick={() => setShowDetailsModal(true)}>
                  Update User Details Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* User Update Modal */}
      {showUserModal && (
        <div className="modal show d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update User Profile</h5>
                <button type="button" className="btn-close" onClick={() => setShowUserModal(false)}></button>
              </div>
              <div className="modal-body">
                <input type="text" name="username" className="form-control mb-2" placeholder="Username" value={userForm.username} onChange={handleUserChange} />
                <input type="text" name="first_name" className="form-control mb-2" placeholder="First Name" value={userForm.first_name} onChange={handleUserChange} />
                <input type="text" name="last_name" className="form-control mb-2" placeholder="Last Name" value={userForm.last_name} onChange={handleUserChange} />
                <input type="email" name="email" className="form-control mb-2" placeholder="Email" value={userForm.email} onChange={handleUserChange} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowUserModal(false)}>Close</button>
                <button className="btn btn-primary" onClick={handleUserUpdate}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Details Update Modal */}
      {showDetailsModal && (
        <div className="modal show d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update User Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDetailsModal(false)}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  {error && <div className="alert alert-danger">{error}</div>}
                  <input
                    type="file"
                    name="profile_picture"
                    className="form-control mb-2"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <input
                    type="text"
                    name="phone_number"
                    className="form-control mb-2"
                    placeholder="Phone Number"
                    value={detailsForm.phone_number}
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowDetailsModal(false)}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
