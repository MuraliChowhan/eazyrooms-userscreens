import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { useHistory } from 'react-router-dom';
import AppRoutes from './Routes/Approutes';
import Home from "./Home";
import ItemsList from "./components/new/ItemsList";
import MultiSelectFormHeader from "./components/new/MultiSelectForm";
import SearchBar from "./components/new/searchbar/Searchbar";
import SidebarItems from "./components/new/listItems/SidebarItems";
import Index from "./components/new/listItems/Index";
import MasterForm from "./components/new/Multistep-components/Multi-Step-Forms";
import DatePicker from "./components/new/datepicker/DatePicker";
import IndexDatePicker from "./components/new/datepicker";
import HotelDetails from "./components/new/hotels/HotelDetails";
import ChatConsole from "./components/new/chatconsole/ChatConsole";
import ChatConsoleRooms from "./components/new/chatconsole-rooms/ChatConsole";
import ProductDetails from "./components/products/Product";
import Products from "./components/products/Product";


function App() {
  let history = useHistory();
  return (
    <div className="">
      {/* <Products /> */}
      <Router>
        <AppRoutes />
      </Router>

      {/* <div style={{ marginTop: "80px" }}>
        <div className="container card">
          <MasterForm />
        </div>
      </div> */}

      {/* <div className="container p-3 card" style={{ marginTop: "80px" }}> */}
      {/* <MasterForm /> */}
      {/* <ItemsList /> */}
      {/* </div> */}

      {/* <HotelDetails /> */}

      {/* <Index /> */}

      {/* <div className="mb-3 py-2">
        <MasterForm />
      </div>
      <ItemsList />

      <ChatConsole />
      {/* <SettingsIndex /> */}
      {/* <div className="border p-md-4 p-lg-4 m-md-4 m-lg-4 mb-3" >
        <SearchBar />
      </div>
      <div>
        <Index />
      </div>
      <IndexDatePicker />
      <HotelDetails /> */}

      {/* <ChatConsoleRooms /> */}
    </div>
  );
}

export default App;
