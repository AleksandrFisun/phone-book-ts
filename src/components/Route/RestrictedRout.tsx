import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PropsRestrictedRout } from 'components/Interface/Interface';

const RestrictedRout: React.FC<PropsRestrictedRout> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
export default RestrictedRout;
