import React, { useState } from "react";
import "./sidebar.css";

function SidebarItems(props) {
    const { sidebarClick, activeStep } = props

    const sidebarItems = [
        {
            name: "Soup",
            heading: "Sweet corns",
            img: "./item.jpg",
            cost: "200"
        },
        {
            name: "Tomato Soup",
            heading: "Sweet corns",
            img: "./1.jpg",
            cost: "100"
        },
        {
            name: "Dal Soup",
            heading: "Sweet corns",
            img: "./2.jpg",
            cost: "130"
        },
        {
            name: "Chicken",
            heading: "Chicken Biryani",
            img: "./3.jpg",
            cost: "160"
        },
        {
            name: "Chinese",
            heading: "Egg fired rice",
            img: "./4.jpg",
            cost: "600"
        },
        {
            name: "Biryani",
            heading: "Mutton Biryani",
            img: "./item.jpg",
            cost: "200"
        },
        {
            name: "Chieckn Biryani",
            heading: "Sweet corns",
            img: "./item.jpg",
            cost: "200"
        },
        {
            name: "Biverages",
            heading: "Fish Fry",
            img: "./item.jpg",
            cost: "200"
        }

    ]

    return (
        <>
            <div className="pt-4 media-custom-left">
                {
                    sidebarItems.map((item, index) =>
                        <li key={index} onClick={() => sidebarClick(item, index)}
                            className={activeStep === item.name ? 'border-0 sidebarActive' : 'sidebarInctive border-0'}>
                            <span className="text-ellipsis">{item.name}</span>
                        </li>
                    )
                }
            </div>
        </>
    );
}

export default SidebarItems;
