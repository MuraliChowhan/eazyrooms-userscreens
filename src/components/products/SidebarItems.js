import React, { useState } from "react";
import "./sidebar.css";

function SidebarItems(props) {
    const { sidebarClick, onClickService, sidebarItems, setServiceType, activeStep } = props

    const services = [
        {
            name: "Computer",
            heading: "Fish Fry",
            img: "./item.jpg",
            cost: "200",
            type: "service",
            productList: [
                {
                    producName: "Trednign desings",
                    logo: "./1.jpg",
                    cost: "900"
                },
                {
                    producName: "Stuffed face kid's pillow sdsdsdsd",
                    logo: "./item.jpg",
                    cost: "840"
                },
                {
                    producName: "Stuffed face kid's pillow 121212121212",
                    logo: "./item.jpg",
                    cost: "740"
                },
            ]
        },
        {
            name: "Hardware",
            heading: "Fish Fry",
            img: "./item.jpg",
            cost: "200",
            type: "service",
            productList: [
                {
                    producName: "Kids play",
                    logo: "./1.jpg",
                    cost: "980"
                },
                {
                    producName: "Stuffed face kid's pillow vwe433434",
                    logo: "./item.jpg",
                    cost: "800"
                },
                {
                    producName: "Lehenge choli",
                    logo: "./item.jpg",
                    cost: "560"
                },
            ]
        },
        {
            name: "Software",
            heading: "Fish Fry",
            img: "./item.jpg",
            cost: "200",
            type: "service",
            productList: [
                {
                    producName: "Stuffed face kid's pillow 434fwewdewe",
                    logo: "./1.jpg",
                    cost: "900"
                },
                {
                    producName: "Stuffed face kid's pillow 443wdqwcwe",
                    logo: "./item.jpg",
                    cost: "980"
                },
                {
                    producName: "Stuffed face kid's pillow 23xswcer",
                    logo: "./item.jpg",
                    cost: "880"
                },
            ]
        }
    ]

    return (
        <>
            <div className="pt-4 media-custom-left">
                <div className="mb-3">
                    <h6 style={{ fontWeight: "600" }}>Products</h6>
                    {
                        sidebarItems.map((item, index) =>
                            <li style={{ marginLeft: "10px" }} key={index} onClick={() => sidebarClick(item, index)}
                                className={activeStep === item.name ? 'border-0 sidebarActive' : 'sidebarInctive border-0'}>
                                <span className="text-ellipsis">{item.name}</span>
                            </li>
                        )
                    }
                </div>
                <div className="mb-3">
                    <h6 style={{ fontWeight: "600" }}>Services</h6>
                    {
                        services.map((item, index) =>
                            <span>
                                {
                                    item.type === "service" ?
                                        <li style={{ marginLeft: "10px" }} key={index} onClick={() => onClickService(item, index)}
                                            className={activeStep === item.name ? 'border-0 sidebarActive' : 'sidebarInctive border-0'}>
                                            <span className="text-ellipsis">{item.name}</span>
                                        </li>
                                        :
                                        null
                                }
                            </span>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default SidebarItems;
