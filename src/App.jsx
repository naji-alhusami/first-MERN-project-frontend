import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
          {/* <Route element={<RequireAuth />}> */}
          {/* <Route path="/addplace" element={<AddPlace />} /> */}
          {/* </Route> */}
        </Routes>
        {/* <Footer /> */}
      </main>
    </BrowserRouter>
  );
}

export default App;
