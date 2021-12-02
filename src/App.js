import { Provider } from "react-redux";
import { Navigation } from "./Navigation";
import { store } from './Store/store';

export const App = () => {

  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
};

