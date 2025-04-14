import React, { useState } from "react";

function Test() {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [text, setText] = useState(""); 
  const [formData, setFormData] = useState({ image: null, text: "", imageName: "" }); 
  const [submittedData, setSubmittedData] = useState(null); 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); 
      setImageName(file.name);
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDetails = { image, text, imageName };
    setFormData(formDetails); 
    setSubmittedData(formDetails); 
    console.log("Form Submitted:", formDetails);
  };

  return (
    <div>
      <h2>Upload Image and Enter Text</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter some text"
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Submit</button>
      </form>



      {/* Display Submitted Data */}
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p><strong>Text:</strong> {submittedData.text}</p>
          <p><strong>Image Name:</strong> {submittedData.imageName}</p>
          {submittedData.image && (
            <img
              src={URL.createObjectURL(submittedData.image)} // Display image from the submitted data
              alt="Submitted Preview"
              style={{ width: "300px", marginTop: "20px" }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Test;
