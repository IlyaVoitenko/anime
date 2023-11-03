import { isLoadingSelector } from "../../store/selectors";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "../Loading";

const IsLoading = () => {
  const isLoading = useSelector(isLoadingSelector);
  return isLoading ? <Loading /> : <Outlet />;
};

export default IsLoading;
