import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/authSelectors";
import { refreshUser } from "./redux/auth/authOperations";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
      dispatch(refreshUser())
     }, [dispatch]);
  

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
        <Route path="login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
        <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}/>
      </Route>

      <Route path="*" element={<Home />} />
    </Routes>
  )
};

export default App;