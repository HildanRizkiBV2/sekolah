import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LulusSmabang from "./pages/LulusSmabang";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/lulus" Component={LulusSmabang} />
      </Routes>
    </>
  );
}

export default App;
