import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function OrderSidebar(props) {
    let history = useHistory();
    const { setClickedItem } = props;
    const [activeStep, setActiveStep] = useState();
    const services = [
        {
            name: "My Order",
            icon: "far fa-id-badge"
        },
        {
            name: "My Address",
            icon: "fas fa-map-marker-alt"
        },
        {
            name: "Files",
            icon: "far fa-file-pdf"
        },
        {
            name: "Messages",
            icon: "far fa-comment"
        },
        {
            name: "Logout",
            icon: "fas fa-sign-out-alt"
        }
    ]
    const onClickService = (item) => {
        setActiveStep(item.name);
        setClickedItem(item.name);
        if (item.name === "Logout") {
            return history.push('/')
        }
    }

    return (
        <>
            <div className="pt-4 media-custom-left">
                <div className="mb-2">
                    {
                        services.map((item, index) =>
                            <li style={{ marginLeft: "10px", fontWeight: "500" }} key={index} onClick={() => onClickService(item, index)}
                                className={activeStep === item.name ? 'border-0 mb-3 sidebarActive' : 'sidebarInctive mb-3 border-0'}>

                                <span className="text-ellipsis" style={{ marginLeft: "12px" }}> <i className={item.icon} style={{ fontSize: "18px", marginRight: "12px" }}></i>{item.name}</span>
                            </li>

                        )
                    }
                </div>
            </div>
        </>
    );
}

export default OrderSidebar;
