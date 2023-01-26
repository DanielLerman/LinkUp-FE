import React, { useState, useContext } from "react";
// import axios from 'axios';
import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faUnlockAlt,
  faUser,
  faUtensils,
  faGraduationCap,
  faBriefcase,
  faCat,
  faDog,
  faTransgender,
  faSmoking,
  faLanguage,
  faCalendar,
  faWineBottle,
  faChild,
  faPrayingHands,
} from "@fortawesome/free-solid-svg-icons";
// import context for information for users

import "./Settings.css";

export default function Settings() {
  const [user] = useState({
    email: "",
    password: "",
    username: "",
    age: "",
    diet: "",
    drinks: "",
    education: "",
    ethnicity: "",
    job: "",
    religion: "",
    cats: "",
    dogs: "",
    sex: "",
    smokes: "",
    languages: "",
  });
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const tokenLocal = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    email: user.email,
    password: "",
    confirmPassword: "",
    username: user.username,
    age: user.age,
    diet: user.diet,
    drinks: user.drinks,
    education: user.education,
    ethnicity: user.ethnicity,
    job: user.job,
    religion: user.religion,
    cats: user.cats,
    dogs: user.dogs,
    sex: user.sex,
    smokes: user.smokes,
    languages: user.languages,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
    });
    const requestOptions = {
      method: "PUT",
      token: tokenLocal,
      user: { ...formData },
    };
    axios.put(`http://localhost:8080/user/${user.id}`, requestOptions)
      .then((response) => {
        setServerError("");
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          window.location.reload();
        }, 5000);
      })
      .catch((error) => {
        setServerError(error.response.data);
        setTimeout(() => {
          setServerError("");
        }, 7000);
        console.log(error.response);
      });
  };

  return (
    <div className="profile-settings-header">
      <div className="profile-settings">
        <h1 className="title-profile-settings">
          Modify your account information
        </h1>
        <p className="text-profile-settings">
          Fill out the form below to change your account information, keep fill
          fields blank if you do not wish to change them
        </p>
        <div
          className="text-server-error"
          style={{ display: serverError ? "block" : "none" }}
        >
          <Alert variant="danger" className="text-error-profile-settings">
            {serverError}
          </Alert>
        </div>
        <div
          className="text-success"
          style={{ display: success ? "block" : "none" }}
        >
          <Alert variant="success" className="text-success-profile-settings">
            Your account information has been updated
            <br />
            The page will reload in 5 seconds to see the changes...
          </Alert>
        </div>
        <Form onSubmit={handleSubmit} className="form-profile-settings">
          <Form.Group controlId="email">
            <div className="input-icon">
              <Form.Control
                type="email"
                onChange={handleChange}
                placeholder={user.email ? user.email : "Enter your email"}
              />
              <span className="icon-profile">
                <FontAwesomeIcon icon={faEnvelope} title="Email" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="password">
            <div className="input-icon">
              <Form.Control
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                placeholder="Enter a new password"
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faUnlockAlt} title="Password" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <div className="input-icon">
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                onChange={handleChange}
                placeholder="Confirm new password"
              />
              <span
                className="eye-icon"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                />
              </span>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faLock} title="Confirm Password" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="username">
            <div className="input-icon">
              <Form.Control
                type="text"
                onChange={handleChange}
                placeholder={
                  user.username ? user.username : "Enter your username"
                }
              />
              <span className="icon-profile">
                <FontAwesomeIcon icon={faUser} title="Username" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="age">
            <div className="input-icon">
              <Form.Control
                type="number"
                onChange={handleChange}
                placeholder={user.age ? user.age : "Enter your age"}
              />
              <span className="icon-profile">
                <FontAwesomeIcon icon={faCalendar} title="Age" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="diet" className="diet">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your diet
                </option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="anything">Anything</option>
                <option value="kosher">Kosher</option>
                <option value="halal">Halal</option>
                <option value="other">Other</option>
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faUtensils} title="Diet" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="drinks" className="drinks">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your drinking habits
                </option>
                <option value="very often">Very often</option>
                <option value="rarely">Rarely</option>
                <option value="desperately">Desperately</option>
                <option value="not at all">Not at all</option>
                <option value="often">Often</option>
                <option value="socially">Socially</option>
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faWineBottle} title="Drinks" />
              </span>
            </div>
          </Form.Group>

          <Form.Group controlId="education" className="education">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your education
                </option>
                <option value="high school">High School</option>
                <option value="university">University</option>
                <option value="masters program">Masters program</option>
                <option value="other">Other</option>
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faGraduationCap} title="Education" />
              </span>
            </div>
          </Form.Group>

          <Form.Group controlId="ethnicity" className="ethnicity">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your ethnicity
                </option>
                <option value="Asian">Asian</option>
                <option value="Middle Eastern">Middle Eastern</option>
                <option value="Afro-American">Afro-American</option>
                <option value="Native American">Native American</option>
                <option value="Indian">Indian</option>
                <option value="Pacific Islander">Pacific islander</option>
                <option value="Hispanic/Latin">Hispanic / Latin</option>
                <option value="Caucasian">Caucasian</option>
                <option value="other">Other</option>
                <option value="European">European</option>
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faChild} title="Ethnicity" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="job" className="job">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your job
                </option>
                <option value="art/music/writing">
                  Artistic / Musical / Writer
                </option>
                <option value="banking/finance">Banking / Finance</option>
                <option value="administration">Administration</option>
                <option value="construction">Construction</option>
                <option value="education">Education</option>
                <option value="entertainment/media">
                  Entertainment / Media
                </option>
                <option value="technology">Technology</option>
                <option value="management">Management</option>
                <option value="hospitality">Hospitality</option>
                <option value="law">Law</option>
                <option value="medicine">Medicine</option>
                <option value="military">Military</option>
                <option value="politics/government">
                  Politics / Government
                </option>
                <option value="sales/marketing">Sales / Marketing</option>
                <option value="science/engineering">
                  Science / Engineering
                </option>
                <option value="transportation">Transportation</option>
                <option value="unemployed">Unemployed</option>
                <option value="other">Other</option>
                <option value="retired">Retired</option>{" "}
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faBriefcase} title="Job" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="religion" className="religion">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your religion
                </option>
                <option value="agnosticism">Agnosticism</option>
                <option value="atheism">Atheism</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Catholicism">Catholicism</option>
                <option value="Christianity">Christianity</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Islam">Islam</option>
                <option value="Judaism">Judaism</option>
                <option value="other">Other</option>
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faPrayingHands} title="Religion" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="cats" className="cats">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your cats
                </option>
                <option value="likes">Likes cats</option>
                <option value="dislikes">Dislikes cats</option>
                <option value="has">Has cats</option>
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faCat} title="Cats" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="dogs" className="dogs">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your dogs
                </option>
                <option value="likes">Likes dogs</option>
                <option value="dislikes">Dislikes dogs</option>
                <option value="has">Hasdogs</option>
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faDog} title="Dogs" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="sex" className="sex">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your sex
                </option>
                <option value="m">Male</option>
                <option value="f">Female</option>
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faTransgender} title="Sex" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="smoke" className="smoke">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your smoking habits
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="sometimes">Sometimes</option>
                <option value="trying to quit">Trying to quit</option>
                <option value="when drinking">When drinking</option>
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faSmoking} title="Smoke" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="languages" className="languages">
            <div className="input-icon">
              <Form.Control as="select" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select your languages
                </option>
                {[
                  "English",
                  "Afrikaans",
                  "Albanian",
                  "Arabic",
                  "Armenian",
                  "Basque",
                  "Belarusan",
                  "Bengali",
                  "Breton",
                  "Bulgarian",
                  "Catalan",
                  "Cebuano",
                  "Chechen",
                  "Chinese",
                  "Croatian",
                  "Czech",
                  "Danish",
                  "Dutch",
                  "Esperanto",
                  "Estonian",
                  "Farsi",
                  "Finnish",
                  "French",
                  "Frisian",
                  "Georgian",
                  "German",
                  "Greek",
                  "Gujarati",
                  "Ancient Greek",
                  "Hawaiian",
                  "Hebrew",
                  "Hindi",
                  "Hungarian",
                  "Icelandic",
                  "Ilongo",
                  "Indonesian",
                  "Irish",
                  "Italian",
                  "Japanese",
                  "Khmer",
                  "Korean",
                  "Latin",
                  "Latvian",
                  "LISP",
                  "Lithuanian",
                  "Malay",
                  "Maori",
                  "Mongolian",
                  "Norwegian",
                  "Occitan",
                  "Other",
                  "Persian",
                  "Polish",
                  "Portuguese",
                  "Romanian",
                  "Rotuman",
                  "Russian",
                  "Sanskrit",
                  "Sardinian",
                  "Serbian",
                  "Sign Language",
                  "Slovak",
                  "Slovenian",
                  "Spanish",
                  "Swahili",
                  "Swedish",
                  "Tagalog",
                  "Tamil",
                  "Thai",
                  "Tibetan",
                  "Turkish",
                  "Ukranian",
                  "Urdu",
                  "Vietnamese",
                  "Welsh",
                  "Yiddish",
                ].map((language) => (
                  <option value={language}>{language}</option>
                ))}
              </Form.Control>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faLanguage} title="Languages" />
              </span>
            </div>
          </Form.Group>
          <button className="submit-profile-settings" type="submit">
          Update
        </button>
        </Form>
      </div>
    </div>
  );
}
