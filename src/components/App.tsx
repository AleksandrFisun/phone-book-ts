import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import { useAuth } from 'hooks';
import RestrictedRout from 'components/Route/RestrictedRout';
import PrivateRoute from 'components/Route/PrivateRoute';
import authOperations from 'redux/auth/authOperations';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('Pages/HomePage'));
const ContactsPage = lazy(() => import('Pages/PhoneBookPage'));
const SignInPage = lazy(() => import('Pages/SignInPage'));
const RegistrationPage = lazy(() => import('Pages/RegistrationPage'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage'));

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.checkAuth());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route
                path="sign-in"
                element={
                  <RestrictedRout
                    component={SignInPage}
                    redirectTo="/phone-book"
                  />
                }
              />
              <Route
                path="registration"
                element={
                  <RestrictedRout
                    component={RegistrationPage}
                    redirectTo="/phone-book"
                  />
                }
              />
              <Route
                path="phone-book"
                element={
                  <PrivateRoute
                    component={ContactsPage}
                    redirectTo="/"
                  ></PrivateRoute>
                }
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="dark"
          />
        </>
      )}
    </>
  );
};
