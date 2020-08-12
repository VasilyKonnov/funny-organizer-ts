import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import { ProfileState } from "./context/Profile/ProfileState";

const App: React.FC = () => {
  return (
    <ProfileState>

      <BrowserRouter>
        <Navbar />

        <div className="container pt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Tasks" component={Tasks} />
            <Route path="/Profile/:id" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>

    </ProfileState>
  )
}

export default App;
