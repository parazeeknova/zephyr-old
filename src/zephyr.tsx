import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/homePage/homePage';
import UserProfile from './pages/profilePage/userProfile';

function Zephyr() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}
export default Zephyr;
