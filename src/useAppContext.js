import { useContext } from "react";
import { AppContext } from "./provider";

const useAppContext = () => {
  const [state, dispatch] = useContext(AppContext);

  if (dispatch === undefined) {
    throw new Error("Must have dispatch defined");
  }

  const setAppData = async appData => {
    dispatch(draft => {
      draft.appData = appData;
    });
  };

  return {
    ...state,
    setAppData
  };
};

export { useAppContext };
