import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { useHistory } from 'react-router-dom';
import DashboardIndex from './components/dashboard';
import SettingsIndex from './components/settings';
import AppRoutes from './Routes/Approutes';

function Home() {
    let history = useHistory();
    return (
        <div className="App">
            {/* <DashboardIndex />
            <SettingsIndex /> */}
           
        </div>
    );
}

export default Home;
