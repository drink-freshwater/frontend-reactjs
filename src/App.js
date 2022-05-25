import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import { AuthContext } from "./shared/context/auth-context";
import React, { useCallback, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
      </React.Fragment>
    );
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
        <MainNavigation />
        {/* <nav>
        <Link to="/">Users</Link>
      </nav> */}
        <main>
          <Routes>
            {routes}
            {/* <Route path="/" element={<Users />} />
            <Route path="/places/new" element={<NewPlace />} />
            <Route path="/:userId/places" element={<UserPlaces />} />
            <Route path="/places/:placeId" element={<UpdatePlace />} />
            <Route path="/auth" element={<Auth />} /> */}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};
export default App;
