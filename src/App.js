import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      {/* <nav>
        <Link to="/">Users</Link>
      </nav> */}
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
