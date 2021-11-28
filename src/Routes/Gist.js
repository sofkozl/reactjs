import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";  
import {selectGists, selectGistsError, selectGistsLoading} from '../Store/Gist/Selector';
import { getAllGists } from '../Store/Gist/Actions'
import CircularProgress from '@mui/material/CircularProgress';

export const GistsList = () => {
  const dispatch = useDispatch();
  const gists = useSelector(selectGists);
  const error = useSelector(selectGistsError);
  const loading = useSelector(selectGistsLoading);

  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    requestGists();
  }, []);
  
  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description}</li>,
  []);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return (
      <>
        <h3>Error</h3>
          <button onClick={requestGists}>Retry</button>
      </>
    );
  }
  return <ul>{gists.map(renderGist)}</ul>;
};