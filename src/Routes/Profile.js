import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_SHOW_PROFILE } from '../Store/Profile/Actions';


export const Profile = () => {
  const dispatch = useDispatch();

  const showName = useSelector((state) => state.showName);
  
  return (
    <div className="App-header">
      <h3 className="App-subheader">Profile</h3>
      <input
        type="checkbox"
        checked={showName}
        onChange={() =>
          dispatch({
            type: TOGGLE_SHOW_PROFILE
          })
        }/>
    </div>
  );
};