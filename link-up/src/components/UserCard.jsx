import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserCard.css";
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
const UserCard = () => {
  return (
    <>
      <div className="user-card">
        <div className="user-inner-card d-flex flex-column">
          <img
            className="user-profile-img"
            src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_35/1476412/peter-bachelorette-today-main-190828.jpg"
          />
          <div className="user-info">
            <span className="user-name">PETER WEBER</span>
            <span className="user-age"> 35</span>
          </div>
          <div className="user-about">
            <div className="d-flex justify-content-between user-info-display">
              <span>
                {" "}
                <FontAwesomeIcon icon={faWineBottle} />
                drinks
              </span>
              <span>
                <FontAwesomeIcon className="icone_language" icon={faLanguage} />
                language
              </span>
              <span>
                {" "}
                <FontAwesomeIcon
                  className="icone_education"
                  icon={faGraduationCap}
                />
                education
              </span>
              <span>
                {" "}
                <FontAwesomeIcon className="icone_job" icon={faBriefcase} />
                job
              </span>
              <span>
                {" "}
                <FontAwesomeIcon className="icone_child" icon={faChild} />
                cats/dogs
              </span>
              <span>
                <FontAwesomeIcon
                  className="icone_religion"
                  icon={faPrayingHands}
                />
                smoker
              </span>
            </div>
            <div className="d-flex justify-content-between user-info-display">
              <h4 className="user-info-display-info">Peter Weber is passionate about his German heritage. He enjoys celebrating traditional events and sharing his culture with others. He is an ambassador of his cultural background.</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
