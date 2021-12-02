import { useState } from "react";
import { useHistory } from 'react-router-dom';

function EmbedAsWidget() {
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

    function openNav() {
        document.getElementById("main").style.marginLeft = "21%";
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
    }
    function closeNav() {
        document.getElementById("sidebarTexts").style.display = "none";
        document.getElementById("main").style.marginLeft = "6%";
        document.getElementById("mySidebar").style.width = "70px";
        document.getElementById("openNav").style.display = "inline-block";
    }

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

            </div>

        </>
    );
}

export default EmbedAsWidget;
