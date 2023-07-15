import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    navigate(0);
  };

  return (
    <>
      <p>Login now! Since only loggedin users are allowed</p>
      <button onClick={onLogin}>Login Now</button>
    </>
  );
};

export default Login;
