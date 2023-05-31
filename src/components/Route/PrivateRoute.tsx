import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PropsRestrictedRout } from 'components/Interface/Interface';

const PrivateRoute: React.FC<PropsRestrictedRout> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isRefreshing, isLoggedIn, token } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn && token === null;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
export default PrivateRoute;
