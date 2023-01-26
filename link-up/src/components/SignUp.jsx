import React, { useContext, useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";
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

function SignUp({ onClose }) {
  const [serverError, setServerError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    age: "",
    diet: "",
    drinks: "",
    education: "",
    job: "",
    cats: "",
    dogs: "",
    religion: "",
    ethnicity: "",
    sex: "",
    smokes: "",
    languages: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/signup",
        user
      );
      if (response.status === 200) {
        alert("User created successfully");
        setUser("");
        onClose();
      }
    } catch (error) {
      {
        setServerError(error.response.data.message);
      }
    }
  };
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <p>Create an account here</p>
      <div
        className="text-server-error"
        style={{ display: serverError ? "block" : "none" }}
      >
        <Alert variant="danger" className="text-error-profile-settings">
          {serverError}
        </Alert>
      </div>
      <div className="form-first-part">
        <Form.Group controlId="firstName">
          <div className="input-icon">
            <Form.Control
              type="text"
              onChange={handleChange}
              id="username"
              value={user.username}
              placeholder="Enter your username"
            />
            <span className="icon-profile">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </Form.Group>
        <Form.Group controlId="email">
          <div className="input-icon">
            <Form.Control
              type="email"
              onChange={handleChange}
              placeholder="Enter your email"
              value={user.email}
            />
            <span className="icon-profile">
              <FontAwesomeIcon icon={faEnvelope} title="Email" />
            </span>
          </div>
        </Form.Group>
        <Form.Group controlId="age">
          <div className="input-icon">
            <Form.Control
              type="number"
              onChange={handleChange}
              placeholder="Enter your age"
              value={user.age}
            />
            <span className="icon-profile">
              <FontAwesomeIcon icon={faCalendar} title="Age" />
            </span>
          </div>
        </Form.Group>
        <Form.Group controlId="password">
          <div className="input-icon">
            <Form.Control
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              placeholder="Enter a new password"
              value={user.password}
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
              value={user.confirmPassword}
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
      </div>
<<<<<<< HEAD
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
            <option value="entertainment/media">Entertainment / Media</option>
            <option value="technology">Technology</option>
            <option value="management">Management</option>
            <option value="hospitality">Hospitality</option>
            <option value="law">Law</option>
            <option value="medicine">Medicine</option>
            <option value="military">Military</option>
            <option value="politics/government">Politics / Government</option>
            <option value="sales/marketing">Sales / Marketing</option>
            <option value="science/engineering">Science / Engineering</option>
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
=======
      <div className="form-second-part">
      <label htmlFor="drinks">Drinks</label>
      <select id="drinks" name="drinks" onChange={handleChange}>
      <option defaultValue=""></option>
        <option value="very often">Very often</option>
        <option value="often">Often</option>
        <option value="socially">Socially</option>
        <option value="rarely">Rarely</option>
        <option value=" not at all">Not at all</option>
      </select>
      <label htmlFor="education">Education</label>
      <select id="education" name="education" onChange={handleChange}>
      <option defaultValue=""></option>
        <option value="high school">High School</option>
        <option value="college/university">College / University</option>
        <option value="masters program">Masters program</option>
        <option value="other">Other</option>
        <option value="two-year college">Two-year college</option>
        <option value="ph.d program">Ph.d program</option>
        <option value="law school">Law school</option>
        <option value="med school">Med school</option>
      </select>
      <label htmlFor="ethnicity">Ethnicity</label>
      <select id="ethnicity" name="ethnicity" onChange={handleChange}>
      <option defaultValue=""></option>
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
      </select>
      <label htmlFor="job">Job</label>
      <select id="job" name="job" onChange={handleChange}>
      <option defaultValue=""></option>
        <option value="student">Student</option>
        <option value="art/music/writing">Artistic / Musical / Writer</option>
        <option value="banking/finance">Banking / Finance</option>
        <option value="administration">Administration</option>
        <option value="construction">Construction</option>
        <option value="education">Education</option>
        <option value="entertainment/media">Entertainment / Media</option>
        <option value="technology">Technology</option>
        <option value="management">Management</option>
        <option value="hospitality">Hospitality</option>
        <option value="law">Law</option>
        <option value="medicine">Medicine</option>
        <option value="military">Military</option>
        <option value="politics/government">Politics / Government</option>
        <option value="sales/marketing">Sales / Marketing</option>
        <option value="science/engineering">Science / Engineering</option>
        <option value="transportation">Transportation</option>
        <option value="unemployed">Unemployed</option>
        <option value="other">Other</option>
        <option value="retired">Retired</option>
      </select>
      <label htmlFor="religion">Religion</label>
      <select id="religion" name="religion" onChange={handleChange}>
      <option defaultValue=""></option>
        <option value="Agnosticism">Agnosticism</option>
        <option value="Atheism">Atheism</option>
        <option value="Buddhism">Buddhism</option>
        <option value="Catholicism">Catholicism</option>
        <option value="Christianity">Christianity</option>
        <option value="Hinduism">Hinduism</option>
        <option value="Islam">Islam</option>
        <option value="Judaism">Judaism</option>
        <option value="Other">Other</option>
      </select>
      <label htmlFor="cats">Cats</label>
      <select id="cats" onChange={handleChange}>
      <option defaultValue=""></option>
        <option value="likes">Likes cats</option>
        <option value="dislikes">Dislikes cats</option>
        <option value="has">Has cats</option>
      </select>
      <label htmlFor="dogs">Dogs</label>
      <select id="dogs" onChange={handleChange}>
      <option defaultValue=""></option>
        <option value="likes">Likes dogs</option>
        <option value="dislikes">Dislikes dogs</option>
        <option value="has">Has dogs</option>
      </select>
      <label htmlFor="sex">Sex</label>
      <select id="sex" onChange={handleChange}>
      <option defaultValue=""></option>
        <option value="f"> Female</option>
        <option value="m"> Male</option>
      </select>
      <label htmlFor="smokes">Smokes</label>
      <select id="smokes" onChange={handleChange}>
      <option defaultValue=""></option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="sometimes">Sometimes</option>
        <option value="trying to quit">Trying to quit</option>
        <option value="when drinking">When drinking</option>
      </select>
      <label htmlFor="languages">Languages</label>
      <select id="languages" onChange={handleChange}>
      <option defaultValue=""></option>
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
          <option key={language} value={language}>{language}</option>
        ))}
      </select>
>>>>>>> origin/salome
      <div className="btns">
        <Button type="submit" className="submit-btn-signup">Sign Up</Button>
        <Button type="button" className="cancel-btn-signup" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}
export default SignUp;
