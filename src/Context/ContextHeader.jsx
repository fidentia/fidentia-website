import React, {createContext, useState, useContext} from 'react';

const ContextHeader = createContext();


export default function ContextHeaderProvider({ children }){
    
    const [checkIsActive, setCheckIsActive] = useState("");
    return(
        <ContextHeader.Provider value={{
            checkIsActive,
            setCheckIsActive,
        }}>
            {children}
         </ContextHeader.Provider>   
    )
}

export function useContextHeader(){
    const context = useContext(ContextHeader);

    const {
        checkIsActive,
        setCheckIsActive,
    } = context;

    return {
        checkIsActive,
        setCheckIsActive,
    }
}