import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const onLogOut = () => {
    localStorage.removeItem('isLoggedIn');
    navigate(0);
  };

  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <Button onClick={onLogOut}>Logout</Button>
    </div>
  );
}
