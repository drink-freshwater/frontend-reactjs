import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Users</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Routes>
    </Router>
  );
};
//menit 6:45 lecture 44
export default App;
