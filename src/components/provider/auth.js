import React, { useState }from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

      const [toggleswitch, setToogleSwitch] = useState(false);

      return (
            <AuthContext.Provider value={{ toggleswitch, setToogleSwitch }}>
                  {props.children}
            </AuthContext.Provider>
      )
}
