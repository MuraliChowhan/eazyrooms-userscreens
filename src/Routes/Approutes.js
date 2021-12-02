import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SettingsIndex from "../components/settings";
import DashboardIndex from "../components/dashboard";
import React from 'react';
import EmbedAsWidget from "../components/settings/EmbedAsWidget";
import CompanySettings from "../components/settings/CompanySettings";
import ChangePassword from "../components/settings/ChangePassword";
import EmbedWidgets from "../components/settings/EmbedWidget";
import PaymentSettings from "../components/settings/PaymentSettings";
import ManageProfile from "../components/settings/ManageProfile";
import SettingsStaff from "../components/settings/Staff";
import Service from "../components/settings/Service";
import Roles from "../components/settings/Roles";
import PipeLine from "../components/settings/PiepLine";
import Stage from "../components/settings/Stage";
import Source from "../components/settings/Source";
import WorkingHours from "../components/settings/WorkingHours";
import Searchbar from "../components/searchbar/SearchBar";
import HotelDetails from "../components/new/hotels/HotelDetails";
import SearchBar from "../components/new/searchbar/Searchbar";
import Index from "../components/new/listItems/Index";
import ChoosedProducts from "../components/products/BuyChoosedProduct/ChoosedProduct";
import Products from "../components/products/Product";
import ItemsList from "../components/new/ItemsList";
import MasterForm from "../components/new/Multistep-components/Multi-Step-Forms";
import BuyService from "../components/Service/BuyService";
import Categories from "../components/Categories/Categories";
import IndividualCategories from "../components/Categories/IndividualCategories";
import ItemOrders from "../components/products/Orders/Orders";
import CancelOrder from "../components/products/Orders/CancelOrder";
import RequestCancillation from "../components/products/Orders/RequestCancillation";
import ConfirmCancellation from "../components/products/Orders/ConfirmCancellation";
import UplodFiles from "../components/Files/UploadFiles";
import Messages from "../components/Message/Message";
function AppRoutes() {
  return (
    <>
      <Router>
        {/* <Sidebar /> */}
        {/* <Route path="/" exact component={EmbedAsWidget} />
        <Route path="/" exact component={DashboardIndex} /> */}
        {/* <Route path="/settings" exact component={SettingsIndex} /> */}
        {/* <Route path="/embed-as-routes" exact component={EmbedAsWidget} /> */}
        {/* <Route path="/embed-widgets" exact component={EmbedWidgets} />
        <Route path="/company-settings" exact component={CompanySettings} />
        <Route path="/change-password" exact component={ChangePassword} />
        <Route path="/payment-settings" exact component={PaymentSettings} />
        <Route path="/manage-profile" exact component={ManageProfile} />
        <Route path="/staff" exact component={SettingsStaff} />
        <Route path="/service" exact component={Service} />
        <Route path="/role" exact component={Roles} />
        <Route path="/pipeline" exact component={PipeLine} />
        <Route path="/stage" exact component={Stage} />
        <Route path="/source" exact component={Source} />
        <Route path="/working-hours" exact component={WorkingHours} /> */}
        {/* 
        <Route path="/" exact component={SearchBar} />
        <Route path="/hotel-details" exact component={HotelDetails} />
        <Route path="/hotel-menu" exact component={Index} /> */}


        {/* New one */}
        <Route path="/" exact component={Products} />
        <Route path="/choosedproduct" exact component={ChoosedProducts} />
        <Route path="/bag" exact component={MasterForm} />
        <Route path="/buy" exact component={BuyService} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/categories-list" exact component={IndividualCategories} />
        <Route path="/orders" exact component={ItemOrders} />
        <Route path="/cancelorders" exact component={CancelOrder} />
        <Route path="/cancel" exact component={RequestCancillation} />
        <Route path="/confirm-cancel" exact component={ConfirmCancellation} />
        <Route path="/fileupload" exact component={UplodFiles} />
        <Route path="/message" exact component={Messages} />
      </Router>
    </>
  );
}

export default AppRoutes;
