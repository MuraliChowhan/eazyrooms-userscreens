import { useState } from "react";
import { useHistory } from 'react-router-dom';
import AddNewServiceModal from "../modals/AddNewServiceModal";
import "./settings.css";

function Service() {
    let history = useHistory();
    const [activeStep, setActiveStep] = useState('Embed as widget');
    const [addnewServiceModal, setAddNewServiceModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

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

    const tableheader = [
        {
            header: "#",
            id: "1",
            userName: "Software Security",
            status: "active",
            avatar: "far fa-user",
            details: "10 persons 20 minutes",
            price: "$90"
        },
        {
            header: "Name",
            id: "2",
            userName: "Development",
            status: "active",
            avatar: "far fa-user",
            details: "10 persons 20 minutes",
            price: "$440"
        },
        {
            header: "Staff",
            id: "3",
            userName: "Web development",
            status: "active",
            avatar: "far fa-user",
            status: "active",
            details: "10 persons 20 minutes",
            price: "$30"
        },
        {
            header: "Details",
            id: "4",
            userName: "App development",
            status: "active",
            avatar: "far fa-user",
            status: "active",
            details: "10 persons 20 minutes",
            price: "$50"
        },
        {
            header: "Price",
            id: "5",
            userName: "Dats science",
            status: "active",
            avatar: "far fa-user",
            status: "active",
            details: "10 persons 20 minutes",
            price: "$440"
        },
        {
            header: "Status",
            id: "6",
            userName: "AI",
            status: "active",
            avatar: "far fa-user",
            status: "active",
            details: "10 persons 20 minutes",
            price: "$660"
        },
        {
            header: "Action",
            id: "7",
            userName: "AI",
            status: "active",
            avatar: "far fa-user",
            status: "active",
            details: "10 persons 20 minutes",
            price: "$650"
        },

    ]

    const dashSidebarOpts = [
        {
            name: "Dashboard",
            route: "/superadmin/dashboard",
            icon: "fas fa-tachometer-alt",
        },
        {
            name: "Bid History",
            route: "/super-admin/bid-history",
            icon: "fas fa-history"
        },
        {
            name: "Transaction Report",
            route: "/superadmin/transaction-reports",
            icon: "far fa-file-alt"
        },
        {
            name: "User Log Report",
            route: "/superadmin/userlogs",
            icon: "fas fa-user"
        },
        {
            name: "Bid complete",
            route: "/superadmin/bidproducts",
            icon: "fas fa-bold"
        },
        {
            name: "Payment Gateways",
            route: "/superadmin/gateways",
            icon: "fas fa-torii-gate"
        },
        {
            name: "SMS API",
            route: "/superadmin/sms",
            icon: "fas fa-comment"
        },
        {
            name: "Ticket Update",
            route: "/superadmin/ticket-update",
            icon: "fas fa-ticket-alt"
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

    const settingsSidebarClick = (item, index) => {
        setActiveStep(item.tabs)
        history.push({
            pathname: item.route,
            state: { data: item.route, param: item.tabs }
        })
    }

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
                        <a id="textHide" className="red cursor-pointer" onClick={closeNav}>??</a>
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
                                <div className="cols-sm-12 col-md-3 p-3">
                                    <div className="bg-white p-3">
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
                                <div className="cols-sm-12  p-3 col-md-9">
                                    <div className="embedAswidget">
                                        <div className="d-flex justify-content-between">
                                            Services
                                            <div className="bg-secondary cursor-pointer rounded p-2" style={{ color: "#fff", fontSize: "13px" }}
                                                onClick={() => setAddNewServiceModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                                            >
                                                Add New Service
                                            </div>
                                        </div>
                                    </div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                {
                                                    tableheader.map((item, index) =>
                                                        <th className="border-bottom-0 table-header" style={{ color: "#000" }} scope="col">{item.header}</th>
                                                    )
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tableheader.map((item, index) =>
                                                    <tr key={index} className="table-hover">

                                                        <td className="table-text table-body-text">{item.id}</td>
                                                        <td className="table-text table-body-text">{item.userName}</td>
                                                        <td className="table-text table-body-text"><i className="far fa-2x fa-user-circle"></i></td>
                                                        <td className="table-text table-body-text">{item.details}</td>
                                                        <td className="table-text table-body-text">{item.price}</td>
                                                        <td className="table-text table-body-text">
                                                            <div className="rounded text-white text-center p-1 w-100" style={{ background: "#28a745" }}>
                                                                <i className="far fa-check-circle"></i> {item.status}
                                                            </div>
                                                        </td>
                                                        <td className="table-text table-body-text text-center">
                                                            <i className="fas fa-ellipsis-h"></i>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>

                                    <div className="d-flex justify-content-end mb-2">
                                        <button className="btn buttonColors">Save Changes</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <AddNewServiceModal
                show={addnewServiceModal.modal}
                onHide={() => setAddNewServiceModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={addnewServiceModal}
            />

        </>
    );
}

export default Service;
