import React, {createContext, useState} from 'react';

export const UserContext = createContext(null);

// {
//     "email": email,
//     "body": body
// }

// i, item, priceTotal

function UserContextProvider({children}) {
    const [user, setUser] = useState({});
    return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        </div>
    );
}

export default UserContextProvider;