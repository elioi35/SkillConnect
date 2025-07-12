import { Children } from "react";


const ProtectedUserroutes = ({Children}) => {
    
        if(!localStorage.getItem("token")) {
            return(
                <div>You dont have acces for this page</div>
            )
        };
  return <div>{Children}</div>; 
    }
    
  


export default ProtectedUserroutes;