import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import {useStateValue} from "./StateProvider"

function App() {
  // const [user , setuser] = useState(null);
  const [{user} , dispatch] = useStateValue()
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ):(
<>
        {/* <h1>slack clone first move 🚀</h1> */}
        {/* Header component */}
        <Header />
        <div className="app__body">
          {/* Sidebar comonent */}
          <Sidebar />
          {/* react-router -> for chat componentr visulizing way */}
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
