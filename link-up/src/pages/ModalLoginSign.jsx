import React, {useContext} from "react";
import { Modal } from "react-bootstrap";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
// import "./Modal.css";
import  linkUpContext from "../context/context"
import { useNavigate } from "react-router-dom";

function ModalLoginSign() {

   const { setCurrentUser, setUser, toggleModal, isOpen,openLoginModal, setOpenLoginModal, loginUser, setLoginUser } = useContext(linkUpContext);
   const navigate = useNavigate();

 
    
    function handleLogout() {
        setUser("")
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      setLoginUser(false);
        navigate("/");
    
      }

      const toggleForm = () => {
        setOpenLoginModal(!openLoginModal);
      };
      function handleLogout() {
        setCurrentUser("")
      localStorage.removeItem("user");
      localStorage.removeItem("userId");
      setLoginUser(false);
        navigate("/");
      }
      const loggedIn = localStorage.getItem("userId")
   return (

    <div>
      {!loggedIn && (
        <>
          {!isOpen && (
            <button className="LoginSuButton" onClick={toggleModal}>
              Login / Signup
            </button>
          )}
          {isOpen && (
            <Modal className="modal" show={isOpen} onHide={toggleModal}>
              <Modal.Body>
                {openLoginModal ? (
                  <Login onClose={toggleModal} />
                ) : (
                  <SignUp onClose={toggleModal} />
                )}
                <button onClick={toggleForm}>
                  {openLoginModal
                    ? "You don't have an account yet ? Please  : Signup"
                    : "You already have an account ? Please : Login"}
                </button>
              </Modal.Body>
            </Modal>
          )}
        </>
      )}
      {loggedIn && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default ModalLoginSign
