import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { amountAdded } from "./features/counter/counterSlice";
import { useFetchUsersQuery } from "./features/users/usersApiSlice";
import { useState } from "react";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const handleClick = () => {
    dispatch(amountAdded(5));
  };

  const [numUsers, setNumUsers] = useState(10);
  const { data = [], isFetching } = useFetchUsersQuery(numUsers);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <label htmlFor="select"></label>
        <select
          id="select"
          value={numUsers}
          onChange={(e) => {
            setNumUsers(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>

      <div>Number of users fetched: {data.length}</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>

            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
