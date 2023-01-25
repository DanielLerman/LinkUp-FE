import { createContext, useState} from "react";
const linkUpContext = createContext();

function Provider({ children }) {


    const valueToShare={}
    return (
        <linkUpContext.Provider value={valueToShare}>
          {children}
        </linkUpContext.Provider>
      );
}
export { Provider };
export default linkUpContext;