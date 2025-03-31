import React, { useState, useEffect } from "react";
import useUserData from "./crud/useUserData";
import api from "../api";

const Test = () => {
  const { userDetails, setUserDetails } = useUserData();
  const [detailsForm, setDetailsForm] = useState({
    profile_picture: "",
    file: null,
  });
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    if (userDetails) {
      setDetailsForm({
        profile_picture: userDetails.profile_picture || "",
        file: null,
      });
    }
  }, [userDetails]);

  // Handle file selection
  const handleDetailsChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const objectUrl = URL.createObjectURL(selectedFile);

      setDetailsForm((prev) => ({
        ...prev,
        profile_picture: objectUrl,
        file: selectedFile,
      }));
    }
  };

  // Handle profile picture update
  const handleDetailsUpdate = async () => {
    if (!detailsForm.file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("profile_picture", detailsForm.file);

    try {
      const response = await api.put("/api/profile/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setUserDetails((prev) => ({
          ...prev,
          profile_picture: response.data.profile_picture,
        }));
        setShowDetailsModal(false);
      } else {
        console.error("Failed to update profile picture", response);
      }
    } catch (error) {
      console.error("Error updating profile picture", error);
    }
  };

  return (
    <>
      {userDetails && (
        <div className="row align-items-center">
          <div className="col-md-9">
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 p-3 bg-light rounded shadow-sm">
              {detailsForm.profile_picture && (
                <div className="mt-2">
                  <img
                    src={detailsForm.profile_picture}
                    alt="Profile"
                    className="rounded-circle shadow"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 text-md-center mt-3 mt-md-0">
            <button
              className="btn btn-success px-4 py-2 fw-bold shadow"
              onClick={() => setShowDetailsModal(true)}
            >
              Update Profile Picture
            </button>
          </div>
        </div>
      )}

      {showDetailsModal && (
        <div className="modal show d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Profile Picture</h5>
                <button type="button" className="btn-close" onClick={() => setShowDetailsModal(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="file"
                  name="profile_picture"
                  className="form-control mb-2"
                  accept="image/*"
                  onChange={handleDetailsChange}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowDetailsModal(false)}>
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleDetailsUpdate}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Test;