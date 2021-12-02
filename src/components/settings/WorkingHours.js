import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Collapse, Button } from 'react-bootstrap'
import "./settings.css";

function WorkingHours() {
    let history = useHistory();
    const [open, setOpen] = useState(false);
    const [activeStep, setActiveStep] = useState('Embed as widget');
    const [hidden, setHidden] = useState({});

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
            tabs: "Role",
            route: "/role",
            icon: "fas fa-ticket-alt"
        },
        {
            tabs: "PipeLine",
            route: "/pipeline",
            icon: "fas fa-ticket-alt"
        },
        {
            tabs: "Stage",
            route: "/stage",
            icon: "fas fa-ticket-alt"
        },
        {
            tabs: "Source",
            route: "/source",
            icon: "fas fa-ticket-alt"
        },
    ]

    const dashSidebarOpts = [
        {
            name: "Dashboard",
            route: "/",
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
            name: "Logout",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
        }
    ]

    const daysData = [
        {
            day: "Sunday"
        },
        {
            day: "Monday"
        },
        {
            day: "Tuesday"
        },
        {
            day: "Wednesday"
        },
        {
            day: "Thursday"
        },
        {
            day: "Friday"
        },
        {
            day: "Saturday"
        },
    ]

    function openNav() {
        document.getElementById("main").style.marginLeft = "19%";
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("textHide").style.display = "block"

        var hideText, i;
        hideText = document.querySelectorAll("#textHide");

        for (i = 0; i < hideText.length; i++) {
            hideText[i].style.display = "block";
        }
    }

    function closeNav() {
        // document.getElementById("sidebarTexts").style.display = "none";
        document.getElementById("main").style.marginLeft = "80px";
        document.getElementById("mySidebar").style.width = "75px";
        document.getElementById("openNav").style.display = "inline-block";

        var hideText, i;
        hideText = document.querySelectorAll("#textHide");
        for (i = 0; i < hideText.length; i++) {
            hideText[i].style.display = "none";
        }
    }

    const sidebarClick = (item, index) => {
        setActiveStep(item.name);
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.name }
        })
    }

    const settingsSidebarClick = (item, index) => {
        setActiveStep(item.tabs);
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.tabs }
        })
    }

    const toggleHide = index => {
        setHidden({ ...hidden, [index]: !hidden[index] });
    };

    const handleLogout = () => {
        localStorage.clear();
        return history.push('/')
    }

    return (
        <>
            <div className="custom-bg-light custom-padding">
                <aside id="mySidebar" className="sidebar">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="project-name d-flex align-items-center" style={{ color: "#fff", fontWeight: "500", fontSize: "15px" }}>
                            <i className="far fa-calendar-alt text-white py-2 fa-2x" style={{ marginLeft: "22px", marginRight: "10px" }}></i> <span id="textHide" style={{ fontSize: "18px" }}>Appointmently</span>
                        </div>
                        <a id="textHide" className="red cursor-pointer" onClick={closeNav}>×</a>
                    </div>

                    <div className="border-top">
                        <ul className="list-group" style={{ marginLeft: "5px" }}>
                            {
                                dashSidebarOpts.map((item, index) =>
                                    <li id="sidebarTexts" onClick={() => sidebarClick(item, index)}
                                        className={activeStep === item.name ? 'hamburger sidebar-texts F custom-list-group-item border-0 d-flex align-items-center mb-2' : 'mb-2 hamburger sidebar-texts sidebar-inactive-tabs custom-list-group-item border-0 d-flex align-items-center'}
                                        data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className={item.icon} style={{ marginRight: "2px", width: "12%" }}></i>
                                        <div id="textHide" style={{ width: "88%" }}>{item.name}</div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </aside>

                <div id="main" style={{ marginLeft: "243px", marginRight: "4px" }}>
                    <div onClick={openNav}>
                        <div className="bg-white p-1">
                            <div style={{ marginLeft: "26px", marginRight: "23px" }}>
                                <div className="d-flex justify-content-between mb-2" style={{ paddingTop: "11px" }}>
                                    <div className="align-items-center">
                                        <i className="green fas fa-bars sidebar-icon cursor-pointer" id="openNav"></i>

                                    </div>
                                    <span className="cursor-pointer"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                    ><i className="far fa-user rounded-circle"></i> Admin</span>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li onClick={() => handleLogout()}><a className="dropdown-item" href="#">Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div style={{ height: "550px", overflow: "auto" }}>
                            <div className="row mx-2 bg-light">
                                <div className="cols-sm-12 p-3 col-md-3">
                                    <div className="bg-white p-3 ">
                                        {
                                            settingsTabsData.map((item, index) =>
                                                <li onClick={() => settingsSidebarClick(item, index)}
                                                    className={activeStep === item.tabs ? 'hamburger sidebar-texts sidebar-active-tab custom-list-group-item border-0 d-flex align-items-center mb-2' : 'mb-2 hamburger sidebar-texts sidebar-inactive-tab custom-list-group-item border-0 d-flex align-items-center'}
                                                    data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <i className={item.icon} style={{ marginRight: "2px", width: "12%" }}></i>
                                                    <div style={{ width: "88%" }}>{item.tabs}</div>
                                                </li>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="cols-sm-12 p-3 col-md-9">
                                    {
                                        daysData.map((item, index) =>
                                            <div key={index}>
                                                <button
                                                    className="btn buttonColors mb-3"
                                                    onClick={e => toggleHide(index)}
                                                    aria-controls="sunday-collapse-text"
                                                    aria-expanded={open}
                                                >
                                                    {item.day}
                                                </button>
                                                <div>
                                                    {!!hidden[index] &&

                                                        <div id="sunday-collapse-text">
                                                            <div class="row g-3 align-items-center">
                                                                <div class="col-2">
                                                                    <label for="inputPassword6" className="normal-text col-form-label">Select time</label>
                                                                </div>
                                                                <div class="col-8">
                                                                    <input type="time" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                                                </div>
                                                            </div>
                                                            <div className="normal-text mb-3 cursor-pointer">+ Add New Time</div>
                                                        </div>

                                                    }
                                                    {!hidden[index] && <span></span>}
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkingHours;
