import { Button } from '@mui/material';
import { useEffect } from 'react';
import { getUsers } from './Home.API';

export default function Home() {
  useEffect(() => {
    (async () => {
      const users = await getUsers();
      console.log(users);
    })();
  }, []);
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
