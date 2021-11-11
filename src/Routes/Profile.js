import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShowProfile } from '../Store/Profile/Actions';


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
          dispatch({toggleShowProfile})
        }
        />
    </div>
  );
};