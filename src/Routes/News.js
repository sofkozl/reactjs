import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";  
import CircularProgress from '@mui/material/CircularProgress';
import { getNews } from "../Store/News/Actions";
import { selectNews, selectNewsError, selectNewsLoading } from "../Store/News/Selector";


export const News = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectNewsError);
  const loading = useSelector(selectNewsLoading);
  const news = useSelector(selectNews);

  const reload = () => {
    dispatch(getNews());
  }

  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <h3 className="App-subheader">News</h3>
      {error ? (
        <>
          <h4>Error: {error}</h4>
          <button onClick={reload}>Refresh</button>
        </>
      ) : (
          news.map((art) => (
          <article key={art.id}>
            <h4>{art.title}</h4>
          </article>
        ))
      )}
      {loading && <CircularProgress />}
    </div>
  )
};