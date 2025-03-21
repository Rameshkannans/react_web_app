import useUserData from "../../components/crud/useUserData";

const Profile = () => {
  const { user, userDetails } = useUserData();

  return (
    <div className="my-5">
      {user && (
        <>
          <h3>Welcome, {user.username}!</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>First Name:</strong> {user.first_name}</p>
          <p><strong>Last Name:</strong> {user.last_name}</p>
        </>
      )}

      <hr />

      {userDetails && (
        <div className="my-5">
          <p><strong>Phone Number:</strong> {userDetails.phone_number}</p>
          <p><strong>Created At:</strong> {new Date(userDetails.created_at).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(userDetails.updated_at).toLocaleString()}</p>
          {userDetails.profile_picture && (
            <div>
              <strong>Profile Picture:</strong><br />
              <img
                src={userDetails.profile_picture}
                alt="Profile"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
