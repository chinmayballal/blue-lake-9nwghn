import { useEffect, useState } from 'react';
const Planet = () => {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then((response) => response.json())
      .then((json) => setUsers(json));
    // console.log('effet planets');
    // console.log(users);
  }, []);
  const handleSearch = (e) => {
    // console.log(e.target.value);
    if (e.target.value.length > 0) {
      setRecords(
        users.results.filter((f) =>
          f.name.toLowerCase().includes(e.target.value)
        )
      );
    } else {
      setRecords('');
    }
  };
  // console.log(records);
  const emoji = (number) => {
    var count = 0;
    var emoji = '';
    while (number % 10 === 0) {
      count++;
      number = number / 10;
    }

    while (count) {
      count--;
      emoji = emoji + '\u{1F60A}';
    }
    return emoji;
  };
  return (
    <div>
      <div>Search for planets </div>
      <div>
        <input
          id="search"
          type="text"
          placeholder="a"
          onChange={handleSearch}
        />
      </div>
      <br />
      <div>
        {records.length !== 0 && (
          <table>
            <thead>
              <tr>
                <td>Name </td>
                <td>Population </td>
              </tr>
            </thead>
            <tbody>
              {records.map((d, i) => (
                <tr key={i}>
                  <td>{d.name}</td>
                  <td title={d.population}>{emoji(d.population)}</td>
                  {/* <td>{emoji(d.population)}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <br />
      {records.length === 0 && (
        <div className="error">No planet matching search term</div>
      )}
    </div>
  );
};

export default Planet;
