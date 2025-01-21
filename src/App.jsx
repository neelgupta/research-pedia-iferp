import { useSelector } from "react-redux";
import { Promptalert } from "./components";

import AuthRoute from "./routes/AuthRoute";
import { getDataFromLocalStorage } from "./utils/helpers";

import { AppRoutes } from "./routes/AppRoute";
import { UserRoutes } from "./routes/UserRoute";

const App = () => {
  const reduxData = useSelector((state) => state.global);

  const localData = getDataFromLocalStorage();

  //  const isAuth = localData?.token ? true : false;

  const isAuth = true;
  const role = "user";

  return (
    <div>
      <Promptalert />
      {isAuth ? (
        role === "admin" || role === "superAdmin" ? (
          <AppRoutes />
        ) : role === "user" ? (
          <UserRoutes />
        ) : (
          <div>Unauthorized Role</div>
        )
      ) : (
        <AuthRoute />
      )}
    </div>
  );
};

export default App;
