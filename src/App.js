import { Route, Routes} from "react-router";

import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favorites from './pages/Favourites';
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<AllMeetups />} />
      <Route path="/fav" element={ <Favorites />} />
      <Route path="/new" element={<NewMeetups />} />
      </Routes>
    </Layout>
  );
}

export default App;