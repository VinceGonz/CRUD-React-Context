import React,{createContext} from 'react';



export const GlobalContext = createContext({});

const GlobalContextProvider = ({children}) => {
    const name = "jhims";
    return <GlobalContext.Provider value={{name}}>{children}</GlobalContext.Provider>
}
 
export default GlobalContextProvider;