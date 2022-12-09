import { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  // Hook State
  const [name, setName] = useState('Ganda');
  const [age, setAge] = useState(0);

  // Hook Effect
  useEffect(() => {
    setName('Hasan');
  }, []);

  useEffect(() => {
    setAge(16);
  }, []);

  return (
    <Navbar>
      <div>
        Header Component Works
        {/* {Event Handling} */}
        <button onClick={() => setName('Dila')}> Ganti Pemain</button>
        <button onClick={() => setAge(10)}> Ubah Umur</button>
        <h1>
          {name}, {age}
        </h1>
      </div>
    </Navbar>
  );
};

export default Header;
