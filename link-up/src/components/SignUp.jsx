import React, { useContext, useState } from "react";
import linkUpContext from "../context/context.jsx";
import axios from "axios";
import "./SignUp.css"


function SignUp({onClose}) {
  const { user, setUser } = useContext(linkUpContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [diet, setDiet] = useState("");
  const [drinks, setDrinks] = useState("");
  const [education, setEducation] = useState("");
  const [job, setJob] = useState("");
  const [cats, setCats] = useState("");
  const [dogs, setDogs] = useState("");
  const [religion, setReligion] = useState("");
const [ethnicity, setEthnicity] = useState("");
const [sex, setSex] = useState("");
const [smokes, setSmokes] = useState("");
const [languages, setLanguages] = useState("");

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
      username,
      age,
      diet,
      drinks,
      education,
      job,
      cats,
      dogs,
      religion,
      ethnicity,
      sex,
      smokes,
      languages,
      confirmPassword,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/user/signup",
        data
      );
      if (response.status === 200) {
        alert("User created successfully");
        setUser("");
      }
    } catch (error) {
      {
        alert(error.response.data.error);
      }
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Create an account here</p>
      <label>
        Username:
        <input type="text"  id="username" value={user.username} onChange={handleChange} />
      </label>
      <label>
        Email :
        <input type="email" id="email" value={user.email} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" id="age" value={user.age} onChange={handleChange} />
      </label>

      <label>
        Password:
        <input type="password" id="password" value={user.password} onChange={handleChange} />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          id="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="diet">diet</label>
      <select id="diet" name="diet" onChange={handleChange}>
        <option value="mostly anything">Mostly Anything</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="kosher">Kosher</option>
        <option value="halal">Halal</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="drinks">drinks</label>
      <select id="drinks" name="drinks" onChange={handleChange}>
        <option value="very often">Very often</option>
        <option value="often">Often</option>
        <option value="socially">Socially</option>
        <option value="rarely">Rarely</option>
        <option value="not at all">Not at all</option>
      </select>
      <label htmlFor="education">Education</label>
      <select id="education" name="education" onChange={handleChange}>
        <option value="high school">High School</option>
        <option value="university">University</option>
        <option value="masters program">Masters program</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="ethnicity">Ethnicity</label>
      <select id="ethnicity" name="ethnicity" onChange={handleChange}>
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
        <option value="student">Student</option>
        <option value="art/music/writting">Artistic / Musical / Writer</option>
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
        <option value="agnosticism">Agnosticism</option>
        <option value="atheism">Atheism</option>
        <option value="Buddhism">Buddhism</option>
        <option value="Catholicism">Catholicism</option>
        <option value="Christianity">Christianity</option>
        <option value="Hinduism">Hinduism</option>
        <option value="Islam">Islam</option>
        <option value="Judaism">Judaism</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="cats">Cats</label>
      <select id="cats"  onChange={handleChange}>
        <option value="likes">Likes cats</option>
        <option value="dislikes">Dislikes cats</option>
        <option value="has">Has cats</option>
      </select>
      <label htmlFor="dogs">Dogs</label>
      <select id="dogs"  onChange={handleChange}>
        <option value="likes">Likes dogs</option>
        <option value="dislikes">Dislikes dogs</option>
        <option value="has">Has dogs</option>
      </select>
      <label htmlFor="sex">Sex</label>
      <select id="sex"  onChange={handleChange}>
        <option value="f"> Female</option>
        <option value="m"> Male</option>
      </select>
      <label htmlFor="smokes">Smokes</label>
      <select id="smokes"  onChange={handleChange}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="sometimes">Sometimes</option>
        <option value="trying to quit">Trying to quit</option>
        <option value="when drinking">When drinking</option>
      </select>
      <label htmlFor="languages">Languages</label>
      <select id="languages"  onChange={handleChange}>
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
      </select>

      <button type="submit">Sign Up</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}
export default SignUp;
