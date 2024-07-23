import { createContext } from "react";
import runChat from "../config/gemini";
export const Context = createContext();

const contextProvider = (props) => {

const onSent = async (prompt)=>{
     await runChat(prompt)
}
 
onSent("what is react js")

    const contextValue ={

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default  contextProvider;