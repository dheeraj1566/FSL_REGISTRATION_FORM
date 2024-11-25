import "./App.css";
import { useState } from "react";
import Modal from "./t&m_model.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function UserForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [otherCourse, setOtherCourse] = useState("");
  const [role, setRole] = useState("student");
  const [isChecked, setIsChecked] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [qualification, setQualification] = useState("");
  const [qualificationYear, setQualificationYear] = useState("");
  const [college, setCollege] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [localAddress, setLocalAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    aadharFront: "",
    aadharBack: "",
    laddress: "",
    paddress: "",
    fname: "",
    fphone: "",
    areYoua: "",
    qualification: "",
    qualificationYear: "",
    college: "",
    designation: "",
    company: "",
    Course: "",
    knowus: "",
    friendname: "",
    Terms_condition: false,
    password: "",
  });

  const handleAgree = () => {
    setTermsAccepted(true);
    closeModal();
  };

  const handleSubmit = async () => {
    console.log("Form data before submit:", formData); // Log current form data

    try {
      const response = await axios.post(
        "http://localhost:9090/createfsl",
        formData
      );
      alert("Form submitted successfully");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit form");
    }
  };

  const handleRadioChange = (event) => {
    setIsChecked(event.target.value === "Friend");
  };

  // const handleAgree = () => {
  //   setTermsAccepted(true); // Set the terms as accepted
  //   setShowModal(false); // Close the modal
  // };

  const handleInputChange = (event) => {
    setFriendName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsSameAddress(!isSameAddress); // Toggle the checkbox state
    if (!isSameAddress) {
      setPermanentAddress(localAddress); // Auto-fill Permanent Address
    } else {
      setPermanentAddress(""); // Clear Permanent Address if checkbox is unchecked
    }
  };

  const termsCondition = () => {
    console.log("Opening modal...");
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal...");
    setModalOpen(false);
  };

  const handleCourseChange = (e) => {
    const { value } = e.target;
    setSelectedCourse(value);

    if (value !== "other") {
      setOtherCourse("");
    }
  };

  // const handleTermsChange = (e) => {
  //   setTermsAccepted(e.target.checked);
  // };

  const handleInputChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div
              className="success-msg alert alert-success alert-dismissible fade hide"
              role="alert"
            >
              <strong>THANKS. Your registration is successful.</strong>
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="col-sm-12">
              <form
                className="registration-form mb-3"
                onSubmit={() => handleSubmit()}
                encType="multipart/form-data"
              >
                <div className="card">
                  <div className="card-header">Personal Details</div>
                  <div className="card-body">
                    <div className="form-group row">
                      <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChangeForm}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="email"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleInputChangeForm}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="phone"
                        className="col-sm-2 col-form-label"
                      >
                        Phone
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChangeForm}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label htmlFor="dob" className="col-sm-2 col-form-label">
                        Date of Birth
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="date"
                          className="form-control"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChangeForm}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="gender"
                        className="col-sm-2 col-form-label"
                      >
                        Gender
                      </label>
                      <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleInputChangeForm}
                            required
                          />
                          <label className="form-check-label" htmlFor="male">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleInputChangeForm}
                            required
                          />
                          <label className="form-check-label" htmlFor="female">
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                            checked={formData.gender === "other"}
                            onChange={handleInputChangeForm}
                            required
                          />
                          <label className="form-check-label" htmlFor="other">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="aadharFront"
                        className=" col-sm-2 col-form-label"
                      >
                        Aadhaar Card
                      </label>
                      <div className="col-sm-10 row">
                        <div className="col-sm-6">
                          <input
                            type="file"
                            className="form-control"
                            id="aadharFront"
                            name="aadharFront"
                            required
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="file"
                            className="form-control"
                            id="aadharBack"
                            name="aadharBack"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">Parent / Guardian Details</div>
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="fname"
                        className="col-sm-2 col-form-label"
                      >
                        Parent / Guardian Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="fname"
                          placeholder="Enter your parent / guardian name"
                          value={formData.fname}
                          onChange={handleInputChangeForm}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="fphone"
                        className="col-sm-2 col-form-label"
                      >
                        Parent / Guardian Phone
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="fphone"
                          name="fphone"
                          placeholder="Enter your parent / guardian phone number"
                          value={formData.fphone}
                          onChange={handleInputChangeForm}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">Residential Details</div>
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="laddress"
                        className="col-sm-2 col-form-label"
                      >
                        Local Address
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          className="form-control"
                          name="laddress"
                          id="laddress"
                          placeholder="Enter your local address (Where you stay in jaipur)"
                          value={localAddress}
                          onChange={(e) => setLocalAddress(e.target.value)}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="sameAddress"
                            checked={isSameAddress}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="sameAddress"
                          >
                            Permanent address is the same as local address
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="paddress"
                        className="col-sm-2 col-form-label"
                      >
                        Permanent Address
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          className="form-control"
                          name="paddress"
                          id="paddress"
                          placeholder="Enter your permanent address (address of your hometown)"
                          value={permanentAddress}
                          onChange={(e) => setPermanentAddress(e.target.value)}
                          readOnly={isSameAddress}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">Educational Details</div>
                  <div className="card-body">
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        Are you a:
                      </label>
                      <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            value="student"
                            onChange={handleRoleChange}
                            checked={role === "student"}
                            />
                          <label className="form-check-label">Student</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            value="workingProfessional"
                            checked={role === "workingProfessional"}
                            onChange={handleRoleChange}
                          />
                          <label className="form-check-label">
                            Working Professional
                          </label>
                        </div>
                      </div>
                    </div>

                    {role === "student" && (
                      <>
                        <div className="form-group row">
                          <label
                            htmlFor="qualification"
                            className="col-sm-2 col-form-label"
                          >
                            Last Attained Qualification
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="qualification"
                              name="qualification"
                              value={qualification}
                              onChange={(e) => setQualification(e.target.value)}
                              placeholder="Enter your qualification"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="qualificationYear"
                            className="col-sm-2 col-form-label"
                          >
                            Year
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="qualificationYear"
                              name="qualificationYear"
                              value={qualificationYear}
                              onChange={(e) =>
                                setQualificationYear(e.target.value)
                              }
                              placeholder="Enter your completion year"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="college"
                            className="col-sm-2 col-form-label"
                          >
                            College / University
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="college"
                              name="college"
                              value={college}
                              onChange={(e) => setCollege(e.target.value)}
                              placeholder="College / University"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {role === "workingProfessional" && (
                      <>
                        <div className="form-group row">
                          <label
                            htmlFor="designation"
                            className="col-sm-2 col-form-label"
                          >
                            Designation
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="designation"
                              name="designation"
                              value={designation}
                              onChange={(e) => setDesignation(e.target.value)}
                              placeholder="Enter your designation"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="company"
                            className="col-sm-2 col-form-label"
                          >
                            Company
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="company"
                              name="company"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              placeholder="Enter your company name"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">Course Details</div>
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="course"
                        className="col-sm-2 col-form-label"
                      >
                        Course
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-control"
                          name="course"
                          id="course"
                          value={selectedCourse}
                          onChange={handleCourseChange}
                          required
                        >
                          <option value="">Select a course</option>
                          <option value="advanced java">Advanced Java</option>
                          <option value="android">Android</option>
                          <option value="computer basics">
                            Computer Basics
                          </option>
                          <option value="core java">Core Java</option>
                          <option value="digital marketing">
                            Digital Marketing
                          </option>
                          <option value="full stack">
                            Full Stack Development
                          </option>
                          <option value="graphic design">Graphic Design</option>
                          <option value="node js">Node JS</option>
                          <option value="photoshop">Photoshop</option>
                          <option value="php">PHP</option>
                          <option value="python">Python</option>
                          <option value="react js">React JS</option>
                          <option value="web design">Web Design</option>
                          <option value="other">Other Course</option>
                        </select>
                      </div>
                    </div>
                    {selectedCourse === "other" && (
                      <div className="form-group row">
                        <label
                          htmlFor="otherCourse"
                          className="col-sm-2 col-form-label"
                        >
                          Enter your course
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            className="form-control"
                            id="otherCourse"
                            name="otherCourse"
                            placeholder="Enter the course name"
                            value={otherCourse}
                            onChange={(e) => setOtherCourse(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    )}
                    <div className="form-group row">
                      <label
                        htmlFor="referral"
                        className="col-sm-2 col-form-label"
                      >
                        How did you come to know about us?
                      </label>
                      <div className="col-sm-10">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="google"
                            value="Google"
                            required
                            onChange={handleRadioChange}
                          />
                          <label className="form-check-label" htmlFor="google">
                            Google
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="facebook"
                            value="Facebook"
                            required
                            onChange={handleRadioChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="facebook"
                          >
                            Facebook
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="instagram"
                            value="Instagram"
                            required
                            onChange={handleRadioChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="instagram"
                          >
                            Instagram
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="collegeTPO"
                            value="College TPO"
                            required
                            onChange={handleRadioChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="collegeTPO"
                          >
                            College TPO
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="friend"
                            value="Friend"
                            required
                            onChange={handleRadioChange}
                          />
                          <label className="form-check-label" htmlFor="friend">
                            Friend
                          </label>
                        </div>

                        {isChecked && (
                          <div>
                            <label>
                              Friend's Name:
                              <input
                                type="text"
                                value={friendName}
                                onChange={handleInputChange}
                                placeholder="Enter friend's name"
                              />
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-check form-check-inline">
                        <label className="switch">
                          <input
                            type="checkbox"
                            id="terms"
                            value="terms"
                            required
                            checked={termsAccepted}
                            onChange={termsCondition}
                          />
                          <span className="slider round"></span>
                        </label>
                        <label
                          className="form-check-label pl-2 text-muted"
                          htmlFor="terms"
                        >
                          By clicking submit, you agree to our {""}{" "}
                          <span
                            onClick={termsCondition}
                            style={{ color: "blue", cursor: "pointer" }}
                          >
                            Terms & Conditions
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <input
                        type="submit"
                        name="register"
                        className="btn btn-lg btn-primary btn-block"
                        value="Register"
                        disabled={!termsAccepted}
                      />
                    </div>
                  </div>
                </div>
              </form>

              {modalOpen && (
                <Modal
                  show={modalOpen}
                  onClose={closeModal}
                  onAgree={handleAgree}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserForm;