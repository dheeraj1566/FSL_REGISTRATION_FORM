import React, { useState } from "react";

function ReferralForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [friendName, setFriendName] = useState("");

  const handleRadioChange = (event) => {
    // Agar selected radio button 'Friend' hai toh isChecked ko true karein, warna false
    setIsChecked(event.target.value === "Friend");
  };

  const handleInputChange = (event) => {
    setFriendName(event.target.value);
  };

  return (
    <div className="form-group row">
      <label htmlFor="referral" className="col-sm-2 col-form-label">
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
          <label className="form-check-label" htmlFor="facebook">
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
          <label className="form-check-label" htmlFor="instagram">
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
          <label className="form-check-label" htmlFor="collegeTPO">
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

        {/* Agar 'Friend' selected hai toh yeh input field dikhegi */}
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
  );
}

export default ReferralForm;