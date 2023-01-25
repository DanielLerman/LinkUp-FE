import React, { useState, useContext } from "react";
// import axios from 'axios';
import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faUnlockAlt,
  faUser,
  faInfoCircle,
  faUserCog,
  faBirthdayCake,
  faUtensils,
  faGlassMartini,
  faGraduationCap,
  faUserCircle,
  faBriefcase,
  faPray,
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
// import conetexte for information for users

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

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validate = (field, value) => {
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";
    let ageError = "";
    let dietError = "";
    let drinksError = "";
    let educationError = "";
    let ethnicityError = "";
    let jobError = "";
    let religionError = "";
    let catsError = "";
    let dogsError = "";
    let sexError = "";
    let smokesError = "";
    let languagesError = "";

    if (field === "email") {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(value)) {
        emailError = "Invalid email address";
      }
    }

    if (field === "password") {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!passwordRegex.test(value)) {
        passwordError = "Password not strong enough";
      }
    }

    if (field === "confirmPassword") {
      if (value !== formData.password) {
        confirmPasswordError = "Passwords do not match";
      }
    }

    if (field === "age") {
      const ageRegex = /^\d{2}$/;
      if (!ageRegex.test(value)) {
        ageError = "Invalid age (must be 2 digits)";
      }
    }

    if (field === "diet") {
      if (
        !["Vegetarian", "Vegan", "Ketogenic", "Paleo", "Gluten-Free"].includes(
          value
        )
      ) {
        dietError = "Invalid diet";
      }
    }

    if (field === "drinks") {
      if (!["Socially", "Regularly", "Never"].includes(value)) {
        drinksError = "Invalid drinks preference";
      }
    }

    if (field === "education") {
      if (
        ![
          "High School",
          "Associate's Degree",
          "Bachelor's Degree",
          "Master's Degree",
          "Doctorate",
        ].includes(value)
      ) {
        educationError = "Invalid education level";
      }
    }
    if (field === "ethnicity") {
      if (
        ![
          "Caucasian",
          "African American",
          "Latino/a",
          "Asian",
          "Native American",
          "Other",
        ].includes(value)
      ) {
        ethnicityError = "Invalid ethnicity";
      }
    }

    if (field === "job") {
      if (!value) {
        jobError = "Invalid job";
      }
    }

    if (field === "religion") {
      if (
        ![
          "Christianity",
          "Islam",
          "Judaism",
          "Buddhism",
          "Hinduism",
          "Other",
        ].includes(value)
      ) {
        religionError = "Invalid religion";
      }
    }

    if (field === "cats") {
      if (!["Yes", "No"].includes(value)) {
        catsError = "Invalid cat preference";
      }
    }

    if (field === "dogs") {
      if (!["Yes", "No"].includes(value)) {
        dogsError = "Invalid dog preference";
      }
    }

    if (field === "sex") {
      if (!["Male", "Female", "Non-binary"].includes(value)) {
        sexError = "Invalid sex";
      }
    }

    if (field === "smokes") {
      if (!["Yes", "No"].includes(value)) {
        smokesError = "Invalid smoking preference";
      }
    }

    if (field === "languages") {
      if (!value) {
        languagesError = "Invalid languages";
      }
    }

    setErrors({
      ...errors,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
      age: ageError,
      diet: dietError,
      drinks: drinksError,
      education: educationError,
      ethnicity: ethnicityError,
      job: jobError,
      religion: religionError,
      cats: catsError,
      dogs: dogsError,
      sex: sexError,
      smokes: smokesError,
      languages: languagesError,
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    validate(id, value);
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
      fetch
        .put(`http://localhost:8080/user/${user.id}`, requestOptions)
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
    }
  };

  return (
    <div className="profile-settings-header">
      <NavBar />
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
                className={errors.email ? "error-focus" : ""}
                placeholder={user.email ? user.email : "Enter your email"}
              />
              <div
                className="text-profile-settings-error"
                style={{ display: errors.email ? "block" : "none" }}
              >
                <Alert variant="danger" className="text-error-profile-settings">
                  {errors.email}
                </Alert>
              </div>
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
                className={errors.password ? "error-focus" : ""}
                placeholder="Enter a new password"
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faUnlockAlt} title="Password" />
              </span>
              <div
                className="text-error-profile-settings"
                style={{ display: errors.password ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.password}</Alert>
              </div>
            </div>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <div className="input-icon">
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                onChange={handleChange}
                className={errors.confirmPassword ? "error-focus" : ""}
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
              <div
                className="text-error-profile-settings"
                style={{ display: errors.confirmPassword ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.confirmPassword}</Alert>
              </div>
            </div>
          </Form.Group>
          <Form.Group controlId="username">
            <div className="input-icon">
              <Form.Control
                type="text"
                onChange={handleChange}
                className={errors.username ? "error-focus" : ""}
                placeholder={
                  user.username ? user.username : "Enter your username"
                }
              />
              <div
                className="text-error-profile-settings"
                style={{ display: errors.username ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.username}</Alert>
              </div>
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
                className={errors.age ? "error-focus" : ""}
                placeholder={user.age ? user.age : "Enter your age"}
              />
              <div
                className="text-error-profile-settings"
                style={{ display: errors.age ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.age}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faCalendar} title="Age" />
              </span>
            </div>
          </Form.Group>

          <Form.Group controlId="diet" className="diet">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.diet ? "error-focus" : ""}
              >
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
              <div
                className="text-error-profile-settings"
                style={{ display: errors.diet ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.diet}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faUtensils} title="Diet" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="drinks" className="drinks">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.drinks ? "error-focus" : ""}
              >
                <option value="" disabled selected>
                  Select your drinking habits
                </option>
                <option value="very often">Very often</option>
                <option value="rarely">Rarely</option>
                <option value="desperately">Desperately</option>
                <option value="not at all">Not at all</option>
                <option value="often">Often</option>
                <option value="socially">Socially</option>
              </Form.Control>
              <div
                className="text-error-profile-settings"
                style={{ display: errors.drinks ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.drinks}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faWineBottle} title="Drinks" />
              </span>
            </div>
          </Form.Group>

          <Form.Group controlId="education" className="education">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.education ? "error-focus" : ""}
              >
                <option value="" disabled selected>
                  Select your education
                </option>
                <option value="high school">High School</option>
                <option value="university">University</option>
                <option value="masters program">Masters program</option>
                <option value="other">Other</option>
              </Form.Control>
              <div
                className="text-error-profile-settings"
                style={{ display: errors.education ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.education}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faGraduationCap} title="Education" />
              </span>
            </div>
          </Form.Group>

          <Form.Group controlId="ethnicity" className="ethnicity">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.ethnicity ? "error-focus" : ""}
              >
                <option value="" disabled selected>
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
              <div
                className="text-error-profile-settings"
                style={{ display: errors.ethnicity ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.ethnicity}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faChild} title="Ethnicity" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="job" className="job">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.job ? "error-focus" : ""}
              >
                <option value="" disabled selected>
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
              <div
                className="text-error-profile-settings"
                style={{ display: errors.job ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.job}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faBriefcase} title="Job" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="religion" className="religion">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.religion ? "error-focus" : ""}
              >
                <option value="" disabled selected>
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
              <div
                className="text-error-profile-settings"
                style={{ display: errors.religion ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.religion}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faPrayingHands} title="Religion" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="cats" className="cats">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.cats ? "error-focus" : ""}
              >
                <option value="" disabled selected>
                  Select your cats
                </option>
                <option value="likes">Likes cats</option>
                <option value="dislikes">Dislikes cats</option>
                <option value="has">Has cats</option>
              </Form.Control>
              <div
                className="text-error-profile-settings"
                style={{ display: errors.cats ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.cats}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faCat} title="Cats" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="dogs" className="dogs">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.dogs ? "error-focus" : ""}
              >
                <option value="" disabled selected>
                  Select your dogs
                </option>
                <option value="likes">Likes dogs</option>
                <option value="dislikes">Dislikes dogs</option>
                <option value="has">Has dogs</option>
              </Form.Control>
              <div
                className="text-error-profile-settings"
                style={{ display: errors.dogs ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.dogs}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faDog} title="Dogs" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="sex" className="sex">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.sex ? "error-focus" : ""}
              >
                <option value="" disabled selected>
                  Select your sex
                </option>
                <option value="m">Male</option>
                <option value="f">Female</option>
              </Form.Control>
              <div
                className="text-error-profile-settings"
                style={{ display: errors.sex ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.sex}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faTransgender} title="Sex" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="smoke" className="smoke">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.smoke ? "error-focus" : ""}
              >
                <option value="" disabled selected>
                  Select your smoking habits
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="sometimes">Sometimes</option>
                <option value="trying to quit">Trying to quit</option>
                <option value="when drinking">When drinking</option>
              </Form.Control>
              <div
                className="text-error-profile-settings"
                style={{ display: errors.smoke ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.smoke}</Alert>
              </div>
              <span className="icon-profile">
                <FontAwesomeIcon icon={faSmoking} title="Smoke" />
              </span>
            </div>
          </Form.Group>
          <Form.Group controlId="languages" className="languages">
            <div className="input-icon">
              <Form.Control
                as="select"
                onChange={handleChange}
                className={errors.languages ? "error-focus" : ""}
              >
                <option value="" disabled selected>
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
              <div
                className="text-error-profile-settings"
                style={{ display: errors.languages ? "block" : "none" }}
              >
                <Alert variant="danger">{errors.languages}</Alert>
              </div>
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
