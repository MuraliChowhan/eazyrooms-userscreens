import { useState } from "react";
import "./sidebar.css";
import { useHistory } from 'react-router-dom';

function Sidebar() {
    let history = useHistory();
    const [activeStep, setActiveStep] = useState('Dashboard')

    const settingsTabsData = [
        {
            tabs: "Embed as widget",
            route: "/embed-widgets",
            icon: "fas fa-tachometer-alt",
        },
        {
            tabs: "Company Settings",
            route: "/company-settings",
            icon: "fas fa-history"
        },
        {
            tabs: "Working Hours",
            route: "/working-hours",
            icon: "far fa-file-alt"
        },
        {
            tabs: "Payment Settings",
            route: "/payment-settings",
            icon: "fas fa-user"
        },
        {
            tabs: "Manage Profile",
            route: "/manage-profile",
            icon: "fas fa-bold"
        },
        {
            tabs: "Change Passwords",
            route: "/change-password",
            icon: "fas fa-lock"
        },
        {
            tabs: "Staff",
            route: "/staff",
            icon: "fas fa-comment"
        },
        {
            tabs: "Services",
            route: "/service",
            icon: "fas fa-ticket-alt"
        },
        {
            tabs: "Customers",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
        },
        {
            tabs: "Role",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
        }
    ]



    const sidebarClick = (item, index) => {
        setActiveStep(item.name)
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.name }
        })
    }

    return (
        <>
            <div className="bg-white m-2">
                {
                    settingsTabsData.map((item, index) =>
                        <li id="sidebarTexts" onClick={() => sidebarClick(item, index)}
                            className={activeStep === item.tabs ? 'hamburger sidebar-texts sidebar-active-tab custom-list-group-item border-0 d-flex align-items-center mb-2' : 'mb-2 hamburger sidebar-texts sidebar-inactive-tab custom-list-group-item border-0 d-flex align-items-center'}
                            data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <i className={item.icon} style={{ marginRight: "2px", width: "12%" }}></i>
                            <div id="textHide" style={{ width: "88%" }}>{item.tabs}</div>
                        </li>
                    )
                }
            </div>
        </>
    );
}

export default Sidebar;
