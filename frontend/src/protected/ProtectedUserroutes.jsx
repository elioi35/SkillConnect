
import React from "react";

const ProtectedUserroutes = ({children}) => {
    
        if(!localStorage.getItem("token")) {
            return(
                <div>You dont have acces for this page</div>
            )
        }
  return <div>{children}</div>; 
    };
    
  


export default ProtectedUserroutes;