import { createContext, useState } from "react";
const linkUpContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState({
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
  const [loginUser, setLoginUser] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const valueToShare = {
    user,
    setUser,
    toggleModal,
    setIsOpen,
    isOpen,
    openLoginModal,
    setOpenLoginModal,
    loginUser,
    setLoginUser,
  };
  return (
    <linkUpContext.Provider value={valueToShare}>
      {children}
    </linkUpContext.Provider>
  );
}
export { Provider };
export default linkUpContext;
