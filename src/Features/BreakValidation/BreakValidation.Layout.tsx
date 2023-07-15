import { useState } from 'react';

const BreakValidation = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search.length === 0) {
      console.log('Zero');
    } else if (search.length === 3) {
      console.log('Threee');
    } else {
      console.log('search.length: ', search.length);
    }
  };

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default BreakValidation;
