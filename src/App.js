import './App.scss';
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  
  return (
    <div className="app">
      {/*Header*/}

      <div className="app__container">
        {/*Sidebar*/}

        <div className="container__content">
          {/*Breadcrumbs*/}

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="*" element={<NotFoundPage/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
