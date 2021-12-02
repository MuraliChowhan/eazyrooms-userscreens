import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Tabs, Row, Tab, Col, Nav } from 'react-bootstrap'
import "./settings.css";
import CreateNewStage from "../modals/CreateNewStageModal";
import LastReasonModal from "../modals/LastReasonModal";
import AddStageModal from "../modals/AddStageModal";

function Stage() {
    let history = useHistory();
    const [activeStep, setActiveStep] = useState('Embed as widget');
    const [createStageModal, setCreateStageModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
    const [lastReasonModal, setLastReasonModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
    const [addStageModal, setAddStageModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

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
            icon: "fas fa-torii-gate"
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

    const stagedata = [
        {
            name: "Proposol sent"
        },
        {
            name: "Lead Generated"
        },
        {
            name: "Contact made"
        },
        {
            name: "Walked in"
        },
        {
            name: "Follow up"
        },
        {
            name: "Processing"
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
                                <div className="cols-sm-12 p-3 col-md-9">
                                    <div className="d-flex justify-content-end">
                                        <button className="btn buttonColors"
                                            onClick={() => setAddStageModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                                        >Add Stage</button>
                                    </div>
                                    <Tabs
                                        defaultActiveKey="home"
                                        transition={false}
                                        id="noanim-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="home" title="Before Enrolement" style={{ fontSize: "14px" }}>
                                            {
                                                stagedata.map((item, index) =>
                                                    <div className="rounded mb-3 p-3" style={{ borderStyle: "solid", borderColor: "green", backgroundColor: "#f5fff9" }}>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div style={{ fontSize: "15px", color: "green", fontWeight: "500" }}>
                                                                {item.name}
                                                            </div>
                                                            <i className="delete-icon-bg far fa-trash-alt text-white"></i>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </Tab>
                                        <Tab eventKey="profile" title="After Enrolment" style={{ fontSize: "14px" }}>
                                            {
                                                stagedata.map((item, index) =>
                                                    <div className="rounded mb-3 p-3" style={{ borderStyle: "solid", borderColor: "green", backgroundColor: "#f5fff9" }}>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div style={{ fontSize: "15px", color: "green", fontWeight: "500" }}>
                                                                {item.name}
                                                            </div>
                                                            <i className="delete-icon-bg far fa-trash-alt text-white"></i>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </Tab>
                                        <Tab eventKey="contact" title="Stages" >
                                            <div className="mb-2" style={{ fontSize: "16px", fontWeight: "400" }}>
                                                Stages
                                            </div>
                                            <div className="mb-3" style={{ fontSize: "14px", fontWeight: "400" }}>
                                                Set up all the stages for your deals to move through.
                                                By default, the new deal is created on the first stage listed below.
                                            </div>
                                            <div className="btn-pipeline normal-text mb-2" style={{ backgroundColor: "#50a5f1" }}>
                                                Pipe line 01
                                            </div>
                                            <div className="btn-pipeline normal-text mb-2" style={{ backgroundColor: "#2a9c72" }}>
                                                Pipe line 02
                                            </div>
                                            <div className="btn-pipeline normal-text mb-2" style={{ backgroundColor: "#ffca2c" }}>
                                                Pipe line 03
                                            </div>
                                            <div className="mb-3 text-info normal-text"
                                                onClick={() => setCreateStageModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
                                            >
                                                <i className="fas text-info fa-plus"></i> Create new stage
                                            </div>

                                            <div className="mb-2" style={{ fontSize: "16px", fontWeight: "400" }}>
                                                Final Stages
                                            </div>
                                            <div className="mb-3" style={{ fontSize: "14px", fontWeight: "400" }}>
                                                If the deal is lost, don't forget to add a comment explaining what exactly went wrong.
                                                This information will help you understand what should be done to close more deals in the future.
                                            </div>
                                            <div className="btn-pipeline normal-text mb-2" style={{ backgroundColor: "#2a9c72" }}>
                                                Win
                                            </div>
                                            <div className="btn-pipeline normal-text mb-4" style={{ backgroundColor: "#ffca2c" }}>
                                                Loose
                                            </div>
                                            <div className="mb-2" style={{ fontSize: "16px", fontWeight: "400" }}>
                                                Last Reasons
                                            </div>
                                            <div className="mb-3" style={{ fontSize: "14px", fontWeight: "400" }}>
                                                Your teammates should specify the reason for each deal lost so you could determine the weak points of your sales pipeline.
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" value="High Prices" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" value="Don't need the item anymore" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" value="Bought the item somewhere else" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" value="Don't accept terms and conditions" className="form-control" />
                                            </div>
                                            <div className="mb-2 text-info cursor-pointer" style={{ fontSize: "14px", fontWeight: "400" }}
                                                onClick={() => setLastReasonModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
                                            >
                                                Add a Last Reasons
                                            </div>
                                            <div className="mb-3">
                                                <label className="mb-2" style={{ fontSize: "14px", fontWeight: "400" }}>
                                                    Currency
                                                </label>
                                                <input type="text" value="Don't accept terms and conditions" className="form-control" />
                                            </div>
                                        </Tab>
                                    </Tabs>

                                    <div className="d-flex justify-content-end mb-2">
                                        <button className="btn buttonColors">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <CreateNewStage
                show={createStageModal.modal}
                onHide={() => setCreateStageModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={createStageModal}
            />

            <LastReasonModal
                show={lastReasonModal.modal}
                onHide={() => setLastReasonModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={lastReasonModal}
            />

            <AddStageModal
                show={addStageModal.modal}
                onHide={() => setAddStageModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={addStageModal}
            />

        </>
    );
}

export default Stage;
