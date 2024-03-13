import React, {createContext, useState} from 'react';

export const MailContext = createContext(null);

function MailContextProvider({children}) {
    const [isSend, setIsSend] = useState(false);
    return (
        <div>
            <MailContext.Provider value={{isSend, setIsSend}}>
                {children}
            </MailContext.Provider>
        </div>
    );
}

export default MailContextProvider;