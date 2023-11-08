import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  const handleSubmit = () => {
    let filteredData = users.results.filter((user) => {
      return user.name === email && user.birth_year === pass;
    });
    if (!email) {
      alert('please Enter user Name');
    } else if (!pass) {
      alert('Please enter password');
    } else {
      if (filteredData.length > 0) {
        console.log('true');
        navigate('/planet');
      } else {
        alert('Please check credentials');
      }
    }

    // console.log(filteredData);
  };

  return (
    <div className="flex-container">
      <div className="flex">
        <label className="label-login" htmlFor="username">
          Name{' '}
        </label>
        <input
          id="username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* {!validEmail && <h5>please enter your user name</h5>} */}
      </div>
      <br />
      <div className="flex">
        <label className="label-password" htmlFor="password">
          Password{' '}
        </label>
        <input
          id="password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
