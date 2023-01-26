import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const linkUpContext = createContext();


function Provider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    diet: "",
    drinks: "",
    education: "",
    ethnicity: "",
    job: "",
    cats: "",
    dogs: "",
    religion: "",
    sex: "",
    smokes: "",
    languages: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [loginUser, setLoginUser] = useState(false);

  const valueToShare = {
    currentUser,
    setCurrentUser,
    toggleModal,
    setIsOpen,
    isOpen,
    openLoginModal,
    setOpenLoginModal,
    loginUser,
    setLoginUser,
  };
  const getUserById = async () => {
    try {
      const res = await axios.get("http://localhost:8080/user/id");
      console.log(res)
    } catch (error) {
      alert(error);
    }
  };
  useEffect(()=> {
   getUserById()
  
  }, [])

  return (
    <linkUpContext.Provider value={valueToShare}>
      {children}
    </linkUpContext.Provider>
  );
}
export { Provider };
export default linkUpContext;
