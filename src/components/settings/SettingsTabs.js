import { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./settings.css";

function SettingsTabs() {
    let history = useHistory();
    const [activeStep, setActiveStep] = useState('Dashboard');

    const settingsTabsData = [
        {
            name: "Dashboard",
            route: "/superadmin/dashboard",
            icon: "fas fa-tachometer-alt",
        },
        {
            name: "Subscriptions",
            route: "/super-admin/bid-history",
            icon: "fas fa-history"
        },
        {
            name: "Settings",
            route: "/settings",
            icon: "far fa-file-alt"
        },
        {
            name: "Integrations",
            route: "/superadmin/userlogs",
            icon: "fas fa-user"
        },
        {
            name: "CRM",
            route: "/superadmin/bidproducts",
            icon: "fas fa-bold"
        },
        {
            name: "Appointments",
            route: "/superadmin/gateways",
            icon: "fas fa-torii-gate"
        },
        {
            name: "Chat Consoles",
            route: "/superadmin/sms",
            icon: "fas fa-comment"
        },
        {
            name: "Calenders",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
        },
        {
            name: "Customers",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
        },
        {
            name: "Coupons",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
        },
        {
            name: "Logout",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
        }
    ]


    const settingssidebarClick = (item, index) => {
        setActiveStep(item.name)
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.name }
        })
    }

    const handleLogout = () => {
        localStorage.clear();
        return history.push('/')
    }


    return (
        <div className="dashboardmain">
            <div className="custom-bg-light">
                <aside id="mySidebar" className="sidebar">
                    <div className="d-flex">
                        <i className="far fa-calendar-alt text-white fa-2x" style={{ position: "fixed", top: "17px", left: "20px" }}></i>
                        <div id="textHide" className="project-name" style={{ color: "#fff", fontWeight: "500", fontSize: "15px" }}>
                            Appointmently
                        </div>
                    </div>
                  
                    <div className="border-top mt-2">
                        <ul className="list-group" style={{ marginLeft: "5px", marginTop: "15px" }}>
                            {
                                settingsTabsData.map((item, index) =>
                                    <li id="sidebarTexts" onClick={() => sidebarClick(item, index)}
                                        className={activeStep === item.name ? 'hamburger sidebar-texts sidebar-active-tab custom-list-group-item border-0 d-flex align-items-center mb-2' : 'mb-2 hamburger sidebar-texts sidebar-inactive-tab custom-list-group-item border-0 d-flex align-items-center'}
                                        data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className={item.icon} style={{ marginRight: "2px", width: "12%" }}></i>
                                        <div id="textHide" style={{ width: "88%" }}>{item.name}</div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default SettingsTabs;
