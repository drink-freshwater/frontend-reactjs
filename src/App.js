import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
