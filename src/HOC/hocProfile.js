import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_SHOW_PROFILE } from '../Store/Profile/Actions';

export const hocProfile = (Component) => {
  return (props) => {
    const dispatch = useDispatch();
    const showName = useSelector((state) => state.showName);
  
    const toggleShowProfile = () => {
      dispatch({type: TOGGLE_SHOW_PROFILE})
    }     
    
    return (<Component
      {...props}
      showName={showName}
      toggleShowProfile={toggleShowProfile}
    />)
  }
}