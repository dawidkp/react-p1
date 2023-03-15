import './App.scss';
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
