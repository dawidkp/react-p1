import './App.scss';
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max&timezone=auto", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

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
