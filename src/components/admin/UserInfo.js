import React, {useContext} from 'react';

import {UserContext} from './Dashboard';


function UserInfo(){
  /* return(
    <UserContext.Consumer>
      {user =><span>User: {user}</span> }
    </UserContext.Consumer>
  ) */

  const user = useContext(UserContext)
  return <span>User: {user}</span>

}
export default UserInfo