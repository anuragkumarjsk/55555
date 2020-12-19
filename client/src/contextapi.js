import React from 'react';

const UserContext = React.createContext()

const Userprovider = UserContext.Provider
const Userconsumer = UserContext.Consumer

export {Userprovider,Userconsumer}