import React from 'react';

import GlobalContextProvider from './context/GlobalContext'




const ContextWrapper = ({children}) => {
return <GlobalContextProvider>{children}</GlobalContextProvider>
}
 
export default ContextWrapper;