import { hocProfile } from "../HOC/hocProfile";

export const ProfileRender = ({showName, toggleShowProfile}) => {

  return (
    <div className="App-header">
      <h3 className="App-subheader">Profile</h3>
      <input
        type="checkbox"
        checked={showName}
        onChange={toggleShowProfile}
      />
    </div>
  );
};

export const Profile = hocProfile(ProfileRender);