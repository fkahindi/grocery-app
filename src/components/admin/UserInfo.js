import React,{useContext} from 'react';
import {AdminContext} from './Dashboard';


function UserInfo(){
  /* return(
    <UserContext.Consumer>
      {user =><span>User: {user}</span> }
    </UserContext.Consumer>
  ) */
  
  const user = useContext(AdminContext)
  return <span>User: {user}</span>
  
}
export default UserInfo