import { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./dashboard.css";
import QuickLinks from "./QuickLinks";
import AddNewServiceModal from "../modals/AddNewServiceModal";
import AddAppointmentModal from "./modals/AppointmentModal";

function Dashboard() {
    let history = useHistory();
    const [activeStep, setActiveStep] = useState('Dashboard');
    const [appointmentModal, setAppointmentModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

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
            route: "/embed-widgets",
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
    const superAdminData = [
        {
            count: "50",
            desc: "Appointments",
            total: "Properties",
            running: "Running",
            upcoming: "Running",
            expired: "Running",
            bgcolor: "rgb(40 110 251 / 14%)",
            bgcolor3: "rgb(13 181 215 / 72%)",
            icon: "far fa-calendar-alt",
            icon2: "far fa-calendar-check",
            totalProperties: "17",
            name: "Total Properties",
            totalBids: "23",
            text: "Total Bids",
            dashicon: "./icons/business.svg",
            cardsBgcolor: "rgb(251 40 215 / 14%)",
            textColor: "#0d6efd",
            textColor2: "rgb(251 40 215)",
            iconBgColor: "rgba(0,0,0,0.5)",
            dashCardsBg: "rgb(255 143 169 / 25%)",
            icon3: "fas fa-bold",
            // icon2: "fas fa-plus",
            bgColor3: "rgb(197 128 225 / 25%)"
        },
        {
            count: "30",
            desc: "Staffs",
            total: "Properties",
            running: "Running",
            upcoming: "Running",
            expired: "Running",
            bgcolor: "rgba(220,53,69,.1)",
            bgcolor3: "rgb(13 47 215 / 72%)",
            icon: "fas fa-users",
            icon2: "fas fa-user-plus",
            totalProperties: "12",
            name: "Running Properties",
            totalBids: "23",
            text: "Total Winners",
            dashicon: "./icons/award.svg",
            cardsBgcolor: "rgb(18 165 235 / 18%)",
            textColor: "#dc3545",
            textColor2: "rgb(18 165 235 / 98%)",
            iconBgColor: "rgba(0,0,0,0.5)",
            dashCardsBg: "rgb(74 182 172 / 25%)",
            icon3: "fas fa-trophy",
            bgColor3: "rgb(54 192 215 / 43%)"
        },
        {
            count: "10",
            desc: "Serivces",
            total: "Properties",
            running: "Running",
            upcoming: "Running",
            expired: "Running",
            bgcolor: "rgba(40,167,69,.1)",
            bgcolor3: "rgb(215 13 97 / 72%)",
            icon: "fas fa-stream",
            icon2: "fas fa-comment-dots",
            totalProperties: "2",
            name: "Upcoming Properties",
            totalBids: "43",
            text: "Pending",
            dashicon: "./icons/information.svg",
            cardsBgcolor: "rgb(184 198 69 / 9%)",
            textColor: "#20c997",
            textColor2: "rgb(184 198 69 / 95%)",
            iconBgColor: "rgba(0,0,0,0.5)",
            dashCardsBg: "rgb(182 252 181 / 25%)",
            icon3: "fas fa-spinner",
            bgColor3: "rgb(68 30 184 / 16%)"
        },
        {
            count: "10",
            desc: "Customers",
            total: "Properties",
            running: "Running",
            upcoming: "Running",
            expired: "Running",
            bgcolor: "rgb(13 202 240 / 20%)",
            icon: "fas fa-user-friends",
            icon2: "fas fa-envelope",
            totalProperties: "3",
            name: "Completed Properties",
            totalBids: "23",
            text: "SOLD",
            dashicon: "./icons/sold.svg",
            cardsBgcolor: "rgb(13 252 64 / 12%)",
            textColor: "#0dcaf0",
            bgcolor3: "rgb(117 6 173 / 72%)",
            textColor2: "rgb(13 252 64)",
            iconBgColor: "rgba(0,0,0,0.5)",
            dashCardsBg: "rgb(236 133 255 / 25%)",
            icon3: "fab fa-stripe-s",

            bgColor3: "rgb(68 174 215 / 20%)"
        }
    ]

    const superAdminData2 = [
        {

            icon: "far fa-calendar-alt",
            icon2: "far fa-calendar-check",
            totalProperties: "17",
            name: "Total Properties",
            totalBids: "23",
            text: "Total Bids",
            appointments: "New Appointments"
        },
        {

            icon: "fas fa-users",
            icon2: "fas fa-user-plus",
            totalProperties: "12",
            name: "Running Properties",
            totalBids: "23",
            text: "Total Winners",
            appointments: "Add clients"
        },
        {

            icon: "fas fa-stream",
            icon2: "fas fa-comment-dots",
            totalProperties: "2",
            name: "Upcoming Properties",
            totalBids: "43",
            text: "Pending",
            appointments: "Send message"
        },
        {

            icon: "fas fa-user-friends",
            icon2: "fas fa-envelope",
            totalProperties: "3",
            name: "Completed Properties",
            totalBids: "23",
            text: "SOLD",
            appointments: "Send mail"
        },
        {

            icon: "fas fa-user-friends",
            icon2: "fas fa-receipt",
            totalProperties: "3",
            name: "Completed Properties",
            totalBids: "23",
            text: "SOLD",
            appointments: "New Invoice"
        }
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

                        <div style={{ padding: "18px 25px 18px 26px" }}>
                            {/* <div className="d-flex justify-content-between">
                                <div className="dashboard-text mb-2">Dashboard</div>
                                <div className="cronj-job-text cursor-pointer common-text-color">Last run: 1 min ago</div>
                            </div> */}
                            <div className="row mb-4">
                                {
                                    superAdminData.map((item, index) =>
                                        <div className="col-sm-12 col-md-3 col-lg-3">
                                            {/* style={{ background: item.bgcolor }} */}
                                            <div className="h-100 ">
                                                <div className="dashbord-custom-card p-2 border-0" style={{ background: item.bgcolor }}>
                                                    <div className="row align-items-center">
                                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                                            {/* <img src={item.icon} width="100%" /> */}
                                                            <div className="fa-2x text-white" style={{ paddingTop: "10px", width: "70px", height: "70px", borderRadius: "50px", textAlign: "center", backgroundColor: item.textColor }}>
                                                                <i className={item.icon}> </i>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-8 col-lg-8">
                                                            <div className="d-flex justify-content-end mb-1">
                                                                <div className="dashboard-text" style={{ color: item.textColor }} >{item.count}</div>
                                                            </div>
                                                            <div className="d-flex justify-content-end mb-2">
                                                                <div className="first-dashboard-desc-text text-truncate" style={{ color: item.textColor }}>{item.desc}</div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>


                            <div className="row mb-4" style={{ marginLeft: "1px" }}>
                                {
                                    superAdminData2.map((item, index) =>
                                        <div className="col-sm-12 col-md-2 col-lg-2 px-1">
                                            {/* style={{ background: item.bgcolor }} */}

                                            <div className="cards-border-lines text-center"
                                                onClick={() => setAppointmentModal({ modal: true, action: 'Edit', modalType: item.appointments, details: '' })}

                                            >
                                                {/* <img src={item.icon} width="100%" /> */}
                                                <div className="fa-2x text-info" style={{ marginLeft: "20px", paddingTop: "10px", width: "70px", height: "70px", borderRadius: "50px", textAlign: "center", backgroundColor: "rgba(40, 110, 251, 0.1)" }}>
                                                    <i className={item.icon2}> </i>

                                                </div>
                                                <div className="appointment-text-color">
                                                    {item.appointments}
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-8 col-lg-8">
                                                <div className="d-flex justify-content-end mb-1">
                                                    <div className="dashboard-card-text text-white text-truncate" style={{ color: item.textColor }} >{item.text}</div>
                                                </div>
                                                <div className="d-flex justify-content-end mb-2">
                                                    <div className="first-dashboard-desc-text text-truncate  text-white" style={{ color: item.textColor }}>{item.count}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        {/* <div>
                            <CompanySettings />
                            <PaymentSettings />
                            <ManageProfile />
                            <ChangePassword />
                            <WorkingHours />
                        </div> */}
                        <div style={{ padding: "18px 25px 18px 26px" }}>
                            <QuickLinks />
                        </div>
                    </div>
                </div>
            </div>

            <AddAppointmentModal
                show={appointmentModal.modal}
                onHide={() => setAppointmentModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={appointmentModal}
            />
        </div>
    );
}

export default Dashboard;
