import { useSelector } from "react-redux";
import { Promptalert } from "./components";
import { AppRoutes } from "./routes/AppRoute";
import AuthRoute from "./routes/AuthRoute";
import { getDataFromLocalStorage } from "./utils/helpers";


const App = () => {
  const reduxData = useSelector((state) => state.global);

  const localData = getDataFromLocalStorage();
  const isAuth = localData?.token ? true : false;

  return (
    <div>
      <Promptalert />
      {isAuth ?
       <AppRoutes /> 
       : <AuthRoute />}
    </div>
  );
};

export default App;
