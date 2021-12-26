import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./db/profile-data.json";
import Container from "./components/Container/Container";
import FriendsList from "./components/FriendsList/FriendsList";
import friends from "./db/friends-list.json";

function App() {
  return (
    <div className="App">
      <Container title="Hello friends! ">
        <FriendsList data={friends} />
      </Container>
      <Container title="Hello ">
        <Profile data={user} />
      </Container>
    </div>
  );
}

export default App;
