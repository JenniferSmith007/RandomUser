import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import fetchUser from "./services/Rando_User";
import UserSummary from "./components/UserSummary";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  console.log(currentUser);

  useEffect(() => {
    fetchUser().then((results) => {
      setCurrentUser(results.data.results);
    });
    // setCurrentUser(results);
    // console.log(results);
  }, []);

  const users =
    currentUser.length === 0 ? (
      <div>`There is no message`</div>
    ) : (
      currentUser.map((userResult, index) => {
        return (
          <UserSummary userdata={userResult} key={`${index} UserSummary`} />
        ); // call function usersummary and pass in the object with key of user data and  value of user result.
      })
    );
  function refreshUser() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <div>{users}</div>
        <button className="bttn" onClick={refreshUser}>
          New User
        </button>
      </main>
    </div>
  );
}

export default App;
