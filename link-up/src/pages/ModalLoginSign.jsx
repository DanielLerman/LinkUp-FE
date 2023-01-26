import React, {useContext} from "react";
import { Modal } from "react-bootstrap";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
// import "./Modal.css";
import  linkUpContext from "../context/context"
import { useNavigate } from "react-router-dom";

function ModalLoginSign() {

   const { setUser, toggleModal, isOpen,openLoginModal, setOpenLoginModal, loginUser, setLoginUser } = useContext(linkUpContext);
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
   return (

    <div>
      {!loginUser && (
        <>
          {!isOpen && (
            <button className="log-btn" onClick={toggleModal}>
              Login
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
      {loginUser && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default ModalLoginSign
