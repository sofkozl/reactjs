import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import ReactJson from "react-json-view";
import { getUser } from '../Store/User/Reducer';

export const Profile = () => {
  const user = useSelector(getUser);

  return (
      <Stack gap={3}>
          <h1>Profile</h1>
          <ReactJson src={user.toJSON()} />
      </Stack>
  );
};