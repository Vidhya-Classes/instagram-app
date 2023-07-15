import Login from './Login.Layout';

const SecureView = ({ children }: any) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn) {
    return <Login />;
  }

  return children;
};

export default SecureView;
