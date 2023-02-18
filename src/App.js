import { Route, Routes} from "react-router";

import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favorites from './pages/Favourites';
import MainNavigation from "./components/layouts/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
      <Route path="/" element={<AllMeetups />} />
      <Route path="/fav" element={ <Favorites />} />
      <Route path="/new" element={<NewMeetups />} />
      </Routes>
    </div>
  );
}

export default App;