import './Dashboard.scss';
import WeatherForecast from "../../features/WeatherForecast/WeatherForecast";

function Dashboard() {
  return (
    <div className="dashboard">
      <WeatherForecast />
    </div>
  );
}

export default Dashboard;
